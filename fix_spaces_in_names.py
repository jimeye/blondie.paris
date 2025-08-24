#!/usr/bin/env python3
"""
Script pour corriger les espaces dans les noms de fichiers
"""

import os
import glob

def fix_spaces_in_names():
    """Remplace les espaces par des tirets dans les noms de fichiers"""
    folder = "presse_grand_public_images_webp"
    
    # Trouver tous les fichiers .webp
    pattern = os.path.join(folder, "*.webp")
    files = glob.glob(pattern)
    
    print(f"Trouvé {len(files)} fichiers à vérifier")
    
    fixed_count = 0
    
    for file_path in files:
        filename = os.path.basename(file_path)
        
        # Vérifier s'il y a des espaces dans le nom
        if ' ' in filename:
            # Remplacer les espaces par des tirets
            new_filename = filename.replace(' ', '-')
            new_path = os.path.join(folder, new_filename)
            
            try:
                os.rename(file_path, new_path)
                print(f"✓ Corrigé: {filename} -> {new_filename}")
                fixed_count += 1
            except Exception as e:
                print(f"✗ Erreur pour {filename}: {e}")
    
    print(f"\nCorrection terminée!")
    print(f"✓ {fixed_count} fichiers corrigés")

if __name__ == "__main__":
    fix_spaces_in_names()
