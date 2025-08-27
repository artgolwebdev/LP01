
# Cyber-City

A modern, responsive landing page with cyberpunk aesthetics built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Cyberpunk design with smooth animations
- 📧 Contact form with PHP backend
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎵 Interactive audio effects

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Backend Setup

1. Copy environment file: `cp env.example .env`
2. Configure your settings in `.env`
3. Set up Mailgun for email functionality

## Project Structure

```
LP01/
├── src/          # React frontend
├── api/          # PHP backend
├── .env          # Environment variables
└── README.md     # This file
```

## Contact Form API

- **Endpoint**: `POST /api/ContactFormHandler.php`
- **Required**: `name`, `email`
- **Optional**: `phone`, `message`

## Deployment

- **Frontend**: Deploy to Vercel, Netlify, or GitHub Pages
- **Backend**: Deploy to any PHP-enabled server

## License

MIT License
