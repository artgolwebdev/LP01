<?php

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

// Set custom error log path for Windows/XAMPP
$logPath = __DIR__ . '/debug.log';
ini_set('error_log', $logPath);

echo "<h2>Windows/XAMPP Debug Configuration</h2>\n";

// Test error logging
echo "<h3>Error Logging Test:</h3>\n";
echo "<p><strong>Error Log Path:</strong> " . $logPath . "</p>\n";
echo "<p><strong>Error Reporting:</strong> " . error_reporting() . "</p>\n";
echo "<p><strong>Display Errors:</strong> " . (ini_get('display_errors') ? 'ON' : 'OFF') . "</p>\n";
echo "<p><strong>Log Errors:</strong> " . (ini_get('log_errors') ? 'ON' : 'OFF') . "</p>\n";

// Test writing to log
$testMessage = "Debug test at " . date('Y-m-d H:i:s') . " - PHP Version: " . PHP_VERSION;
error_log($testMessage);

if (file_exists($logPath)) {
    echo "<p style='color: green;'>✅ Error log file created successfully</p>\n";
    echo "<p><strong>Log file size:</strong> " . filesize($logPath) . " bytes</p>\n";
    
    // Show last few lines of log
    $logContent = file_get_contents($logPath);
    if ($logContent) {
        echo "<h4>Recent Log Entries:</h4>\n";
        echo "<pre style='background: #f5f5f5; padding: 10px; border: 1px solid #ddd;'>\n";
        echo htmlspecialchars(substr($logContent, -500)); // Last 500 characters
        echo "</pre>\n";
    }
} else {
    echo "<p style='color: red;'>❌ Error log file could not be created</p>\n";
    echo "<p>Check file permissions in: " . dirname($logPath) . "</p>\n";
}

// Test file permissions
echo "<h3>File Permissions Test:</h3>\n";
$testFile = __DIR__ . '/test_write.txt';
if (file_put_contents($testFile, 'test')) {
    echo "<p style='color: green;'>✅ Write permission OK</p>\n";
    unlink($testFile); // Clean up
} else {
    echo "<p style='color: red;'>❌ Write permission failed</p>\n";
}

// Show PHP configuration
echo "<h3>PHP Configuration:</h3>\n";
echo "<ul>\n";
echo "<li><strong>PHP Version:</strong> " . PHP_VERSION . "</li>\n";
echo "<li><strong>Server Software:</strong> " . $_SERVER['SERVER_SOFTWARE'] . "</li>\n";
echo "<li><strong>Document Root:</strong> " . $_SERVER['DOCUMENT_ROOT'] . "</li>\n";
echo "<li><strong>Script Path:</strong> " . __FILE__ . "</li>\n";
echo "<li><strong>Current Directory:</strong> " . getcwd() . "</li>\n";
echo "</ul>\n";

// Test cURL
echo "<h3>cURL Test:</h3>\n";
if (function_exists('curl_init')) {
    echo "<p style='color: green;'>✅ cURL is available</p>\n";
    
    // Test basic cURL functionality
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://httpbin.org/get');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    
    if ($curlError) {
        echo "<p style='color: red;'>❌ cURL Error: " . $curlError . "</p>\n";
    } else {
        echo "<p style='color: green;'>✅ cURL test successful (HTTP " . $httpCode . ")</p>\n";
    }
} else {
    echo "<p style='color: red;'>❌ cURL is not available</p>\n";
}

// Environment file test
echo "<h3>Environment File Test:</h3>\n";
$envPath = __DIR__ . '/../.env';
if (file_exists($envPath)) {
    echo "<p style='color: green;'>✅ .env file exists</p>\n";
    echo "<p><strong>Path:</strong> " . $envPath . "</p>\n";
    echo "<p><strong>Size:</strong> " . filesize($envPath) . " bytes</p>\n";
    
    // Test reading .env file
    $envContent = file_get_contents($envPath);
    if ($envContent) {
        echo "<p style='color: green;'>✅ .env file is readable</p>\n";
        
        // Count lines
        $lines = explode("\n", $envContent);
        $configLines = 0;
        foreach ($lines as $line) {
            if (strpos(trim($line), '=') !== false && strpos($line, '#') !== 0) {
                $configLines++;
            }
        }
        echo "<p><strong>Configuration lines:</strong> " . $configLines . "</p>\n";
    } else {
        echo "<p style='color: red;'>❌ .env file is not readable</p>\n";
    }
} else {
    echo "<p style='color: red;'>❌ .env file not found</p>\n";
    echo "<p><strong>Expected path:</strong> " . $envPath . "</p>\n";
}

// Test configuration loading
echo "<h3>Configuration Loading Test:</h3>\n";
try {
    require_once 'config.php';
    echo "<p style='color: green;'>✅ Configuration loaded successfully</p>\n";
    
    // Test if constants are defined
    $constants = ['ADMIN_EMAIL', 'MAILGUN_API_KEY', 'MAILGUN_DOMAIN'];
    foreach ($constants as $constant) {
        if (defined($constant)) {
            $value = constant($constant);
            if (strpos($constant, 'API_KEY') !== false) {
                $value = substr($value, 0, 10) . '...';
            }
            echo "<p><strong>" . $constant . ":</strong> " . $value . "</p>\n";
        } else {
            echo "<p style='color: red;'>❌ " . $constant . " not defined</p>\n";
        }
    }
} catch (Exception $e) {
    echo "<p style='color: red;'>❌ Configuration loading failed: " . $e->getMessage() . "</p>\n";
}

// Instructions for Windows/XAMPP
echo "<h3>Windows/XAMPP Setup Instructions:</h3>\n";
echo "<ol>\n";
echo "<li><strong>Enable Error Display:</strong> Edit php.ini in XAMPP</li>\n";
echo "<li><strong>Set Error Log:</strong> Configure error_log in php.ini</li>\n";
echo "<li><strong>Check Permissions:</strong> Ensure write access to api/ directory</li>\n";
echo "<li><strong>Restart Apache:</strong> After changing php.ini</li>\n";
echo "</ol>\n";

echo "<h4>php.ini Settings for Debugging:</h4>\n";
echo "<pre style='background: #f5f5f5; padding: 10px; border: 1px solid #ddd;'>\n";
echo "error_reporting = E_ALL\n";
echo "display_errors = On\n";
echo "log_errors = On\n";
echo "error_log = C:/xampp/php/logs/php_error.log\n";
echo "</pre>\n";

echo "<h4>XAMPP php.ini Location:</h4>\n";
echo "<p><strong>Usually at:</strong> C:\\xampp\\php\\php.ini</p>\n";
echo "<p><strong>Or check:</strong> " . php_ini_loaded_file() . "</p>\n";

?>
