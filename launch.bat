@echo off
REM Script de lancement rapide pour Projects Management App

echo.
echo ================================
echo Projects Management App Launcher
echo ================================
echo.

REM Check if running from the correct directory
if not exist "frontoffice-projects-managment" (
    echo Error: This script must be run from the root directory
    echo Please navigate to the project root and try again
    pause
    exit /b 1
)

echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo [1] Install dependencies
echo [2] Start frontend (development)
echo [3] Build frontend (production)
echo [4] Run tests
echo [5] Clean and reinstall
echo [6] Exit
echo.

set /p choice="Select an option (1-6): "

if "%choice%"=="1" (
    echo Installing dependencies...
    cd frontoffice-projects-managment
    call npm install
    cd ..
    pause
) else if "%choice%"=="2" (
    echo Starting frontend development server...
    echo Opening http://localhost:3000 in browser...
    cd frontoffice-projects-managment
    call npm start
) else if "%choice%"=="3" (
    echo Building frontend for production...
    cd frontoffice-projects-managment
    call npm run build
    cd ..
    echo Build complete! Files are in frontoffice-projects-managment/build/
    pause
) else if "%choice%"=="4" (
    echo Running tests...
    cd frontoffice-projects-managment
    call npm test -- --watchAll=false
    cd ..
    pause
) else if "%choice%"=="5" (
    echo Cleaning and reinstalling dependencies...
    cd frontoffice-projects-managment
    if exist "node_modules" rmdir /s /q node_modules
    if exist "package-lock.json" del package-lock.json
    call npm install
    cd ..
    echo Done!
    pause
) else if "%choice%"=="6" (
    exit /b 0
) else (
    echo Invalid option. Please try again.
    pause
    goto :eof
)
