#!/usr/bin/env python3
"""
Script pour réorganiser les images dans l'ordre exact de la page web
"""

import requests
from bs4 import BeautifulSoup
import os
import re
from urllib.parse import urljoin, urlparse

def get_image_order_from_page():
    """
    Récupère l'ordre exact des images depuis la page web
    """
    url = "https://synthesizer-swordfish-lrgy.squarespace.com/revuedepresse-pressegrandpublic"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers, verify=False, timeout=10)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        images = soup.find_all('img')
        
        image_order = []
        
        for i, img in enumerate(images):
            img_url = img.get('src') or img.get('data-src')
            if not img_url:
                continue
            
            # Construire l'URL complète
            img_url = urljoin(url, img_url)
            
            # Extraire le nom de fichier
            parsed_url = urlparse(img_url)
            filename = os.path.basename(parsed_url.path)
            
            # Ignorer les images de navigation, logos, etc.
            if any(skip in img_url.lower() for skip in ['logo', 'icon', 'nav', 'menu', 'button']):
                continue
            
            image_order.append({
                'index': i,
                'url': img_url,
                'filename': filename,
                'alt': img.get('alt', '')
            })
        
        return image_order
        
    except Exception as e:
        print(f"Erreur lors de la récupération de l'ordre: {e}")
        return []

def reorder_images():
    """
    Réorganise les images dans l'ordre de la page web
    """
    source_folder = "presse_grand_public_images"
    target_folder = "presse_grand_public_images_ordered"
    
    # Créer le dossier de destination
    if not os.path.exists(target_folder):
        os.makedirs(target_folder)
    
    # Récupérer l'ordre depuis la page web
    print("Récupération de l'ordre des images depuis la page web...")
    image_order = get_image_order_from_page()
    
    if not image_order:
        print("Impossible de récupérer l'ordre depuis la page web")
        return
    
    print(f"Trouvé {len(image_order)} images dans l'ordre de la page")
    
    # Créer un mapping des noms de fichiers
    existing_files = {}
    for filename in os.listdir(source_folder):
        if os.path.isfile(os.path.join(source_folder, filename)):
            # Nettoyer le nom pour la comparaison
            clean_name = filename.replace('presse_gp_', '')
            existing_files[clean_name] = filename
    
    print(f"Trouvé {len(existing_files)} fichiers dans le dossier source")
    
    # Réorganiser les fichiers
    reordered_count = 0
    
    for i, img_info in enumerate(image_order):
        original_filename = img_info['filename']
        
        # Chercher le fichier correspondant
        found_file = None
        for clean_name, full_filename in existing_files.items():
            if clean_name == original_filename or clean_name in original_filename or original_filename in clean_name:
                found_file = full_filename
                break
        
        if found_file:
            # Créer le nouveau nom avec l'ordre
            new_filename = f"{i+1:03d}_{found_file.replace('presse_gp_', '')}"
            
            # Copier le fichier avec le nouveau nom
            source_path = os.path.join(source_folder, found_file)
            target_path = os.path.join(target_folder, new_filename)
            
            try:
                with open(source_path, 'rb') as src, open(target_path, 'wb') as dst:
                    dst.write(src.read())
                print(f"✓ {i+1:03d}: {new_filename}")
                reordered_count += 1
            except Exception as e:
                print(f"✗ Erreur pour {found_file}: {e}")
        else:
            print(f"? Image non trouvée: {original_filename}")
    
    print(f"\nRéorganisation terminée! {reordered_count} images réorganisées dans '{target_folder}'")

if __name__ == "__main__":
    reorder_images()
