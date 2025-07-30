# M4ho4Dev Portfolio Website

Modern, responsive ve tam fonksiyonel portfolio web sitesi. Swift uzmanlığı vurgusu ile mobil uygulama ve web geliştirme hizmetleri sunuyor.

## 🚀 Özellikler

- **Modern Tasarım**: Tailwind CSS ve Framer Motion ile
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Admin Paneli**: Proje ve mesaj yönetimi
- **Swift Uzmanlığı**: iOS geliştirme vurgusu
- **Email Entegrasyonu**: İletişim formu bildirimleri
- **Proje Yönetimi**: CRUD işlemleri ve resim yükleme

## 🛠️ Teknolojiler

### Frontend
- React.js
- Tailwind CSS
- Framer Motion
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- SQLite
- JWT Authentication
- Multer (File Upload)
- Nodemailer

## 📦 Kurulum

### Gereksinimler
- Node.js (v18+)
- npm veya yarn

### Adım 1: Projeyi İndirin
```bash
git clone <repository-url>
cd PW
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
# Backend bağımlılıkları
npm install

# Frontend bağımlılıkları
cd client
npm install
cd ..
```

### Adım 3: Environment Variables
`.env` dosyası oluşturun:
```env
PORT=3001
EMAIL_PASSWORD=your_gmail_app_password
```

### Adım 4: Veritabanını Başlatın
```bash
node database.js
```

### Adım 5: Sunucuları Başlatın
```bash
# Backend (Terminal 1)
node server.js

# Frontend (Terminal 2)
cd client
npm start
```

## 🌐 Deployment

### Vercel (Önerilen)

#### Frontend Deployment
```bash
# Vercel CLI kurulumu
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

#### Backend Deployment (Railway/Render)
1. **Railway.com**'a gidin
2. GitHub repo'nuzu bağlayın
3. Environment variables ekleyin:
   - `PORT=3001`
   - `EMAIL_PASSWORD=your_gmail_app_password`

### Environment Variables
Production'da şu environment variables'ları ayarlayın:

```env
# Backend
PORT=3001
EMAIL_PASSWORD=your_gmail_app_password

# Frontend
REACT_APP_API_URL=https://your-backend-url.com
```

## 🔐 Admin Giriş

- **URL**: `http://localhost:3001/admin`
- **Kullanıcı Adı**: `admin`
- **Şifre**: `admin123`

## 📧 Email Kurulumu

### Gmail App Password Oluşturma
1. Google Hesabınıza gidin
2. Güvenlik > 2 Adımlı Doğrulama'yı açın
3. Uygulama Şifreleri > Yeni uygulama şifresi oluşturun
4. `.env` dosyasına `EMAIL_PASSWORD` olarak ekleyin

## 🎨 Özelleştirme

### Renkler (tailwind.config.js)
```javascript
colors: {
  primary: {
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
  },
  accent: {
    500: '#8b5cf6',
  }
}
```

### İçerik Güncelleme
- **Projeler**: Admin panelinden yönetin
- **İletişim Bilgileri**: `client/src/pages/Contact.js`
- **Hizmetler**: `client/src/pages/Services.js`

## 📱 Swift Uzmanlığı

Site özellikle Swift ve iOS geliştirme uzmanlığınızı vurgular:
- **Services Sayfası**: Swift/SwiftUI öne çıkarıldı
- **Teknoloji Listesi**: Mobil kategorisinde Swift ilk sırada
- **Uzmanlık Etiketi**: Swift kartında özel vurgu

## 🚀 Canlı Demo

- **Frontend**: https://your-vercel-url.vercel.app
- **Admin Panel**: https://your-backend-url.com/admin

## 📞 İletişim

- **Email**: m4ho4666@gmail.com
- **Telefon**: +90 554 004 4069
- **Adres**: Kahramanmaraş, Türkiye

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**M4ho4Dev** - Swift Uzmanlığı ile Modern Web Geliştirme 🍎✨ 