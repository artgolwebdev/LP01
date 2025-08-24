<?php

// Include the configuration
require_once 'config.php';

echo "<h2>Mailgun Configuration Test</h2>\n";

// Test configuration loading
echo "<h3>Configuration Values:</h3>\n";
echo "<ul>\n";
echo "<li><strong>Admin Email:</strong> " . ADMIN_EMAIL . "</li>\n";
echo "<li><strong>From Email:</strong> " . FROM_EMAIL . "</li>\n";
echo "<li><strong>From Name:</strong> " . FROM_NAME . "</li>\n";
echo "<li><strong>Mailgun Domain:</strong> " . MAILGUN_DOMAIN . "</li>\n";
echo "<li><strong>Mailgun API Key:</strong> " . substr(MAILGUN_API_KEY, 0, 10) . "...</li>\n";
echo "</ul>\n";

// Test environment file
echo "<h3>Environment File:</h3>\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "<p style='color: green;'>✅ .env file exists</p>\n";
    echo "<p><strong>Path:</strong> " . $envPath . "</p>\n";
} else {
    echo "<p style='color: red;'>❌ .env file not found</p>\n";
    echo "<p><strong>Expected path:</strong> " . $envPath . "</p>\n";
}

// Test PHP requirements
echo "<h3>PHP Requirements:</h3>\n";
echo "<ul>\n";
echo "<li><strong>PHP Version:</strong> " . PHP_VERSION . "</li>\n";
echo "<li><strong>cURL Extension:</strong> " . (function_exists('curl_init') ? '✅ Enabled' : '❌ Disabled') . "</li>\n";
echo "<li><strong>JSON Extension:</strong> " . (function_exists('json_encode') ? '✅ Enabled' : '❌ Disabled') . "</li>\n";
echo "</ul>\n";

// Test Mailgun API connection
echo "<h3>Mailgun API Test:</h3>\n";
if (MAILGUN_DOMAIN === 'your-domain.com' || MAILGUN_API_KEY === 'your-mailgun-api-key') {
    echo "<p style='color: red;'>❌ Please configure your Mailgun credentials in .env file</p>\n";
} else {
    $url = "https://api.mailgun.net/v3/" . MAILGUN_DOMAIN . "/messages";
    echo "<p><strong>API URL:</strong> " . $url . "</p>\n";
    
    // Test basic connection
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Basic ' . base64_encode('api:' . MAILGUN_API_KEY)
    ]);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    echo "<p><strong>HTTP Code:</strong> " . $httpCode . "</p>\n";
    if ($curlError) {
        echo "<p style='color: red;'><strong>cURL Error:</strong> " . $curlError . "</p>\n";
    } else {
        echo "<p style='color: green;'>✅ cURL connection successful</p>\n";
    }
    
    // Interpret HTTP codes
    switch ($httpCode) {
        case 200:
            echo "<p style='color: green;'>✅ API connection successful</p>\n";
            break;
        case 401:
            echo "<p style='color: red;'>❌ Unauthorized - Check your API key</p>\n";
            break;
        case 403:
            echo "<p style='color: red;'>❌ Forbidden - Check your domain or API key</p>\n";
            break;
        case 404:
            echo "<p style='color: red;'>❌ Domain not found - Check your domain configuration</p>\n";
            break;
        default:
            echo "<p style='color: orange;'>⚠️ Unexpected response code: " . $httpCode . "</p>\n";
    }
}

// Common issues and solutions
echo "<h3>Common Issues & Solutions:</h3>\n";
echo "<ul>\n";
echo "<li><strong>403 Forbidden:</strong> Usually means incorrect domain or API key</li>\n";
echo "<li><strong>401 Unauthorized:</strong> Invalid API key</li>\n";
echo "<li><strong>404 Not Found:</strong> Domain not configured in Mailgun</li>\n";
echo "<li><strong>Domain Format:</strong> Should be like 'mg.yourdomain.com' or 'yourdomain.com'</li>\n";
echo "<li><strong>API Key:</strong> Should start with 'key-' and be from your Mailgun dashboard</li>\n";
echo "</ul>\n";

// Mailgun setup instructions
echo "<h3>Mailgun Setup Checklist:</h3>\n";
echo "<ol>\n";
echo "<li>Sign up at <a href='https://www.mailgun.com/' target='_blank'>mailgun.com</a></li>\n";
echo "<li>Add and verify your domain in Mailgun dashboard</li>\n";
echo "<li>Get your API key from Settings > API Keys</li>\n";
echo "<li>Copy env.example to .env</li>\n";
echo "<li>Update MAILGUN_API_KEY and MAILGUN_DOMAIN in .env</li>\n";
echo "<li>Test the configuration</li>\n";
echo "</ol>\n";

?>
