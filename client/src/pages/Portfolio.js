import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Code, Star, Eye } from 'lucide-react';
import axios from 'axios';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  // API base URL
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'mobile', name: 'Mobil Uygulama' },
    { id: 'web', name: 'Web Sitesi' },
    { id: 'corporate', name: 'Kurumsal Site' },
    { id: 'personal', name: 'Bireysel Site' },
    { id: 'viral', name: 'Viral Site' }
  ];

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/projects`);
      setProjects(response.data);
      setFilteredProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback data
      setProjects([
        {
          id: 1,
          title: "iOS Fitness App",
          description: "Swift ile geliştirilmiş fitness takip uygulaması",
          category: "mobile",
          image_url: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=iOS+App",
          demo_url: "#",
          github_url: "#",
          technologies: "Swift, SwiftUI, Core Data",
          price: "₺25,000"
        },
        {
          id: 2,
          title: "E-ticaret Sitesi",
          description: "Modern ve responsive e-ticaret web sitesi",
          category: "web",
          image_url: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=E-commerce",
          demo_url: "#",
          github_url: "#",
          technologies: "React, Node.js, MongoDB",
          price: "₺15,000"
        }
      ]);
      setFilteredProjects([
        {
          id: 1,
          title: "iOS Fitness App",
          description: "Swift ile geliştirilmiş fitness takip uygulaması",
          category: "mobile",
          image_url: "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=iOS+App",
          demo_url: "#",
          github_url: "#",
          technologies: "Swift, SwiftUI, Core Data",
          price: "₺25,000"
        },
        {
          id: 2,
          title: "E-ticaret Sitesi",
          description: "Modern ve responsive e-ticaret web sitesi",
          category: "web",
          image_url: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=E-commerce",
          demo_url: "#",
          github_url: "#",
          technologies: "React, Node.js, MongoDB",
          price: "₺15,000"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

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
            <span className="gradient-text">Portföyümüz</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"
          >
            Başarıyla tamamladığımız projelerden örnekler. 
            Her proje modern teknolojiler ve yaratıcı tasarımlarla geliştirildi.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'glass text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Filter className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
              <p className="text-gray-300 mt-4">Projeler yükleniyor...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        Öne Çıkan
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(', ').map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.live_url && (
                        <a
                          href={project.live_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Canlı Demo
                        </a>
                      )}
                      {project.github_url && (
                        <a
                          href={project.github_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 glass text-gray-300 px-4 py-2 rounded-lg font-semibold hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <Github className="w-4 h-4" />
                          Kod
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <Code className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Proje Bulunamadı</h3>
              <p className="text-gray-500">Seçilen kategoride henüz proje bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-dark-800/50 to-dark-900/50">
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
              Bu projelerden ilham alarak kendi projenizi geliştirmek ister misiniz?
            </p>
            <a 
              href="/contact"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center gap-2"
            >
              Hemen İletişime Geçin
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 