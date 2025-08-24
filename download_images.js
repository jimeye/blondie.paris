// Script pour télécharger toutes les images d'une page web
// Copiez ce code dans la console de votre navigateur (F12)

(function() {
  // Récupérer toutes les images
  const images = document.querySelectorAll('img');
  const imageUrls = [];
  
  // Collecter les URLs des images
  images.forEach(img => {
    if (img.src) {
      imageUrls.push(img.src);
    }
  });
  
  console.log(`Trouvé ${imageUrls.length} images`);
  
  // Fonction pour télécharger une image
  function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  // Télécharger toutes les images avec un délai
  imageUrls.forEach((url, index) => {
    setTimeout(() => {
      const filename = `image_${index + 1}.jpg`;
      downloadImage(url, filename);
    }, index * 1000); // 1 seconde entre chaque téléchargement
  });
  
  console.log('Téléchargement en cours...');
})();
