# 🌟 Portfolio - Thamires Candida Barbosa

[![Deploy to GitHub Pages](https://github.com/thamirescandidabarbosa/Lang-Page/actions/workflows/deploy.yml/badge.svg)](https://github.com/thamirescandidabarbosa/Lang-Page/actions/workflows/deploy.yml)

Portfólio pessoal desenvolvido com React + Vite, apresentando meus projetos e habilidades como Full-Stack Developer & UI/UX Designer.

## 🚀 Demo

🔗 **Site:** https://thamirescandidabarbosa.github.io/Lang-Page/

## ✨ Características

- ✅ Design responsivo e moderno
- ✅ Animações suaves com Framer Motion
- ✅ Formulário de contato funcional com Web3Forms
- ✅ Navegação suave entre seções
- ✅ Otimizado para SEO e performance
- ✅ Paleta de cores acessível (WCAG 2.1 AA+)
- ✅ Deploy automático com GitHub Actions
- 💼 Showcase de projetos
- 📧 Formulário de contato funcional
- 🌟 Ícones com Lucide React

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **Framer Motion** - Biblioteca de animações para React
- **Lucide React** - Conjunto de ícones modernos
- **CSS3** - Estilização com Grid e Flexbox
- **JavaScript ES6+** - Recursos modernos do JavaScript

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd lang-page
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

## 🎨 Seções

### Hero Section
- Apresentação principal com animações
- Call-to-action buttons
- Foto de perfil com efeitos visuais

### About Section
- Informações pessoais e profissionais
- Estatísticas de projetos
- Grid de habilidades técnicas

### Services Section
- Serviços oferecidos
- Cards interativos com hover effects
- Descrições detalhadas

### Portfolio Section
- Showcase de projetos
- Overlays com links para GitHub e demo
- Tags de tecnologias utilizadas

### Contact Section
- Formulário de contato funcional
- Envio direto para email usando EmailJS
- Validação de campos obrigatórios
- Estados de carregamento e sucesso
- Informações de contato

### Footer
- Links de navegação
- Redes sociais
- Copyright e informações adicionais

## � Configuração do EmailJS

Para que o formulário de contato funcione corretamente:

1. **Configurar EmailJS:**
   - Consulte o arquivo `EMAILJS_SETUP.md` para instruções detalhadas
   - Criar conta gratuita em [EmailJS](https://www.emailjs.com/)
   - Configurar Service, Template e obter Public Key

2. **Atualizar credenciais:**
   - Editar `src/components/Contact.jsx`
   - Substituir `service_portfolio`, `template_contact` e `your_public_key`
   - Pelos valores reais da sua conta EmailJS

## �📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first e é totalmente responsivo, funcionando perfeitamente em:
- 📱 Smartphones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Monitores grandes

## 🎯 Scripts Disponíveis

- `npm run dev` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run lint` - Executa linting do código
- `npm run preview` - Visualiza o build de produção

## 🎨 Customização

Para personalizar o conteúdo:

1. **Informações pessoais**: Edite os dados nos componentes
2. **Cores**: Modifique as variáveis CSS nos arquivos de estilo
3. **Imagens**: Substitua as URLs das imagens pelos seus assets
4. **Projetos**: Atualize o array de projetos no componente Portfolio

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
