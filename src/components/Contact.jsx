import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorDetails, setErrorDetails] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar se todos os campos estão preenchidos
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setShowError(true);
      setErrorDetails('Por favor, preencha todos os campos obrigatórios.');
      setTimeout(() => {
        setShowError(false);
        setErrorDetails('');
      }, 5000);
      return;
    }
    
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);
    setErrorDetails('');
    
    try {
      // Preparar dados para o Web3Forms
      const formDataToSend = new FormData();
      
      // SUBSTITUA PELA SUA CHAVE WEB3FORMS AQUI
      formDataToSend.append('access_key', 'f3cdae7a-a6c8-4aff-8fbf-d0f5b85a1962');
      formDataToSend.append('name', formData.name.trim());
      formDataToSend.append('email', formData.email.trim());
      formDataToSend.append('subject', `Portfolio Contact: ${formData.subject.trim()}`);
      formDataToSend.append('message', `
📧 Nova mensagem do Portfolio

👤 Nome: ${formData.name.trim()}
✉️ Email: ${formData.email.trim()}
📝 Assunto: ${formData.subject.trim()}

💬 Mensagem:
${formData.message.trim()}

---
🌐 Enviado via Portfolio Website
📅 ${new Date().toLocaleString('pt-BR')}
      `);
      
      // Enviar para Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Esconder mensagem de sucesso após 8 segundos
        setTimeout(() => {
          setShowSuccess(false);
        }, 8000);
      } else {
        console.error('Resposta do servidor:', result);
        throw new Error(result.message || 'Falha no envio do email');
      }
      
    } catch (error) {
      console.error('Erro detalhado:', error);
      
      setShowError(true);
      setErrorDetails(error.message || 'Erro de conexão com o servidor');
      
      setTimeout(() => {
        setShowError(false);
        setErrorDetails('');
      }, 5000);
      
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'thamirescandidabarbosa@gmail.com',
      link: 'mailto:thamirescandidabarbosa@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+55 (21) 97482-0931',
      link: 'https://w.app/5ttfj7'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'São Paulo, Brasil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about your project</h3>
            <p>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you're a company looking to hire, or you're looking for a 
              collaborator on your next project, I'd love to hear from you.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a 
                  key={index}
                  href={info.link}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    <span>{info.content}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <motion.button 
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              <Send size={18} />
              <span>
                {isLoading ? 'Enviando...' : 'Send Message'}
              </span>
            </motion.button>

            {showSuccess && (
              <motion.div 
                className="success-message-modern"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="success-icon">
                  <CheckCircle size={24} />
                </div>
                <div className="success-content">
                  <h4>Email Enviado com Sucesso!</h4>
                  <p>Sua mensagem foi enviada diretamente para meu email. Responderei em breve!</p>
                </div>
              </motion.div>
            )}

            {showError && (
              <motion.div 
                className="error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div style={{ marginBottom: '10px' }}>
                  ❌ <strong>Erro ao processar formulário</strong>
                </div>
                <div style={{ fontSize: '14px', color: '#ffb3b3' }}>
                  {errorDetails && <div style={{ marginBottom: '8px' }}>Detalhes: {errorDetails}</div>}
                  Por favor, tente novamente ou envie um email diretamente para: <br/>
                  <a href="mailto:thamirescandidabarbosa@gmail.com" style={{ color: '#ff69b4', textDecoration: 'underline' }}>
                    thamirescandidabarbosa@gmail.com
                  </a>
                </div>
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;