#!/usr/bin/env node

const fs = require('fs');

// Fonction pour encoder les espaces dans les URLs
function encodePath(path) {
  return path.replace(/\s+/g, '%20');
}

// Fonction pour corriger les chemins dans un fichier
function fixPathsInFile(filePath, folderName, arrayName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remplacer tous les chemins avec des espaces par des chemins encodés
  const oldPattern = new RegExp(`'/events/${folderName.replace(/\s+/g, ' ')}/`, 'g');
  const newPath = `'/events/${encodePath(folderName)}/`;
  
  content = content.replace(oldPattern, newPath);
  
  fs.writeFileSync(filePath, content);
  console.log(`✓ Chemins corrigés dans ${filePath}`);
}

// Corriger les chemins dans chaque page
fixPathsInFile('pages/presse-grand-public.js', 'Presse Grand Public', 'presseGrandPublicImages');
fixPathsInFile('pages/tv.js', 'TV', 'tvImages');
fixPathsInFile('pages/presse-internationale.js', 'Presse Internationale', 'presseInternationaleImages');

console.log('\nTous les chemins ont été corrigés !');
