#!/bin/bash

# Script de build personnalisé pour Netlify
echo "🚀 Starting build process..."

# Installer les dépendances
echo "📦 Installing dependencies..."
yarn install

# Générer le site statique
echo "🔨 Generating static site..."
yarn generate

# Vérifier que le dossier existe
if [ -d ".output/public" ]; then
    echo "✅ Build successful! Output directory created."
    ls -la .output/public/
else
    echo "❌ Build failed! Output directory not found."
    exit 1
fi
