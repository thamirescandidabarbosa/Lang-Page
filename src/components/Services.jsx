import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Zap, Users, Shield } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [modalService, setModalService] = useState(null);
  const services = [
    {
      icon: <Monitor size={50} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      more: [
        'Desenvolvimento de sites institucionais, landing pages e sistemas web.',
        'Utilização de React, Next.js, Node.js e outras stacks modernas.',
        'Foco em acessibilidade, performance e SEO.',
        'Entrega de código limpo, documentado e versionado.',
        'Suporte e manutenção pós-lançamento.'
      ]
    },
    {
      icon: <Smartphone size={50} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that provide exceptional user experiences.',
      features: ['iOS & Android', 'Cross-platform', 'Native Performance'],
      more: [
        'Apps nativos e híbridos para iOS e Android.',
        'Desenvolvimento com React Native e Flutter.',
        'Integração com APIs, notificações e recursos do dispositivo.',
        'Publicação e suporte nas lojas.'
      ]
    },
    {
      icon: <Globe size={50} />,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and secure APIs.',
      features: ['RESTful APIs', 'Database Design', 'Cloud Integration'],
      more: [
        'APIs REST e GraphQL seguras e escaláveis.',
        'Arquitetura com NestJS, Express, Prisma e bancos SQL/NoSQL.',
        'Deploy em nuvem (Vercel, AWS, Heroku, etc).',
        'Validação, autenticação JWT e documentação Swagger.'
      ]
    },
    {
      icon: <Zap size={50} />,
      title: 'Performance Optimization',
      description: 'Speed up your applications and improve user experience with advanced optimization techniques.',
      features: ['Code Splitting', 'Lazy Loading', 'Cache Strategies'],
      more: [
        'Análise de performance com Lighthouse e Web Vitals.',
        'Otimização de imagens, assets e código.',
        'Implementação de cache, lazy loading e SSR.',
        'Melhoria de tempo de carregamento e experiência do usuário.'
      ]
    },
    {
      icon: <Users size={50} />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that balance aesthetics with functionality.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      more: [
        'Pesquisa e entrevistas com usuários.',
        'Wireframes, protótipos e testes de usabilidade.',
        'Criação de design systems e documentação visual.',
        'Foco em acessibilidade e experiência do usuário.'
      ]
    },
    {
      icon: <Shield size={50} />,
      title: 'Security & Maintenance',
      description: 'Keep your applications secure and up-to-date with ongoing maintenance and monitoring.',
      features: ['Security Audits', 'Regular Updates', '24/7 Monitoring'],
      more: [
        'Auditorias de segurança e análise de vulnerabilidades.',
        'Atualizações regulares e correção de bugs.',
        'Monitoramento 24/7 e suporte técnico.',
        'Backup e recuperação de dados.'
      ]
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
              <button className="service-btn" onClick={() => setModalService(service)}>Learn More</button>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Modal de detalhes do serviço */}
      {modalService && (
        <div className="service-modal-bg" style={{position:'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.6)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center'}} onClick={() => setModalService(null)}>
          <div className="service-modal" style={{background:'#18122B', color:'#fff', borderRadius:16, maxWidth:420, width:'90vw', padding:32, boxShadow:'0 8px 32px #0008', position:'relative'}} onClick={e => e.stopPropagation()}>
            <button onClick={() => setModalService(null)} style={{position:'absolute', top:12, right:16, background:'none', border:'none', color:'#fff', fontSize:22, cursor:'pointer'}}>×</button>
            <h2 style={{marginTop:0, marginBottom:12}}>{modalService.title}</h2>
            <p style={{marginBottom:18}}>{modalService.description}</p>
            {modalService.more && (
              <>
                <h4 style={{margin:'16px 0 6px'}}>O que está incluso</h4>
                <ul style={{marginBottom:0, paddingLeft:18}}>
                  {modalService.more.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
