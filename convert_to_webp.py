#!/usr/bin/env python3
"""
Script pour convertir toutes les images en format WebP
"""

import os
from PIL import Image
import glob

def convert_to_webp():
    """Convertit toutes les images en format WebP"""
    source_folder = "presse_grand_public_images_ordered"
    target_folder = "presse_grand_public_images_webp"
    
    # Créer le dossier de destination
    if not os.path.exists(target_folder):
        os.makedirs(target_folder)
    
    # Formats d'images supportés
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.bmp', '*.tiff', '*.tif']
    
    # Trouver toutes les images
    image_files = []
    for ext in image_extensions:
        pattern = os.path.join(source_folder, ext)
        image_files.extend(glob.glob(pattern))
        pattern = os.path.join(source_folder, ext.upper())
        image_files.extend(glob.glob(pattern))
    
    print(f"Trouvé {len(image_files)} images à convertir")
    
    converted_count = 0
    error_count = 0
    
    for image_path in image_files:
        try:
            # Ouvrir l'image
            with Image.open(image_path) as img:
                # Convertir en RGB si nécessaire (pour les PNG avec transparence)
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Créer un fond blanc
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Créer le nom du fichier de sortie
                filename = os.path.basename(image_path)
                name_without_ext = os.path.splitext(filename)[0]
                output_filename = f"{name_without_ext}.webp"
                output_path = os.path.join(target_folder, output_filename)
                
                # Sauvegarder en WebP avec une qualité optimale
                img.save(output_path, 'WEBP', quality=85, method=6)
                
                print(f"✓ Converti: {filename} -> {output_filename}")
                converted_count += 1
                
        except Exception as e:
            print(f"✗ Erreur pour {os.path.basename(image_path)}: {e}")
            error_count += 1
    
    print(f"\nConversion terminée!")
    print(f"✓ {converted_count} images converties avec succès")
    if error_count > 0:
        print(f"✗ {error_count} erreurs")
    
    # Afficher les statistiques de taille
    if converted_count > 0:
        print(f"\nImages converties dans le dossier: {target_folder}")

if __name__ == "__main__":
    convert_to_webp()
