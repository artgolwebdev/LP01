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
            // Debug endpoints
            if (isset($_GET['debug'])) {
                if ($_GET['debug'] === 'config') {
                    $this->debugConfig();
                    return;
                } elseif ($_GET['debug'] === 'test-email') {
                    $this->testEmail();
                    return;
                }
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
        $subject = 'New Contact Form Submission - Cyber City';
        
        $body = $this->buildAdminEmailBody($data);
        
        return $this->sendMailgunEmail(
            $this->adminEmail,
            $subject,
            $body,
            $data['email'],
            $data['name'],
            true // Send as HTML
        );
    }
    
    /**
     * Send thank you email to user
     */
    private function sendThankYouEmail($data)
    {
        $subject = 'Thank you for contacting Cyber City';
        
        $body = $this->buildThankYouEmailBody($data);
        
        return $this->sendMailgunEmail(
            $data['email'],
            $subject,
            $body,
            null,
            null,
            true // Send as HTML
        );
    }
    
    /**
     * Build admin email body
     */
    private function buildAdminEmailBody($data)
    {
        $submissionTime = date('Y-m-d H:i:s');
        $ipAddress = $_SERVER['REMOTE_ADDR'];
        
        $html = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, Helvetica, sans-serif; background-color: #0a0a0a; color: #ffffff; line-height: 1.6;">
            
            <!-- Main Email Container -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        
                        <!-- Email Card Container -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
                            
                            <!-- Header Section -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%); padding: 30px; text-align: center;">
                                    <h1 style="margin: 0; font-size: 32px; font-weight: 900; text-transform: uppercase; letter-spacing: 4px; color: #000000; font-family: Arial, Helvetica, sans-serif;">
                                        🚨 NEW CONTACT SUBMISSION 🚨
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Cyber City Title -->
                            <tr>
                                <td style="background-color: #000000; padding: 25px; text-align: center; border-bottom: 3px solid #00ffff;">
                                    <h2 style="margin: 0; font-size: 28px; color: #00ffff; text-transform: uppercase; letter-spacing: 3px; font-weight: 900; font-family: Arial, Helvetica, sans-serif;">
                                        CYBER CITY
                                    </h2>
                                    <div style="width: 120px; height: 3px; background: linear-gradient(90deg, #00ffff, #ff00ff); margin: 15px auto 0;"></div>
                                </td>
                            </tr>
                            
                            <!-- Contact Details Card -->
                            <tr>
                                <td style="padding: 30px; background-color: #1a1a1a;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="background-color: #000000; border: 2px solid #00ffff; border-radius: 12px; padding: 25px;">
                                                <h3 style="margin: 0 0 20px 0; color: #00ffff; font-size: 20px; text-transform: uppercase; letter-spacing: 2px; font-weight: 900; font-family: Arial, Helvetica, sans-serif;">
                                                    📋 CONTACT DETAILS
                                                </h3>
                                                
                                                <table width="100%" cellpadding="8" cellspacing="0">
                                                    <tr>
                                                        <td width="120" style="color: #ff00ff; font-weight: bold; font-size: 14px; text-transform: uppercase;">NAME:</td>
                                                        <td style="color: #ffffff; font-weight: bold; font-size: 16px;">' . htmlspecialchars($data['name']) . '</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="120" style="color: #ff00ff; font-weight: bold; font-size: 14px; text-transform: uppercase;">EMAIL:</td>
                                                        <td style="color: #00ffff; font-weight: bold; font-size: 16px;">
                                                            <a href="mailto:' . htmlspecialchars($data['email']) . '" style="color: #00ffff; text-decoration: none;">' . htmlspecialchars($data['email']) . '</a>
                                                        </td>
                                                    </tr>';
        
        if (!empty($data['phone'])) {
            $html .= '
                                                    <tr>
                                                        <td width="120" style="color: #ff00ff; font-weight: bold; font-size: 14px; text-transform: uppercase;">PHONE:</td>
                                                        <td style="color: #00ffff; font-weight: bold; font-size: 16px;">
                                                            <a href="tel:' . htmlspecialchars($data['phone']) . '" style="color: #00ffff; text-decoration: none;">' . htmlspecialchars($data['phone']) . '</a>
                                                        </td>
                                                    </tr>';
        }
        
        if (!empty($data['message'])) {
            $html .= '
                                                    <tr>
                                                        <td colspan="2" style="padding-top: 20px;">
                                                            <div style="color: #ff00ff; font-weight: bold; font-size: 14px; text-transform: uppercase; margin-bottom: 10px;">MESSAGE:</div>
                                                            <div style="background-color: #0a0a0a; border-left: 4px solid #00ffff; padding: 15px; border-radius: 4px; font-style: italic; line-height: 1.6; color: #ffffff; font-size: 14px;">
                                                                "' . nl2br(htmlspecialchars($data['message'])) . '"
                                                            </div>
                                                        </td>
                                                    </tr>';
        }
        
        $html .= '
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Submission Info Card -->
                            <tr>
                                <td style="padding: 0 30px 30px;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="background-color: #000000; border: 2px solid #ff00ff; border-radius: 12px; padding: 20px;">
                                                <h4 style="margin: 0 0 15px 0; color: #ff00ff; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; font-weight: 900; font-family: Arial, Helvetica, sans-serif;">
                                                    📊 SUBMISSION INFO
                                                </h4>
                                                <table width="100%" cellpadding="5" cellspacing="0">
                                                    <tr>
                                                        <td width="120" style="color: #ffffff; font-weight: bold; font-size: 14px;">TIME:</td>
                                                        <td style="color: #ffffff; font-size: 14px;">' . $submissionTime . '</td>
                                                    </tr>
                                                    <tr>
                                                        <td width="120" style="color: #ffffff; font-weight: bold; font-size: 14px;">IP ADDRESS (test):</td>
                                                        <td style="color: #ffffff; font-size: 14px;">' . $ipAddress . '</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Action Button -->
                            <tr>
                                <td style="padding: 0 30px 30px; text-align: center;">
                                    <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                        <tr>
                                            <td style="background: linear-gradient(45deg, #00ffff, #0080ff); border-radius: 8px; padding: 15px 30px;">
                                                <a href="mailto:' . htmlspecialchars($data['email']) . '?subject=Re: Your Cyber City Inquiry" style="color: #000000; text-decoration: none; font-weight: 900; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; font-family: Arial, Helvetica, sans-serif;">
                                                    📧 REPLY TO CUSTOMER
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="background-color: #000000; padding: 25px; text-align: center; border-top: 2px solid #00ffff;">
                                    <p style="margin: 0; color: #888888; font-size: 12px; font-family: Arial, Helvetica, sans-serif;">
                                        This notification was sent from the Cyber City contact form system.<br>
                                        <span style="color: #00ffff; font-weight: bold;">⚡ POWERED BY CYBER TECHNOLOGY ⚡</span>
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                        
                    </td>
                </tr>
            </table>
            
        </body>
        </html>';
        
        return $html;
    }
    
    /**
     * Build thank you email body
     */
    private function buildThankYouEmailBody($data)
    {
        $html = '
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank you for contacting Cyber City</title>
        </head>
        <body style="margin: 0; padding: 20px; font-family: Arial, Helvetica, sans-serif; background-color: #0a0a0a; color: #ffffff; line-height: 1.6;">
            
            <!-- Main Email Container -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0a0a0a;">
                <tr>
                    <td align="center" style="padding: 20px;">
                        
                        <!-- Email Card Container -->
                        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; border-radius: 15px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
                            
                            <!-- Header Section -->
                            <tr>
                                <td style="background: linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #ffff00 100%); padding: 35px; text-align: center;">
                                    <h1 style="margin: 0; font-size: 36px; font-weight: 900; text-transform: uppercase; letter-spacing: 5px; color: #000000; font-family: Arial, Helvetica, sans-serif;">
                                        CYBER CITY
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Thank You Message Card -->
                            <tr>
                                <td style="padding: 40px; background-color: #1a1a1a;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="background-color: #000000; border: 3px solid #00ffff; border-radius: 15px; padding: 35px; text-align: center;">
                                                
                                                <div style="font-size: 48px; margin-bottom: 25px;">🎉</div>
                                                
                                                <h2 style="margin: 0 0 25px 0; color: #00ffff; font-size: 32px; text-transform: uppercase; letter-spacing: 3px; font-weight: 900; font-family: Arial, Helvetica, sans-serif;">
                                                    THANK YOU, ' . strtoupper(htmlspecialchars($data['name'])) . '!
                                                </h2>
                                                
                                                <div style="width: 150px; height: 3px; background: linear-gradient(90deg, #00ffff, #ff00ff, #ffff00); margin: 25px auto; border-radius: 2px;"></div>
                                                
                                                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 30px; color: #ffffff; font-weight: bold;">
                                                    Your message has been successfully transmitted to our cyber network! 🚀
                                                </p>
                                                
                                                <div style="background-color: #0a0a0a; border-left: 5px solid #00ffff; padding: 25px; border-radius: 8px; margin: 30px 0;">
                                                    <p style="margin: 0; font-size: 16px; color: #ffffff; font-style: italic; line-height: 1.6;">
                                                        "We have received your inquiry and our digital agents are processing your request. 
                                                        You can expect a response within 24-48 hours."
                                                    </p>
                                                </div>
                                                
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Status Indicators -->
                            <tr>
                                <td style="padding: 0 40px 40px;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="text-align: center;">
                                                <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                                    <tr>
                                                        <td style="text-align: center; padding: 0 20px;">
                                                            <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #00ff00, #00ffff); border-radius: 50%; display: inline-block; margin-bottom: 10px; line-height: 60px; font-size: 24px; color: #000000; font-weight: bold;">✓</div>
                                                            <p style="margin: 0; color: #00ff00; font-weight: bold; text-transform: uppercase; font-size: 12px;">MESSAGE SENT</p>
                                                        </td>
                                                        <td style="text-align: center; padding: 0 20px;">
                                                            <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #ff00ff, #ffff00); border-radius: 50%; display: inline-block; margin-bottom: 10px; line-height: 60px; font-size: 24px; color: #000000; font-weight: bold;">⚡</div>
                                                            <p style="margin: 0; color: #ff00ff; font-weight: bold; text-transform: uppercase; font-size: 12px;">PROCESSING</p>
                                                        </td>
                                                        <td style="text-align: center; padding: 0 20px;">
                                                            <div style="width: 60px; height: 60px; background: linear-gradient(45deg, #ffff00, #00ffff); border-radius: 50%; display: inline-block; margin-bottom: 10px; line-height: 60px; font-size: 24px; color: #000000; font-weight: bold;">📧</div>
                                                            <p style="margin: 0; color: #ffff00; font-weight: bold; text-transform: uppercase; font-size: 12px;">RESPONSE SOON</p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Contact Information -->
                            <tr>
                                <td style="padding: 0 40px 40px;">
                                    <table width="100%" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td style="background-color: #000000; border: 2px solid #ff00ff; border-radius: 15px; padding: 25px; text-align: center;">
                                                <h3 style="margin: 0 0 15px 0; color: #ff00ff; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; font-weight: 900; font-family: Arial, Helvetica, sans-serif;">
                                                    📞 NEED IMMEDIATE ASSISTANCE?
                                                </h3>
                                                <p style="margin: 0; color: #ffffff; font-size: 14px; line-height: 1.6;">
                                                    For urgent matters, feel free to reach out through our other communication channels.
                                                </p>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            
                            <!-- Footer -->
                            <tr>
                                <td style="background-color: #000000; padding: 30px; text-align: center; border-top: 2px solid #00ffff;">
                                    <p style="margin: 0 0 15px 0; color: #888888; font-size: 14px; font-family: Arial, Helvetica, sans-serif;">
                                        <strong style="color: #00ffff;">CYBER CITY TEAM</strong><br>
                                        Creating digital experiences that transcend reality
                                    </p>
                                    <div style="margin: 20px 0;">
                                        <span style="display: inline-block; width: 30px; height: 2px; background: #00ffff; margin: 0 10px;"></span>
                                        <span style="color: #00ffff; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">⚡ POWERED BY CYBER TECHNOLOGY ⚡</span>
                                        <span style="display: inline-block; width: 30px; height: 2px; background: #00ffff; margin: 0 10px;"></span>
                                    </div>
                                    <p style="margin: 0; color: #666666; font-size: 11px; font-style: italic;">
                                        This is an automated response. Please do not reply to this email.
                                    </p>
                                </td>
                            </tr>
                            
                        </table>
                        
                    </td>
                </tr>
            </table>
            
        </body>
        </html>';
        
        return $html;
    }
    
    /**
     * Send email via Mailgun API
     */
    private function sendMailgunEmail($to, $subject, $body, $replyTo = null, $replyToName = null, $isHtml = false)
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
            'subject' => $subject
        ];
        
        if ($isHtml) {
            $postData['html'] = $body;
            // Also include plain text version for email clients that don't support HTML
            $postData['text'] = strip_tags($body);
        } else {
            $postData['text'] = $body;
        }
        
        if ($replyTo) {
            $postData['h:Reply-To'] = $replyToName ? "{$replyToName} <{$replyTo}>" : $replyTo;
        }
        
        // Debug: Log post data (without sensitive info)
        error_log("Mailgun Debug - Post Data: " . json_encode(array_merge($postData, ['html' => '[HTML CONTENT HIDDEN]', 'text' => '[TEXT CONTENT HIDDEN]'])));
        
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Basic ' . base64_encode('api:' . $this->mailgunApiKey)
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
    
    /**
     * Test email method to debug HTML email sending
     */
    public function testEmail()
    {
        $testData = [
            'name' => 'Test User',
            'email' => $this->adminEmail, // Send to admin email for testing
            'phone' => '+1234567890',
            'message' => 'This is a test message to verify HTML email functionality.'
        ];
        
        // Test simple HTML email first
        $simpleHtml = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Test Email</title>
        </head>
        <body style="background-color: #000000; color: #ffffff; font-family: Arial, sans-serif; padding: 20px;">
            <h1 style="color: #00ffff;">🧪 HTML EMAIL TEST 🧪</h1>
            <p style="color: #ff00ff; font-size: 18px;">If you can see this colored text, HTML emails are working!</p>
            <div style="background-color: #1a1a1a; border: 2px solid #00ffff; padding: 20px; margin: 20px 0;">
                <h2 style="color: #00ffff;">Test Details:</h2>
                <p><strong>Name:</strong> ' . $testData['name'] . '</p>
                <p><strong>Email:</strong> ' . $testData['email'] . '</p>
                <p><strong>Phone:</strong> ' . $testData['phone'] . '</p>
                <p><strong>Message:</strong> ' . $testData['message'] . '</p>
                <p><strong>Time:</strong> ' . date('Y-m-d H:i:s') . '</p>
            </div>
            <p style="color: #ffff00;">⚡ This is a test email from Cyber City ⚡</p>
        </body>
        </html>';
        
        $result = $this->sendMailgunEmail(
            $this->adminEmail,
            '🧪 HTML Email Test - Cyber City',
            $simpleHtml,
            null,
            null,
            true // Send as HTML
        );
        
        if ($result) {
            $this->sendResponse(200, 'Test email sent successfully! Check your inbox.', [
                'sent_to' => $this->adminEmail,
                'html_content_length' => strlen($simpleHtml),
                'timestamp' => date('Y-m-d H:i:s')
            ]);
        } else {
            $this->sendResponse(500, 'Failed to send test email. Check logs for details.');
        }
    }
}

// Initialize and handle the request
$handler = new ContactFormHandler();
$handler->handleRequest();

?>
