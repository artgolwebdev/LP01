# Contact Form API

PHP API for handling contact form submissions with Mailgun integration.

## Setup

1. Copy `env.example` to `.env`
2. Configure your settings in `.env`
3. Set up Mailgun account and get API key

## Environment Variables

```env
ADMIN_EMAIL=your-admin@yourdomain.com
FROM_EMAIL=noreply@yourdomain.com
FROM_NAME="Cyber City Contact Form"
MAILGUN_API_KEY=your-mailgun-api-key
MAILGUN_DOMAIN=your-domain.com
```

## API Endpoint

```
POST /api/ContactFormHandler.php
```

## Request Format

**Required:**
- `name` (string, 2-50 characters)
- `email` (valid email)

**Optional:**
- `phone` (string, 7-20 characters)
- `message` (string, max 1000 characters)

## Response Format

**Success:**
```json
{
  "success": true,
  "message": "Thank you for your message!"
}
```

**Error:**
```json
{
  "success": false,
  "message": "Error description"
}
```

## Features

- Input validation
- CORS support
- Admin notification email
- Thank you email to user
- JSON responses
- Error handling

## Requirements

- PHP 7.4+
- cURL extension
- Web server with PHP support
