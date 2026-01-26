#!/bin/bash
# Phison aiDAPTIV+ for Obsidian - Build and Package Script
# This script builds the project and packages it into a ZIP file for installation

set -e

# Get the script directory and project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Change to project root directory
cd "$PROJECT_ROOT"

echo "========================================"
echo "aiDAPTIV-Integration-Obsidian Builder"
echo "========================================"
echo ""
echo "Working directory: $PROJECT_ROOT"
echo ""

# Build the project
echo "[1/4] Building project..."
echo ""
npm run build

if [ $? -ne 0 ]; then
    echo ""
    echo "[ERROR] Build failed!"
    exit 1
fi

echo ""
echo "[OK] Build completed successfully"
echo ""

# Check if required files exist
echo "[2/4] Verifying build artifacts..."

MISSING_FILES=0

if [ ! -f "main.js" ]; then
    echo "[ERROR] main.js not found in $PROJECT_ROOT"
    MISSING_FILES=1
fi

if [ ! -f "styles.css" ]; then
    echo "[ERROR] styles.css not found in $PROJECT_ROOT"
    MISSING_FILES=1
fi

if [ ! -f "manifest.json" ]; then
    echo "[ERROR] manifest.json not found in $PROJECT_ROOT"
    echo "        Attempting to restore from git..."
    if git restore manifest.json 2>/dev/null; then
        echo "[OK] manifest.json restored from git"
    else
        MISSING_FILES=1
    fi
fi

if [ $MISSING_FILES -eq 1 ]; then
    echo ""
    echo "[ERROR] Some required files are missing. Please check the errors above."
    exit 1
fi

echo "[OK] All required files found"
echo "  - main.js"
echo "  - styles.css"
echo "  - manifest.json"
echo ""

# Create temporary packaging directory
echo "[3/4] Preparing package directory..."

PLUGIN_NAME="aiDAPTIV-Integration-Obsidian"
TEMP_DIR="temp_package/$PLUGIN_NAME"
OUTPUT_DIR="aiDAPTIV_Files/Installer"
ZIP_FILE="$OUTPUT_DIR/$PLUGIN_NAME.zip"

# Clean and create temporary directory
rm -rf temp_package
mkdir -p "$TEMP_DIR"

# Copy entire project to temp directory, excluding unnecessary files
echo "  Copying project files..."
rsync -a \
  --exclude 'node_modules/' \
  --exclude '.git/' \
  --exclude 'temp_package/' \
  --exclude 'temp_release/' \
  --exclude 'aiDAPTIV_Files/' \
  --exclude '.DS_Store' \
  --exclude '*.log' \
  --exclude '.gitignore' \
  --exclude '.github/' \
  --exclude '.husky/' \
  --exclude '.vscode/' \
  --exclude 'coverage/' \
  --exclude '.env' \
  --exclude '.env.test' \
  ./ "$TEMP_DIR/"

echo "[OK] Package directory prepared"
echo ""

# Create ZIP file
echo "[4/4] Creating ZIP file..."

# Ensure output directory exists
mkdir -p "$OUTPUT_DIR"

# Remove existing ZIP if it exists
if [ -f "$ZIP_FILE" ]; then
    echo "  Removing existing ZIP file..."
    rm "$ZIP_FILE"
fi

# Create ZIP file from temp directory
cd temp_package
echo "  Compressing files..."
zip -r -q "../$ZIP_FILE" "$PLUGIN_NAME"
cd "$PROJECT_ROOT"

# Clean up temporary directory
rm -rf temp_package

if [ ! -f "$ZIP_FILE" ]; then
    echo ""
    echo "[ERROR] Failed to create ZIP file!"
    exit 1
fi

echo "[OK] ZIP file created successfully"
echo ""
echo "========================================"
echo "Build and Package completed!"
echo "========================================"
echo ""
echo "Output ZIP file: $ZIP_FILE"
echo "File size: $(du -h "$ZIP_FILE" | cut -f1)"
echo ""
echo "You can now run Install_Plugin.bat to install the plugin."
echo ""
