
# Cyber-Brutal

Minimalist landing with brutal cyber inspired design
<sub>This page was built using [Figma](https://www.figma.com/make/7dDjHj8nAlSfYagInHvlve/Brutal-Minimalist-Landing-Page?node-id=0-1&p=f&fullscreen=1).</sub>

## Demo

Check out the live demo here: [View it online](https://artgolwebdev.github.io/LP01/)

---

## Features

- 🎨 **Cyber Brutal Design** - Minimalist landing page with cyberpunk aesthetics
- 📧 **Contact Form** - Fully functional contact form with PHP backend
- 📱 **Responsive Design** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite and React for optimal speed
- 🎵 **Interactive Audio** - Cyber-themed sound effects on interactions

---

## Getting Started

### Frontend Development

```bash
# Install dependencies
npm install

# Launch development server
npm run dev
```

### Backend Setup (Contact Form)

The project includes a PHP API for handling contact form submissions with Mailgun integration.

#### 1. Environment Configuration

Copy the example environment file and configure your settings:

```bash
# Copy the example environment file
cp env.example .env

# Edit the .env file with your actual values
```

#### 2. Required Environment Variables

```env
# Email Configuration
ADMIN_EMAIL=your-admin@yourdomain.com
FROM_EMAIL=noreply@yourdomain.com
FROM_NAME="Cyber Brutal Contact Form"

# Mailgun Configuration
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.com

# Validation Settings
MAX_MESSAGE_LENGTH=1000
MIN_NAME_LENGTH=2
MAX_NAME_LENGTH=50

# Security Settings
ALLOWED_ORIGINS=*
```

#### 3. Mailgun Setup

1. Sign up for a Mailgun account at https://www.mailgun.com/
2. Add and verify your domain
3. Get your API key from the Mailgun dashboard
4. Update the `.env` file with your credentials

#### 4. Server Requirements

- PHP 7.4 or higher
- cURL extension enabled
- Web server (Apache/Nginx) with PHP support

---

## Project Structure

```
LP01/
├── src/                    # React frontend source
│   ├── components/        # React components
│   │   ├── Contact.tsx   # Contact form component
│   │   └── ui/           # UI components
│   └── ...
├── api/                   # PHP backend
│   ├── ContactFormHandler.php  # Main API handler
│   ├── config.php        # Configuration loader
│   └── README.md         # API documentation
├── .env                   # Environment variables (create from env.example)
├── env.example           # Example environment file
└── README.md             # This file
```

---

## Contact Form API

The contact form API is located at `/api/ContactFormHandler.php` and handles:

- ✅ Input validation (name, email, phone, message)
- ✅ CORS support for cross-origin requests
- ✅ Admin notification email
- ✅ Thank you email to user
- ✅ Security headers and error handling
- ✅ JSON responses
- ✅ Support for both JSON and form data

### API Endpoint

```
POST /api/ContactFormHandler.php
```

### Request Format

**Required:**
- `name` (string, 2-50 characters, letters and spaces only)
- `email` (valid email format)

**Optional:**
- `phone` (string, 7-20 characters, numbers, spaces, +, -, (, ))
- `message` (string, max 1000 characters)

### Response Format

**Success (200):**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

**Error (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## Testing

### Frontend
```bash
npm run dev
# Open http://localhost:5173
```

### Backend API
```bash
curl -X POST http://yourdomain.com/api/ContactFormHandler.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1-555-123-4567",
    "message": "Hello, this is a test message!"
  }'
```

---

## Deployment

### Frontend
The React app can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

### Backend
The PHP API should be deployed to a server with PHP support:
- Shared hosting
- VPS with Apache/Nginx
- Cloud platforms (Heroku, DigitalOcean, etc.)

---

## Troubleshooting

### Common Issues

1. **500 Error**: Check PHP error logs and ensure cURL is enabled
2. **Mailgun Errors**: Verify API key and domain configuration
3. **CORS Issues**: Check the ALLOWED_ORIGINS setting in .env
4. **File Permissions**: Ensure web server can read the PHP files

### Debug Mode

To enable debug mode, add this line to the constructor in `api/ContactFormHandler.php`:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

## License

This project is open source and available under the [MIT License](LICENSE).
