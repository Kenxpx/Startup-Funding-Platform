#!/bin/bash

echo "🚀 Building Startup Catalyst Network for Hostinger deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install --legacy-peer-deps

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Build complete! Upload the 'out' folder contents to your Hostinger public_html directory."
echo ""
echo "📁 Files to upload are in the 'out' directory"
echo "🌐 Upload all contents of 'out' folder to public_html on Hostinger"
echo ""
echo "🎉 Your website will be live once uploaded!"
