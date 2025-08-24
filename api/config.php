<?php

/**
 * Configuration file for Contact Form Handler
 * Loads configuration from environment variables with fallbacks
 */

// Load environment variables from .env file if it exists
function loadEnv($path) {
    if (!file_exists($path)) {
        return;
    }
    
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '#') === 0) {
            continue; // Skip comments
        }
        
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value);
        
        // Remove quotes if present
        if (preg_match('/^(["\'])(.*)\1$/', $value, $matches)) {
            $value = $matches[2];
        }
        
        if (!array_key_exists($name, $_ENV)) {
            $_ENV[$name] = $value;
        }
    }
}

// Load .env file from project root
$envPath = __DIR__ . '/../.env';
loadEnv($envPath);

// Helper function to get environment variable with fallback
function getEnvVar($key, $default = null) {
    return $_ENV[$key] ?? $default;
}

// Email Configuration
define('ADMIN_EMAIL', getEnvVar('ADMIN_EMAIL', 'admin@yourdomain.com'));
define('FROM_EMAIL', getEnvVar('FROM_EMAIL', 'noreply@yourdomain.com'));
define('FROM_NAME', getEnvVar('FROM_NAME', 'Cyber Brutal Contact Form'));

// Mailgun Configuration
define('MAILGUN_API_KEY', getEnvVar('MAILGUN_API_KEY', 'your-mailgun-api-key'));
define('MAILGUN_DOMAIN', getEnvVar('MAILGUN_DOMAIN', 'your-domain.com'));

// Validation Settings
define('MAX_MESSAGE_LENGTH', (int)getEnvVar('MAX_MESSAGE_LENGTH', 1000));
define('MIN_NAME_LENGTH', (int)getEnvVar('MIN_NAME_LENGTH', 2));
define('MAX_NAME_LENGTH', (int)getEnvVar('MAX_NAME_LENGTH', 50));

// Security Settings
$allowedOrigins = getEnvVar('ALLOWED_ORIGINS', '*');
define('ALLOWED_ORIGINS', $allowedOrigins === '*' ? ['*'] : explode(',', $allowedOrigins));

?>
