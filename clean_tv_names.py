#!/usr/bin/env python3
"""
Script pour nettoyer les noms des fichiers TV
"""

import os
import glob
import re

def clean_tv_names():
    """Nettoie les noms des fichiers TV"""
    folder = "tv_images_webp"
    
    # Trouver tous les fichiers .webp
    pattern = os.path.join(folder, "*.webp")
    files = glob.glob(pattern)
    
    print(f"Trouvé {len(files)} fichiers à nettoyer")
    
    cleaned_count = 0
    
    for file_path in files:
        filename = os.path.basename(file_path)
        
        # Remplacer les espaces par des tirets
        cleaned_filename = filename.replace(' ', '-')
        
        # Remplacer les tirets multiples par un seul tiret
        cleaned_filename = re.sub(r'-+', '-', cleaned_filename)
        
        # Supprimer les tirets au début et à la fin
        cleaned_filename = cleaned_filename.strip('-')
        
        # Vérifier si le nom a changé
        if cleaned_filename != filename:
            new_path = os.path.join(folder, cleaned_filename)
            
            try:
                os.rename(file_path, new_path)
                print(f"✓ Nettoyé: {filename} -> {cleaned_filename}")
                cleaned_count += 1
            except Exception as e:
                print(f"✗ Erreur pour {filename}: {e}")
    
    print(f"\nNettoyage terminé!")
    print(f"✓ {cleaned_count} fichiers nettoyés")

if __name__ == "__main__":
    clean_tv_names()
