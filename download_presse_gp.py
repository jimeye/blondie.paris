#!/usr/bin/env python3
"""
Script pour télécharger les images de la section Presse Grand Public
Usage: python download_presse_gp.py
"""

import requests
from bs4 import BeautifulSoup
import os
import urllib.parse
from urllib.parse import urljoin, urlparse
import re

def download_presse_grand_public_images():
    """
    Télécharge les images de la section Presse Grand Public
    """
    # URLs possibles pour la section Presse Grand Public
    urls_to_try = [
        "https://synthesizer-swordfish-lrgy.squarespace.com/revuedepresse-pressegrandpublic",
        "http://synthesizer-swordfish-lrgy.squarespace.com/revuedepresse-pressegrandpublic"
    ]
    
    output_folder = "presse_grand_public_images"
    
    # Créer le dossier de sortie
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    for url in urls_to_try:
        try:
            print(f"Tentative avec: {url}")
            
            # Récupérer la page
            response = requests.get(url, headers=headers, verify=False, timeout=10)
            response.raise_for_status()
            
            # Parser le HTML
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Chercher spécifiquement les images liées à la presse grand public
            images = soup.find_all('img')
            
            print(f"Trouvé {len(images)} images sur la page")
            
            downloaded_count = 0
            
            for i, img in enumerate(images):
                img_url = img.get('src') or img.get('data-src')
                if not img_url:
                    continue
                
                # Construire l'URL complète
                img_url = urljoin(url, img_url)
                
                # Filtrer les images pertinentes (optionnel)
                img_alt = img.get('alt', '').lower()
                img_src = img_url.lower()
                
                # Ignorer les images de navigation, logos, etc.
                if any(skip in img_src for skip in ['logo', 'icon', 'nav', 'menu', 'button']):
                    continue
                
                # Extraire le nom de fichier
                parsed_url = urlparse(img_url)
                filename = os.path.basename(parsed_url.path)
                
                # Si pas de nom de fichier, en créer un
                if not filename or '.' not in filename:
                    filename = f"presse_gp_{i+1}.jpg"
                else:
                    # Ajouter un préfixe pour identifier la source
                    filename = f"presse_gp_{filename}"
                
                # Chemin complet du fichier
                filepath = os.path.join(output_folder, filename)
                
                try:
                    # Télécharger l'image
                    img_response = requests.get(img_url, headers=headers, verify=False, timeout=10)
                    img_response.raise_for_status()
                    
                    # Sauvegarder l'image
                    with open(filepath, 'wb') as f:
                        f.write(img_response.content)
                    
                    print(f"✓ Téléchargé: {filename}")
                    downloaded_count += 1
                    
                except Exception as e:
                    print(f"✗ Erreur pour {img_url}: {e}")
            
            print(f"\nTéléchargement terminé! {downloaded_count} images téléchargées dans le dossier '{output_folder}'")
            return  # Sortir après le premier succès
            
        except Exception as e:
            print(f"Erreur avec {url}: {e}")
            continue
    
    print("Aucune URL n'a fonctionné. Essayons une approche différente...")
    
    # Essayer de trouver la page via la page d'accueil
    try:
        main_url = "https://synthesizer-swordfish-lrgy.squarespace.com"
        response = requests.get(main_url, headers=headers, verify=False, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Chercher des liens vers la presse grand public
        links = soup.find_all('a', href=True)
        presse_links = [link for link in links if 'presse' in link.get('href', '').lower()]
        
        print(f"Liens trouvés contenant 'presse': {[link.get('href') for link in presse_links]}")
        
    except Exception as e:
        print(f"Erreur lors de la recherche: {e}")

if __name__ == "__main__":
    download_presse_grand_public_images()
