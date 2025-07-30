import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Globe, 
  Building, 
  User, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Smartphone as Mobile,
  Monitor,
  Palette,
  Code
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobil Uygulama Geliştirme",
      description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.",
      features: [
        "Native iOS uygulamaları (Swift/SwiftUI)",
        "Native Android uygulamaları (Kotlin/Java)",
        "React Native cross-platform çözümler",
        "Flutter ile hızlı geliştirme",
        "App Store ve Google Play optimizasyonu",
        "Push notification entegrasyonu",
        "Offline çalışma desteği",
        "Swift ile iOS geliştirme (uzmanlık alanı)"
      ],
      color: "from-blue-500 to-purple-600",
      price: "Başlangıç: ₺15,000"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Web Sitesi Geliştirme",
      description: "Modern, responsive ve SEO dostu web siteleri tasarlıyoruz.",
      features: [
        "Responsive tasarım",
        "SEO optimizasyonu",
        "Hızlı yükleme süreleri",
        "Modern teknolojiler (React, Next.js)",
        "CMS entegrasyonu",
        "Analytics ve raporlama"
      ],
      color: "from-green-500 to-blue-600",
      price: "Başlangıç: ₺8,000"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Kurumsal Web Sitesi",
      description: "Profesyonel kurumsal web siteleri ve e-ticaret çözümleri.",
      features: [
        "Kurumsal kimlik tasarımı",
        "E-ticaret entegrasyonu",
        "Müşteri yönetim sistemi",
        "Çoklu dil desteği",
        "Güvenlik sertifikaları",
        "7/24 teknik destek"
      ],
      color: "from-purple-500 to-pink-600",
      price: "Başlangıç: ₺25,000"
    },
    {
      icon: <User className="w-12 h-12" />,
      title: "Bireysel Web Sitesi",
      description: "Kişisel portföy, blog ve kişisel marka siteleri.",
      features: [
        "Kişisel portföy tasarımı",
        "Blog sistemi",
        "Sosyal medya entegrasyonu",
        "İletişim formları",
        "Galeri ve medya yönetimi",
        "Domain ve hosting kurulumu"
      ],
      color: "from-orange-500 to-red-600",
      price: "Başlangıç: ₺5,000"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Viral Web Siteleri",
      description: "Trend olan ve viral potansiyeli yüksek web siteleri.",
      features: [
        "Viral içerik stratejisi",
        "Sosyal medya entegrasyonu",
        "Kullanıcı etkileşimi",
        "Analytics ve takip",
        "Hızlı yayılma optimizasyonu",
        "Monetizasyon stratejileri"
      ],
      color: "from-pink-500 to-purple-600",
      price: "Başlangıç: ₺12,000"
    }
  ];

  const technologies = [
    { name: "Swift", icon: "🍎", category: "Mobile" },
    { name: "SwiftUI", icon: "📱", category: "Mobile" },
    { name: "React", icon: "⚛️", category: "Web" },
    { name: "Next.js", icon: "▲", category: "Web" },
    { name: "Node.js", icon: "🟢", category: "Backend" },
    { name: "TypeScript", icon: "📘", category: "Web" },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend" },
    { name: "MongoDB", icon: "🍃", category: "Database" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "Docker", icon: "🐳", category: "DevOps" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Firebase", icon: "🔥", category: "Backend" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Hizmetlerimiz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Her ihtiyacınıza uygun dijital çözümler sunuyoruz. 
            Modern teknolojiler ve yaratıcı tasarımlarla projelerinizi hayata geçiriyoruz.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Özellikler:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary-400 font-semibold text-lg">{service.price}</span>
                  <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center gap-2">
                    Teklif Al
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-800/50 to-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kullandığımız <span className="gradient-text">Teknolojiler</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Modern ve güvenilir teknolojilerle projelerinizi geliştiriyoruz
            </p>
          </motion.div>

          {/* Mobile Technologies - Swift Öne Çıkarılıyor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="gradient-text">Mobil Geliştirme</span> - Swift Uzmanlığı
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.filter(tech => tech.category === "Mobile").map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 ${
                    tech.name === "Swift" ? "ring-2 ring-primary-500/50 bg-primary-500/10" : ""
                  }`}
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                  {tech.name === "Swift" && (
                    <span className="text-xs text-primary-400 mt-2 block">Uzmanlık Alanı</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Web Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="gradient-text">Web Geliştirme</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.filter(tech => tech.category === "Web" || tech.category === "Frontend").map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <span className="gradient-text">Backend & DevOps</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.filter(tech => tech.category === "Backend" || tech.category === "Database" || tech.category === "DevOps" || tech.category === "Cloud").map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{tech.icon}</div>
                  <h4 className="text-white font-semibold">{tech.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Çalışma <span className="gradient-text">Sürecimiz</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Palette className="w-8 h-8" />, title: "Tasarım", desc: "Modern ve kullanıcı dostu tasarım" },
              { icon: <Code className="w-8 h-8" />, title: "Geliştirme", desc: "Kodlama ve teknik implementasyon" },
              { icon: <Zap className="w-8 h-8" />, title: "Test", desc: "Kapsamlı test ve optimizasyon" },
              { icon: <Shield className="w-8 h-8" />, title: "Yayın", desc: "Güvenli deployment ve bakım" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 