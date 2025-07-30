const express = require('express');
const nodemailer = require('nodemailer');
const { db } = require('../database');
const router = express.Router();

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'm4ho4666@gmail.com', // Your email
    pass: process.env.EMAIL_PASSWORD // App password from Gmail
  }
});

// Submit contact form
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email and message are required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address' });
  }

  try {
    // Save to database
    db.run(`
      INSERT INTO contacts (name, email, phone, message)
      VALUES (?, ?, ?, ?)
    `, [name, email, phone, message], function(err) {
      if (err) {
        return res.status(500).json({ message: 'Database error' });
      }

      // Send email notification
      const mailOptions = {
        from: 'm4ho4666@gmail.com',
        to: 'm4ho4666@gmail.com', // Your email where you want to receive notifications
        subject: `Yeni İletişim Mesajı - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              Yeni İletişim Mesajı
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #007bff; margin-top: 0;">Mesaj Detayları:</h3>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; width: 120px;">Ad Soyad:</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                  <td style="padding: 8px 0; color: #333;">
                    <a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555;">Telefon:</td>
                  <td style="padding: 8px 0; color: #333;">
                    <a href="tel:${phone}" style="color: #007bff; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Mesaj:</td>
                  <td style="padding: 8px 0; color: #333; line-height: 1.6;">${message}</td>
                </tr>
              </table>
            </div>
            
            <div style="background-color: #e9ecef; padding: 15px; border-radius: 8px; margin-top: 20px;">
              <p style="margin: 0; color: #6c757d; font-size: 14px;">
                <strong>Tarih:</strong> ${new Date().toLocaleString('tr-TR')}<br>
                <strong>IP Adresi:</strong> ${req.ip}<br>
                <strong>User Agent:</strong> ${req.get('User-Agent')}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="http://localhost:3001/admin" 
                 style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Admin Paneline Git
              </a>
            </div>
          </div>
        `
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email sending error:', error);
          // Still return success to user even if email fails
        } else {
          console.log('Email sent successfully:', info.messageId);
        }
      });

      res.status(201).json({ 
        message: 'Message sent successfully! We will get back to you soon.',
        id: this.lastID 
      });
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all contact messages (admin only)
const { authenticateToken } = require('./auth');

router.get('/', authenticateToken, (req, res) => {
  db.all('SELECT * FROM contacts ORDER BY created_at DESC', (err, contacts) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(contacts);
  });
});

// Mark message as read
router.put('/:id/read', authenticateToken, (req, res) => {
  db.run('UPDATE contacts SET read = 1 WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message marked as read' });
  });
});

// Delete contact message
router.delete('/:id', authenticateToken, (req, res) => {
  db.run('DELETE FROM contacts WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.json({ message: 'Message deleted successfully' });
  });
});

// Get unread messages count
router.get('/unread/count', authenticateToken, (req, res) => {
  db.get('SELECT COUNT(*) as count FROM contacts WHERE read = 0', (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json({ count: result.count });
  });
});

module.exports = router; 