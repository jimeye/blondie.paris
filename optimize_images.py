#!/usr/bin/env python3
"""
Script d'optimisation des images pour BLONDIE Paris
Convertit les images JPG/JPEG en WebP optimisées
"""

import os
import subprocess
from PIL import Image
import glob

def convert_to_webp(input_path, output_path, quality=85):
    """Convertit une image en WebP avec la qualité spécifiée"""
    try:
        with Image.open(input_path) as img:
            # Convertir en RGB si nécessaire (pour les images RGBA)
            if img.mode in ('RGBA', 'LA', 'P'):
                img = img.convert('RGB')
            
            # Sauvegarder en WebP
            img.save(output_path, 'WEBP', quality=quality, method=6)
            print(f"✅ Converti: {input_path} -> {output_path}")
            return True
    except Exception as e:
        print(f"❌ Erreur lors de la conversion de {input_path}: {e}")
        return False

def get_file_size(file_path):
    """Retourne la taille du fichier en KB"""
    size_bytes = os.path.getsize(file_path)
    return size_bytes / 1024

def optimize_images():
    """Optimise toutes les images du projet"""
    
    # Dossiers à traiter
    directories = [
        'public',
        'public/logos',
        'public/slider'
    ]
    
    total_saved = 0
    converted_count = 0
    
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        print(f"\n🔍 Traitement du dossier: {directory}")
        
        # Chercher toutes les images JPG/JPEG
        jpg_files = glob.glob(os.path.join(directory, "*.jpg")) + \
                   glob.glob(os.path.join(directory, "*.jpeg")) + \
                   glob.glob(os.path.join(directory, "*.JPG")) + \
                   glob.glob(os.path.join(directory, "*.JPEG"))
        
        for jpg_file in jpg_files:
            # Créer le nom du fichier WebP
            webp_file = os.path.splitext(jpg_file)[0] + '.webp'
            
            # Vérifier si le fichier WebP existe déjà
            if os.path.exists(webp_file):
                print(f"⏭️  WebP existe déjà: {webp_file}")
                continue
            
            # Obtenir la taille originale
            original_size = get_file_size(jpg_file)
            
            # Convertir en WebP
            if convert_to_webp(jpg_file, webp_file):
                # Obtenir la nouvelle taille
                new_size = get_file_size(webp_file)
                saved = original_size - new_size
                total_saved += saved
                converted_count += 1
                
                print(f"📊 Taille: {original_size:.1f} KB -> {new_size:.1f} KB (économie: {saved:.1f} KB)")
    
    print(f"\n🎉 OPTIMISATION TERMINÉE !")
    print(f"📈 Images converties: {converted_count}")
    print(f"💾 Espace économisé: {total_saved:.1f} KB ({total_saved/1024:.2f} MB)")
    
    if converted_count > 0:
        print(f"\n💡 Prochaines étapes:")
        print(f"   1. Vérifier la qualité des images WebP")
        print(f"   2. Mettre à jour les références dans le code")
        print(f"   3. Supprimer les anciennes images JPG")

if __name__ == "__main__":
    print("🚀 Démarrage de l'optimisation des images...")
    optimize_images()
