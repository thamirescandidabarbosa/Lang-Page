
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe } from 'lucide-react';
import './About.css';

const About = () => {
  const skills = [
    { icon: <Code size={40} />, title: 'Frontend Development', description: 'React, Vue.js, Angular' },
    { icon: <Globe size={40} />, title: 'Backend Development', description: 'Node.js, Python, Java' },
    { icon: <Palette size={40} />, title: 'UI/UX Design', description: 'Figma, Adobe XD, Sketch' },
    { icon: <Smartphone size={40} />, title: 'Mobile Development', description: 'React Native, Flutter' }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate developer with a keen eye for design and detail
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              I'm a full-stack developer with over 3 years of experience creating 
              digital solutions that combine beautiful design with robust functionality. 
              My journey began with a simple curiosity about how websites work, and 
              it has evolved into a passion for crafting exceptional user experiences.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or enjoying a good coffee while 
              sketching out my next big idea.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
