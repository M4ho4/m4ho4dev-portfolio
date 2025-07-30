import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Smartphone, 
  Globe, 
  Building, 
  User, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobil Uygulama",
      description: "Swift uzmanlığı ile iOS ve Android için modern mobil uygulamalar geliştiriyoruz.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Sitesi",
      description: "Responsive ve modern web siteleri tasarlıyoruz.",
      color: "from-green-500 to-blue-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Kurumsal Site",
      description: "Profesyonel kurumsal web siteleri ve e-ticaret çözümleri.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Bireysel Site",
      description: "Kişisel portföy ve blog siteleri.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Viral Siteler",
      description: "Trend olan ve viral potansiyeli yüksek web siteleri.",
      color: "from-pink-500 to-purple-600"
    }
  ];

  const features = [
    "Modern ve responsive tasarım",
    "SEO optimizasyonu",
    "Hızlı yükleme süreleri",
    "Güvenli altyapı",
    "7/24 destek",
    "Ücretsiz bakım"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-500/20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Modern Web</span>
            <br />
            <span className="text-white">Geliştirme</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Mobil uygulamalardan kurumsal web sitelerine kadar, 
            dijital dünyada markanızı öne çıkaracak çözümler geliştiriyoruz.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/portfolio"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Portföyümü Görün
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              İletişime Geçin
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
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
              <span className="gradient-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Her ihtiyacınıza uygun dijital çözümler sunuyoruz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <Link 
                  to="/services"
                  className="text-primary-400 hover:text-primary-300 font-semibold flex items-center gap-2"
                >
                  Detayları Görün
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Neden <span className="gradient-text">Bizi</span> Seçmelisiniz?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-lg text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projenizi <span className="gradient-text">Hayata</span> Geçirelim
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Hayalinizdeki projeyi gerçeğe dönüştürmek için hemen iletişime geçin
            </p>
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              Ücretsiz Teklif Alın
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 