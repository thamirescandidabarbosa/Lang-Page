import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Portfolio</span>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

        <div className="nav-social">
          <a href="https://github.com/thamirescandidabarbosa" className="social-link" target="_blank" rel="noopener noreferrer"> 
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/thamiresbarbosa/" className="social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="mailto:thamirescandidabarbosa@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>

        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
