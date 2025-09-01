
# Cyber City - Neon Style Landing Page

A modern, responsive landing page with cyberpunk aesthetics built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Cyberpunk Design** - Neon lights, futuristic aesthetics with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎵 **Interactive Audio** - Background audio with user controls
- 📧 **Contact Form** - PHP backend with email functionality
- 🎭 **Smooth Animations** - CSS animations and scroll-triggered effects
- 🔗 **Social Media Ready** - Optimized meta tags for perfect link sharing

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
LP01/
├── src/                    # React frontend source
│   ├── components/        # React components
│   ├── assets/           # Images, audio, video files
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── api/                   # PHP backend
│   ├── ContactFormHandler.php
│   └── config.php
├── build/                 # Production build output
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🎯 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives
- **Backend**: PHP with Mailgun integration
- **Styling**: Custom CSS with CSS variables

## 🔗 Social Media & SEO

The project includes comprehensive meta tags for optimal social media sharing:

- **Open Graph** tags for Facebook, LinkedIn, and other platforms
- **Twitter Cards** for enhanced Twitter sharing
- **SEO-optimized** titles and descriptions
- **Social preview image** using the cyber-architecture asset
- **Mobile-optimized** meta tags and favicons

### Meta Tags Included:
- Page title and description
- Open Graph image (1200x630)
- Twitter Card support
- Theme colors and mobile app settings
- Canonical URLs and language settings

## 📧 Backend Setup

1. Copy environment file: `cp env.example .env`
2. Configure your settings in `.env`:
   ```env
   MAILGUN_API_KEY=your_api_key
   MAILGUN_DOMAIN=your_domain
   MAILGUN_REGION=your_region
   ```
3. Set up Mailgun for email functionality

## 🌐 Contact Form API

- **Endpoint**: `POST /api/ContactFormHandler.php`
- **Required Fields**: `name`, `email`
- **Optional Fields**: `phone`, `message`
- **Response**: JSON with success/error status

## 🚀 Deployment

### Frontend
- Deploy to Vercel, Netlify, or GitHub Pages
- Run `npm run build` and serve the `build/` directory

### Backend
- Deploy to any PHP-enabled server (Apache/Nginx)
- Ensure PHP has cURL extension enabled for Mailgun API calls

### Meta Tags Setup
- Update the `yourdomain.com` URLs in `index.html` with your actual domain
- Ensure the cyber-architecture image is accessible at the specified path
- Test social media sharing using Facebook's Sharing Debugger and Twitter's Card Validator

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

Built with ❤️ using modern web technologies
