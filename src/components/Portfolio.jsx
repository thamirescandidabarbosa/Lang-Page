import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Portfolio.css';
import MobileFirst from '../assets/images//MobileFirst.png';
import SpeekFlow from '../assets/images//SpeekFlow.png';
import Launch from '../assets/images/Launch.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'UX/UI Landing Page Varejo',
      description: 'Mobile-first, responsive landing page for sneaker e-commerce, created in Figma with a focus on conversion, user experience, and a modern look.',
      image: MobileFirst,
      technologies: ['Figma', 'Photoshop', 'Canvas'],
      liveLink: 'https://www.behance.net/gallery/231654773/UXUI-LANDING-PAGE-VEREJO',
      githubLink: 'https://www.behance.net/gallery/231654773/UXUI-LANDING-PAGE-VEREJO'
    },
    {
      id: 2,
      title: 'SpeekFlow',
      description: 'SpecFlow, a Functional Specifications (FS) management system for collaborative software development.',
      image: SpeekFlow,
      technologies: ['React', 'NestJS', 'Firebase', 'PostgreSQL', 'TypeScript', 'JWT'],
      liveLink: 'https://github.com/thamirescandidabarbosa/SpecFlow.git',
      githubLink: 'https://github.com/thamirescandidabarbosa/SpecFlow.git'
    },
    {
      id: 3,
      title: 'Launchly Startup Boost',
      description: 'A professional, modern landing page template built with React 18, TypeScript, and Tailwind CSS. Perfect for startups, SaaS companies, and tech businesses.',
      image: Launch,
      technologies: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
      liveLink: 'https://thamires-launchly-template.surge.sh/',
      githubLink: 'https://thamires-launchly-template.surge.sh/'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A full-featured social media application with real-time messaging and content sharing.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Node.js', 'Socket.io', 'PostgreSQL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing creative design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Learning Platform',
      description: 'An online learning platform with video streaming, progress tracking, and interactive quizzes.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
      technologies: ['Angular', 'Node.js', 'MySQL', 'Video.js'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <motion.div 
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Portfolio</h2>
          <p className="section-subtitle">
            A showcase of my recent work and creative projects
          </p>
        </motion.div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.githubLink} className="project-link">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
