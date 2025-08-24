<?php

// Include configuration
require_once 'config.php';

/**
 * Contact Form Handler Class
 * Handles contact form submissions with validation and Mailgun integration
 * 
 * @author Artyom
 * @version 1.0
 */
class ContactFormHandler
{
    // Configuration
    private $adminEmail;
    private $mailgunApiKey;
    private $mailgunDomain;
    private $fromEmail;
    private $fromName;
    
    // Validation rules
    private $requiredFields = ['name', 'email'];
    private $optionalFields = ['phone', 'message'];
    
    // Response messages
    private $messages = [
        'success' => 'Thank you for your message! We will get back to you soon.',
        'error' => 'An error occurred. Please try again.',
        'validation_error' => 'Please check your input and try again.',
        'missing_required' => 'Name and email are required fields.',
        'invalid_email' => 'Please provide a valid email address.',
        'invalid_name' => 'Name should contain only letters and spaces.',
        'invalid_phone' => 'Phone should contain only numbers.',
        'message_too_long' => 'Message is too long. Maximum 1000 characters allowed.'
    ];
    
    /**
     * Constructor - Set up configuration
     */
    public function __construct()
    {
        // Enable error reporting for debugging
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        ini_set('log_errors', 1);
        
        // Set custom error log for Windows/XAMPP
        $logPath = __DIR__ . '/contact-form.log';
        ini_set('error_log', $logPath);
        
        // Load configuration from config.php
        $this->adminEmail = ADMIN_EMAIL;
        $this->mailgunApiKey = MAILGUN_API_KEY;
        $this->mailgunDomain = MAILGUN_DOMAIN;
        $this->fromEmail = FROM_EMAIL;
        $this->fromName = FROM_NAME;
        
        // Set headers for JSON response
        header('Content-Type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        
        // Handle preflight requests
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        }
    }
    
