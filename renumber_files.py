#!/usr/bin/env python3
"""
Script pour renommer les fichiers en renumérotant de 001 à 136
"""

import os
import re
import glob

def renumber_files():
    """Renomme tous les fichiers en renumérotant de 001 à 136"""
    folder = "presse_grand_public_images_webp"
    
    # Trouver tous les fichiers .webp
    pattern = os.path.join(folder, "*.webp")
    files = glob.glob(pattern)
    
    # Trier les fichiers par leur numéro actuel
    def extract_number(filename):
        match = re.match(r'(\d+)-', os.path.basename(filename))
        return int(match.group(1)) if match else 0
    
    files.sort(key=extract_number)
    
    print(f"Trouvé {len(files)} fichiers à renommer")
    
    # Créer un mapping temporaire pour éviter les conflits
    temp_mapping = []
    
    for i, old_path in enumerate(files, 1):
        old_filename = os.path.basename(old_path)
        
        # Extraire la partie après le numéro
        match = re.match(r'\d+-(.+)', old_filename)
        if match:
            name_part = match.group(1)
            new_filename = f"{i:03d}-{name_part}"
            new_path = os.path.join(folder, new_filename)
            
            temp_mapping.append((old_path, new_path, old_filename, new_filename))
    
    # Effectuer les renommages
    for old_path, new_path, old_filename, new_filename in temp_mapping:
        try:
            os.rename(old_path, new_path)
            print(f"✓ Renommé: {old_filename} -> {new_filename}")
        except Exception as e:
            print(f"✗ Erreur pour {old_filename}: {e}")
    
    print(f"\nRenommage terminé! {len(temp_mapping)} fichiers renommés")

if __name__ == "__main__":
    renumber_files()
