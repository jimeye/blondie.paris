#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function generateImageData(folderPath, prefix) {
  const files = fs.readdirSync(folderPath)
    .filter(file => file.endsWith('.webp'))
    .sort();

  console.log(`// Données des images ${prefix} avec noms descriptifs`);
  console.log(`const ${prefix.toLowerCase().replace(/\s+/g, '')}Images = [`);
  
  files.forEach((file, index) => {
    // Extraire le titre du nom de fichier
    const title = file
      .replace(new RegExp(`^\\d+-${prefix.toLowerCase().replace(/\s+/g, '-')}-blondie-paris-blondie\\.paris-blondieparis-`), '')
      .replace(/\.webp$/, '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    console.log(`  {
    id: ${index + 1},
    src: '/events/${prefix}/${file}',
    title: '${title}'
  },`);
  });
  
  console.log('];');
  console.log('');
}

// Générer les données pour chaque page
console.log('// Données générées automatiquement pour les pages\n');

// Presse Grand Public
generateImageData('public/events/Presse Grand Public', 'Presse Grand Public');

// TV
generateImageData('public/events/TV', 'TV');

// Presse Internationale
generateImageData('public/events/Presse Internationale', 'Presse Internationale');
