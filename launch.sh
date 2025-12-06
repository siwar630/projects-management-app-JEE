#!/bin/bash

# Script de lancement rapide pour Projects Management App

echo ""
echo "================================"
echo "Projects Management App Launcher"
echo "================================"
echo ""

# Check if running from the correct directory
if [ ! -d "frontoffice-projects-managment" ]; then
    echo "Error: This script must be run from the root directory"
    echo "Please navigate to the project root and try again"
    exit 1
fi

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "Node.js version: $(node --version)"
echo ""

echo "[1] Install dependencies"
echo "[2] Start frontend (development)"
echo "[3] Build frontend (production)"
echo "[4] Run tests"
echo "[5] Clean and reinstall"
echo "[6] Exit"
echo ""

read -p "Select an option (1-6): " choice

case $choice in
    1)
        echo "Installing dependencies..."
        cd frontoffice-projects-managment
        npm install
        cd ..
        ;;
    2)
        echo "Starting frontend development server..."
        echo "Opening http://localhost:3000 in browser..."
        cd frontoffice-projects-managment
        npm start
        ;;
    3)
        echo "Building frontend for production..."
        cd frontoffice-projects-managment
        npm run build
        cd ..
        echo "Build complete! Files are in frontoffice-projects-managment/build/"
        ;;
    4)
        echo "Running tests..."
        cd frontoffice-projects-managment
        npm test -- --watchAll=false
        cd ..
        ;;
    5)
        echo "Cleaning and reinstalling dependencies..."
        cd frontoffice-projects-managment
        rm -rf node_modules package-lock.json
        npm install
        cd ..
        echo "Done!"
        ;;
    6)
        exit 0
        ;;
    *)
        echo "Invalid option. Please try again."
        exit 1
        ;;
esac
