#!/usr/bin/env python3
"""
Script pour nettoyer les noms de fichiers téléchargés
"""

import os
import urllib.parse
import re

def clean_filename(filename):
    """Nettoie le nom de fichier"""
    # Décoder les caractères URL
    decoded = urllib.parse.unquote(filename)
    
    # Remplacer les caractères spéciaux par des tirets
    cleaned = re.sub(r'[^a-zA-Z0-9.-]', '-', decoded)
    
    # Supprimer les tirets multiples
    cleaned = re.sub(r'-+', '-', cleaned)
    
    # Supprimer les tirets au début et à la fin
    cleaned = cleaned.strip('-')
    
    return cleaned

def clean_downloaded_files():
    """Nettoie tous les fichiers dans le dossier downloaded_images"""
    folder = "downloaded_images"
    
    if not os.path.exists(folder):
        print("Dossier downloaded_images non trouvé")
        return
    
    for filename in os.listdir(folder):
        if os.path.isfile(os.path.join(folder, filename)):
            clean_name = clean_filename(filename)
            
            if clean_name != filename:
                old_path = os.path.join(folder, filename)
                new_path = os.path.join(folder, clean_name)
                
                try:
                    os.rename(old_path, new_path)
                    print(f"✓ Renommé: {filename} -> {clean_name}")
                except Exception as e:
                    print(f"✗ Erreur pour {filename}: {e}")

if __name__ == "__main__":
    clean_downloaded_files()
    print("Nettoyage terminé!")
