#!/usr/bin/env python3
"""
Script pour télécharger toutes les images d'une page web
Usage: python download_images.py <URL>
"""

import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
from urllib.parse import urljoin, urlparse
import sys

def download_images_from_url(url, output_folder="downloaded_images"):
    """
    Télécharge toutes les images d'une page web
    """
    try:
        # Créer le dossier de sortie
        if not os.path.exists(output_folder):
            os.makedirs(output_folder)
        
        # Récupérer la page
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, verify=False)
        response.raise_for_status()
        
        # Parser le HTML
        soup = BeautifulSoup(response.content, 'html.parser')
        images = soup.find_all('img')
        
        print(f"Trouvé {len(images)} images sur la page")
        
        downloaded_count = 0
        
        for i, img in enumerate(images):
            img_url = img.get('src')
            if not img_url:
                continue
            
            # Construire l'URL complète
            img_url = urljoin(url, img_url)
            
            # Extraire le nom de fichier
            parsed_url = urlparse(img_url)
            filename = os.path.basename(parsed_url.path)
            
            # Si pas de nom de fichier, en créer un
            if not filename or '.' not in filename:
                filename = f"image_{i+1}.jpg"
            
            # Chemin complet du fichier
            filepath = os.path.join(output_folder, filename)
            
            try:
                # Télécharger l'image
                img_response = requests.get(img_url, headers=headers, verify=False)
                img_response.raise_for_status()
                
                # Sauvegarder l'image
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                
                print(f"✓ Téléchargé: {filename}")
                downloaded_count += 1
                
            except Exception as e:
                print(f"✗ Erreur pour {img_url}: {e}")
        
        print(f"\nTéléchargement terminé! {downloaded_count} images téléchargées dans le dossier '{output_folder}'")
        
    except Exception as e:
        print(f"Erreur: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python download_images.py <URL>")
        print("Exemple: python download_images.py https://example.com")
        sys.exit(1)
    
    url = sys.argv[1]
    download_images_from_url(url)
