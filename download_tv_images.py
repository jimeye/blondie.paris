#!/usr/bin/env python3
"""
Script pour télécharger les images de la page TV de blondie.paris
"""

import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
from urllib.parse import urljoin, urlparse
import re

def download_tv_images():
    """Télécharge les images de la page TV de blondie.paris"""
    urls_to_try = [
        "https://synthesizer-swordfish-lrgy.squarespace.com/revuedepresse-tv",
        "http://synthesizer-swordfish-lrgy.squarespace.com/revuedepresse-tv"
    ]
    
    output_folder = "tv_images"
    
    # Créer le dossier de sortie
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    image_order = []
    
    for url in urls_to_try:
        try:
            print(f"Tentative avec: {url}")
            response = requests.get(url, headers=headers, verify=False, timeout=30)
            response.raise_for_status()
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Trouver toutes les images
            images = soup.find_all('img')
            
            print(f"Trouvé {len(images)} images sur la page")
            
            for i, img in enumerate(images):
                # Récupérer l'URL de l'image
                img_url = img.get('src') or img.get('data-src')
                
                if img_url:
                    # Convertir en URL absolue
                    img_url = urljoin(url, img_url)
                    
                    # Filtrer les images non pertinentes
                    if any(skip in img_url.lower() for skip in ['logo', 'icon', 'avatar', 'profile', 'thumb']):
                        continue
                    
                    # Extraire le nom de fichier
                    parsed_url = urlparse(img_url)
                    filename = os.path.basename(parsed_url.path)
                    
                    # Nettoyer le nom de fichier
                    filename = urllib.parse.unquote(filename)
                    filename = re.sub(r'[^a-zA-Z0-9.-]', '-', filename)
                    filename = re.sub(r'-+', '-', filename)
                    filename = filename.strip('-')
                    
                    # Ajouter l'extension si manquante
                    if not filename.lower().endswith(('.jpg', '.jpeg', '.png', '.webp', '.gif')):
                        filename += '.jpg'
                    
                    # Créer le nom avec préfixe et numérotation
                    numbered_filename = f"{i+1:03d}-tv-blondie-paris-blondie.paris-blondieparis-{filename}"
                    
                    image_order.append({
                        'url': img_url,
                        'filename': numbered_filename,
                        'alt': img.get('alt', '')
                    })
            
            if image_order:
                print(f"✓ Succès avec {url}")
                break
                
        except Exception as e:
            print(f"✗ Erreur avec {url}: {e}")
            continue
    
    if not image_order:
        print("Aucune image trouvée sur les URLs testées")
        return
    
    print(f"\nTéléchargement de {len(image_order)} images...")
    
    downloaded_count = 0
    error_count = 0
    
    for i, img_info in enumerate(image_order):
        try:
            img_url = img_info['url']
            filename = img_info['filename']
            filepath = os.path.join(output_folder, filename)
            
            # Télécharger l'image
            img_response = requests.get(img_url, headers=headers, verify=False, timeout=30)
            img_response.raise_for_status()
            
            # Sauvegarder l'image
            with open(filepath, 'wb') as f:
                f.write(img_response.content)
            
            print(f"✓ Téléchargé: {filename}")
            downloaded_count += 1
            
        except Exception as e:
            print(f"✗ Erreur pour {img_info['filename']}: {e}")
            error_count += 1
    
    print(f"\nTéléchargement terminé!")
    print(f"✓ {downloaded_count} images téléchargées avec succès")
    if error_count > 0:
        print(f"✗ {error_count} erreurs")
    
    print(f"Images sauvegardées dans le dossier: {output_folder}")

if __name__ == "__main__":
    download_tv_images()
