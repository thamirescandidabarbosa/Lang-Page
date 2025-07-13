// Configuração do EmailJS
// Para ativar o envio direto de emails, configure estas variáveis:

export const EMAILJS_CONFIG = {
  // 1. Vá para https://emailjs.com e crie uma conta
  // 2. Crie um service de email
  // 3. Crie um template de email
  // 4. Substitua os valores abaixo:
  
  SERVICE_ID: 'service_portfolio',     // Substitua pelo seu Service ID
  TEMPLATE_ID: 'template_contact',     // Substitua pelo seu Template ID
  PUBLIC_KEY: 'your_public_key',       // Substitua pela sua Public Key
  
  // Quando configurado corretamente, o formulário enviará emails diretamente
  // Enquanto isso, o formulário abrirá o cliente de email padrão
  
  isConfigured: function() {
    return this.SERVICE_ID !== 'service_portfolio' && 
           this.TEMPLATE_ID !== 'template_contact' && 
           this.PUBLIC_KEY !== 'your_public_key';
  }
};

// Template de email recomendado:
/*
Subject: Novo contato via Portfolio - {{subject}}

Content:
Olá Thamires!

Você recebeu uma nova mensagem através do seu portfolio:

Nome: {{from_name}}
Email: {{from_email}}
Assunto: {{subject}}

Mensagem:
{{message}}

---
Enviado via Portfolio Website
*/
