@echo off
echo ========================================
echo Windows/XAMPP Debug Setup
echo ========================================
echo.

echo This script will help you configure XAMPP for debugging
echo.

echo 1. Checking XAMPP installation...
if exist "C:\xampp\php\php.ini" (
    echo Found XAMPP at C:\xampp
    set XAMPP_PATH=C:\xampp
) else if exist "C:\xampp\apache\bin\httpd.exe" (
    echo Found XAMPP at C:\xampp
    set XAMPP_PATH=C:\xampp
) else (
    echo XAMPP not found in C:\xampp
    echo Please install XAMPP or update the path in this script
    pause
    exit /b 1
)

echo.
echo 2. Creating backup of php.ini...
copy "%XAMPP_PATH%\php\php.ini" "%XAMPP_PATH%\php\php.ini.backup"
if %errorlevel% equ 0 (
    echo Backup created: php.ini.backup
) else (
    echo Failed to create backup
)

echo.
echo 3. Current php.ini location: %XAMPP_PATH%\php\php.ini
echo.
echo 4. Please manually edit the following settings in php.ini:
echo.
echo    error_reporting = E_ALL
echo    display_errors = On
echo    log_errors = On
echo    error_log = %XAMPP_PATH%\php\logs\php_error.log
echo.
echo 5. After editing php.ini, restart Apache in XAMPP Control Panel
echo.
echo 6. Test your configuration by visiting:
echo    http://localhost/your-project/api/debug.php
echo.

pause