    /**
     * Main method to handle the contact form submission
     */
    public function handleRequest()
    {
        try {
            // Debug endpoint
            if (isset($_GET['debug']) && $_GET['debug'] === 'config') {
                $this->debugConfig();
                return;
            }
            
            // Check if it's a POST request
            if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
                $this->sendResponse(405, 'Method not allowed');
                return;
            }
            
            // Get and validate input data
            $data = $this->getInputData();
            $validationResult = $this->validateData($data);
            
            if (!$validationResult['valid']) {
                $this->sendResponse(400, $validationResult['message']);
                return;
            }
            
            // Send email to admin
            $adminEmailSent = $this->sendAdminEmail($data);
            
            // Send thank you email to user
            $userEmailSent = $this->sendThankYouEmail($data);
            
            if ($adminEmailSent && $userEmailSent) {
                $this->sendResponse(200, $this->messages['success']);
            } else {
                $this->sendResponse(500, $this->messages['error']);
            }
            
        } catch (Exception $e) {
            error_log('Contact form error: ' . $e->getMessage());
            $this->sendResponse(500, $this->messages['error']);
        }
    }
    
    /**
     * Get and sanitize input data
     */
    private function getInputData()
    {
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            $input = $_POST;
        }
        
        return [
            'name' => isset($input['name']) ? trim($input['name']) : '',
            'email' => isset($input['email']) ? trim($input['email']) : '',
            'phone' => isset($input['phone']) ? trim($input['phone']) : '',
            'message' => isset($input['message']) ? trim($input['message']) : ''
        ];
    }
    
    /**
     * Validate input data
     */
    private function validateData($data)
    {
        // Check required fields
        foreach ($this->requiredFields as $field) {
            if (empty($data[$field])) {
                return [
                    'valid' => false,
                    'message' => $this->messages['missing_required']
                ];
            }
        }
        
        // Validate name (letters and spaces only, 2-50 characters)
        if (!preg_match('/^[a-zA-Z\s]{' . MIN_NAME_LENGTH . ',' . MAX_NAME_LENGTH . '}$/', $data['name'])) {
            return [
                'valid' => false,
                'message' => $this->messages['invalid_name']
            ];
        }
        
        // Validate email
        if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            return [
                'valid' => false,
                'message' => $this->messages['invalid_email']
            ];
        }
        
        // Validate phone (optional, but if provided, must be numeric)
        if (!empty($data['phone']) && !preg_match('/^[0-9+\-\s\(\)]{7,20}$/', $data['phone'])) {
            return [
                'valid' => false,
                'message' => $this->messages['invalid_phone']
            ];
        }
        
        // Validate message length (optional, max 1000 characters)
        if (!empty($data['message']) && strlen($data['message']) > MAX_MESSAGE_LENGTH) {
            return [
                'valid' => false,
                'message' => $this->messages['message_too_long']
            ];
        }
        
        return ['valid' => true];
    }
    
    /**
     * Send email to admin
     */
    private function sendAdminEmail($data)
    {
        $subject = 'New Contact Form Submission - Cyber Brutal';
        
        $body = $this->buildAdminEmailBody($data);
        
        return $this->sendMailgunEmail(
            $this->adminEmail,
            $subject,
            $body,
            $data['email'],
            $data['name']
        );
    }
    
    /**
     * Send thank you email to user
     */
    private function sendThankYouEmail($data)
    {
        $subject = 'Thank you for contacting Cyber Brutal';
        
        $body = $this->buildThankYouEmailBody($data);
        
        return $this->sendMailgunEmail(
            $data['email'],
            $subject,
            $body
        );
    }
    
    /**
     * Build admin email body
     */
    private function buildAdminEmailBody($data)
    {
        $body = "New contact form submission received:\n\n";
        $body .= "Name: " . htmlspecialchars($data['name']) . "\n";
        $body .= "Email: " . htmlspecialchars($data['email']) . "\n";
        
        if (!empty($data['phone'])) {
            $body .= "Phone: " . htmlspecialchars($data['phone']) . "\n";
        }
        
        if (!empty($data['message'])) {
            $body .= "Message: " . htmlspecialchars($data['message']) . "\n";
        }
        
        $body .= "\nSubmitted at: " . date('Y-m-d H:i:s') . "\n";
        $body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";
        
        return $body;
    }
    
    /**
     * Build thank you email body
     */
    private function buildThankYouEmailBody($data)
    {
        $body = "Dear " . htmlspecialchars($data['name']) . ",\n\n";
        $body .= "Thank you for contacting Cyber Brutal!\n\n";
        $body .= "We have received your message and will get back to you as soon as possible.\n\n";
        $body .= "Best regards,\n";
        $body .= "The Cyber Brutal Team\n\n";
        $body .= "---\n";
        $body .= "This is an automated response. Please do not reply to this email.";
        
        return $body;
    }
    
    /**
     * Send email via Mailgun API
     */
    private function sendMailgunEmail($to, $subject, $body, $replyTo = null, $replyToName = null)
    {
        // Debug: Check configuration values
        error_log("Mailgun Debug - Domain: " . $this->mailgunDomain);
        error_log("Mailgun Debug - API Key: " . substr($this->mailgunApiKey, 0, 10) . "...");
        error_log("Mailgun Debug - From Email: " . $this->fromEmail);
        
        // Validate domain format
        if (empty($this->mailgunDomain) || $this->mailgunDomain === 'your-domain.com') {
            error_log("Mailgun Error: Invalid domain configuration");
            return false;
        }
        
        // Validate API key
        if (empty($this->mailgunApiKey) || $this->mailgunApiKey === 'your-mailgun-api-key') {
            error_log("Mailgun Error: Invalid API key configuration");
            return false;
        }
        
        $url = "https://api.mailgun.net/v3/{$this->mailgunDomain}/messages";
        error_log("Mailgun Debug - URL: " . $url);
        
        $postData = [
            'from' => "{$this->fromName} <{$this->fromEmail}>",
            'to' => $to,
            'subject' => $subject,
            'text' => $body
        ];
        
        if ($replyTo) {
            $postData['h:Reply-To'] = $replyToName ? "{$replyToName} <{$replyTo}>" : $replyTo;
        }
        
        // Debug: Log post data (without sensitive info)
        error_log("Mailgun Debug - Post Data: " . json_encode(array_merge($postData, ['text' => '[MESSAGE CONTENT HIDDEN]'])));
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Basic ' . base64_encode('api:' . $this->mailgunApiKey),
            'Content-Type: application/x-www-form-urlencoded'
        ]);
        
        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_error($ch);
        curl_close($ch);
        
        // Debug: Log response details
        error_log("Mailgun Debug - HTTP Code: " . $httpCode);
        error_log("Mailgun Debug - Response: " . $response);
        if ($curlError) {
            error_log("Mailgun Debug - cURL Error: " . $curlError);
        }
        
        // Check for specific error codes
        if ($httpCode === 401) {
            error_log("Mailgun Error: Unauthorized - Check API key");
        } elseif ($httpCode === 403) {
            error_log("Mailgun Error: Forbidden - Check domain or API key");
        } elseif ($httpCode === 404) {
            error_log("Mailgun Error: Domain not found - Check domain configuration");
        }
        
        return $httpCode === 200;
    }
    
    /**
     * Send JSON response
     */
    private function sendResponse($statusCode, $message, $data = null)
    {
        http_response_code($statusCode);
        
        $response = [
            'success' => $statusCode === 200,
            'message' => $message
        ];
        
        if ($data) {
            $response['data'] = $data;
        }
        
        echo json_encode($response);
        exit();
    }
    
    /**
     * Debug method to test configuration
     */
    public function debugConfig()
    {
        $debug = [
            'admin_email' => $this->adminEmail,
            'from_email' => $this->fromEmail,
            'from_name' => $this->fromName,
            'mailgun_domain' => $this->mailgunDomain,
            'mailgun_api_key' => substr($this->mailgunApiKey, 0, 10) . '...',
            'env_file_exists' => file_exists(__DIR__ . '/../.env'),
            'php_version' => PHP_VERSION,
            'curl_enabled' => function_exists('curl_init'),
            'server_time' => date('Y-m-d H:i:s')
        ];
        
        $this->sendResponse(200, 'Configuration debug info', $debug);
    }
}

// Initialize and handle the request
$handler = new ContactFormHandler();
$handler->handleRequest();

?>
