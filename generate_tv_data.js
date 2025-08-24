#!/usr/bin/env node

const fs = require('fs');

// Lire les fichiers du dossier TV
const folderPath = 'public/events/TV';
const files = fs.readdirSync(folderPath)
  .filter(file => file.endsWith('.webp'))
  .sort();

console.log('const tvImages = [');
files.forEach((file, index) => {
  // Extraire le titre du nom de fichier
  const title = file
    .replace(/^\d+-tv-blondie-paris-blondie\.paris-blondieparis-/, '')
    .replace(/\.webp$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  console.log(`  {
    id: ${index + 1},
    src: '/events/TV/${file}',
    title: '${title}'
  },`);
});
console.log('];');
