# Contact Form API - Setup Instructions

This PHP API handles contact form submissions for your Cyber Brutal landing page with Mailgun integration.

## Files Structure

```
api/
├── ContactFormHandler.php  # Main API handler
├── config.php             # Configuration file
└── README.md              # This file
```

## Setup Instructions

### 1. Configure the API

The API now uses environment variables for configuration. Copy the example environment file and update it:

```bash
# Copy the example environment file
cp env.example .env

# Edit the .env file with your actual values
```

Required environment variables:

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

### 2. Mailgun Setup

1. Sign up for a Mailgun account at https://www.mailgun.com/
2. Add and verify your domain
3. Get your API key from the Mailgun dashboard
4. Update the configuration with your API key and domain

### 3. Server Requirements

- PHP 7.4 or higher
- cURL extension enabled
- File permissions: Make sure the API files are readable by your web server

### 4. API Endpoint

The API endpoint will be:
```
POST /api/ContactFormHandler.php
```

### 5. Request Format

The API accepts JSON or form data with the following fields:

**Required:**
- `name` (string, 2-50 characters, letters and spaces only)
- `email` (valid email format)

**Optional:**
- `phone` (string, 7-20 characters, numbers, spaces, +, -, (, ))
- `message` (string, max 1000 characters)

### 6. Response Format

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### 7. Features

- ✅ Input validation (name, email, phone, message)
- ✅ CORS support for cross-origin requests
- ✅ Admin notification email
- ✅ Thank you email to user
- ✅ Security headers
- ✅ Error handling and logging
- ✅ JSON responses
- ✅ Support for both JSON and form data

### 8. Email Templates

The API sends two types of emails:

1. **Admin Email**: Contains all form data, submission time, and IP address
2. **Thank You Email**: Automated response to the user confirming receipt

### 9. Security Features

- Input sanitization
- CORS configuration
- Error logging
- Rate limiting (can be added)
- CSRF protection (can be added)

### 10. Testing

You can test the API using curl:

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

### 11. Troubleshooting

**Common Issues:**

1. **500 Error**: Check PHP error logs and ensure cURL is enabled
2. **Mailgun Errors**: Verify API key and domain configuration
3. **CORS Issues**: Check the ALLOWED_ORIGINS setting in config.php
4. **File Permissions**: Ensure web server can read the PHP files

**Debug Mode:**
To enable debug mode, add this line to the constructor in `ContactFormHandler.php`:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

**Environment Variables:**
The API automatically loads configuration from a `.env` file in the project root. If the `.env` file doesn't exist, it will use default values. Make sure to:

1. Copy `env.example` to `.env`
2. Update the values in `.env` with your actual configuration
3. Keep `.env` out of version control (it should be in `.gitignore`)

### 12. Customization

You can customize:
- Email templates in the `buildAdminEmailBody()` and `buildThankYouEmailBody()` methods
- Validation rules in the `validateData()` method
- Response messages in the `$messages` array
- CORS settings in the constructor

## Support

For issues or questions, check the PHP error logs and ensure all configuration values are correctly set.
