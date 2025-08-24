#!/usr/bin/env node

const fs = require('fs');

// Lire les fichiers du dossier Presse Grand Public
const folderPath = 'public/events/Presse Grand Public';
const files = fs.readdirSync(folderPath)
  .filter(file => file.endsWith('.webp'))
  .sort();

console.log('const presseGrandPublicImages = [');
files.forEach((file, index) => {
  // Extraire le titre du nom de fichier
  const title = file
    .replace(/^\d+-presse-grand-public-blondie-paris-blondie\.paris-blondieparis-/, '')
    .replace(/\.webp$/, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  console.log(`  {
    id: ${index + 1},
    src: '/events/Presse%20Grand%20Public/${file}',
    title: '${title}'
  },`);
});
console.log('];');
