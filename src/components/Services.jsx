import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Zap, Users, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Monitor size={50} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly']
    },
    {
      icon: <Smartphone size={50} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that provide exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance']
    },
    {
      icon: <Globe size={50} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and secure APIs.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration']
    },
    {
      icon: <Zap size={50} />,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience with advanced optimization techniques.',
      features: ['Code Splitting', 'Lazy Loading', 'Cache Strategies']
    },
    {
      icon: <Users size={50} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that balance aesthetics with functionality.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: <Shield size={50} />,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date with ongoing maintenance and monitoring.',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for all your digital needs
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
