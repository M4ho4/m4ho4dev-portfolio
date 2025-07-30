const express = require('express');
const multer = require('multer');
const path = require('path');
const { db } = require('../database');
const router = express.Router();

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// Get all projects (public)
router.get('/', (req, res) => {
  const { category } = req.query;
  let query = 'SELECT * FROM projects ORDER BY created_at DESC';
  let params = [];

  if (category) {
    query = 'SELECT * FROM projects WHERE category = ? ORDER BY created_at DESC';
    params = [category];
  }

  db.all(query, params, (err, projects) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(projects);
  });
});

// Get featured projects
router.get('/featured', (req, res) => {
  db.all('SELECT * FROM projects WHERE featured = 1 ORDER BY created_at DESC', (err, projects) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(projects);
  });
});

// Get project by ID
router.get('/:id', (req, res) => {
  db.get('SELECT * FROM projects WHERE id = ?', [req.params.id], (err, project) => {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  });
});

// Admin routes (require authentication)
const { authenticateToken } = require('./auth');

// Create new project
router.post('/', authenticateToken, upload.single('image'), (req, res) => {
  const { title, description, category, demo_url, github_url, technologies, price } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !category) {
    return res.status(400).json({ message: 'Title and category are required' });
  }

  db.run(`
    INSERT INTO projects (title, description, category, image_url, live_url, github_url, technologies, price)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `, [title, description, category, image_url, demo_url, github_url, technologies, price], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(201).json({ id: this.lastID, message: 'Project created successfully' });
  });
});

// Update project
router.put('/:id', authenticateToken, upload.single('image'), (req, res) => {
  const { title, description, category, demo_url, github_url, technologies, price } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;

  let query = `
    UPDATE projects 
    SET title = ?, description = ?, category = ?, live_url = ?, github_url = ?, technologies = ?, price = ?
  `;
  let params = [title, description, category, demo_url, github_url, technologies, price];

  if (image_url) {
    query += ', image_url = ?';
    params.push(image_url);
  }

  query += ' WHERE id = ?';
  params.push(req.params.id);

  db.run(query, params, function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project updated successfully' });
  });
});

// Delete project
router.delete('/:id', authenticateToken, (req, res) => {
  db.run('DELETE FROM projects WHERE id = ?', [req.params.id], function(err) {
    if (err) {
      return res.status(500).json({ message: 'Database error' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ message: 'Project deleted successfully' });
  });
});

module.exports = router; 