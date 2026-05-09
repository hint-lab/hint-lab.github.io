#!/bin/bash

set -e

echo "🔧 Starting Hint Lab dev server..."

# Check node_modules
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

echo "🚀 Running next dev..."
npm run dev
