#!/usr/bin/env python3
"""
Script de nettoyage des anciennes images JPG/JPEG
Identifie les images qui ont été converties en WebP et peuvent être supprimées
"""

import os
import glob

def find_old_images():
    """Trouve les anciennes images JPG/JPEG qui ont des équivalents WebP"""
    
    # Dossiers à analyser
    directories = [
        'public',
        'public/logos',
        'public/slider'
    ]
    
    old_images = []
    total_size = 0
    
    print("🔍 ANALYSE DES ANCIENNES IMAGES JPG/JPEG...")
    print("=" * 50)
    
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        print(f"\n📁 Dossier: {directory}")
        
        # Chercher toutes les images JPG/JPEG
        jpg_files = glob.glob(os.path.join(directory, "*.jpg")) + \
                   glob.glob(os.path.join(directory, "*.jpeg")) + \
                   glob.glob(os.path.join(directory, "*.JPG")) + \
                   glob.glob(os.path.join(directory, "*.JPEG"))
        
        for jpg_file in jpg_files:
            # Créer le nom du fichier WebP correspondant
            webp_file = os.path.splitext(jpg_file)[0] + '.webp'
            
            # Vérifier si le fichier WebP existe
            if os.path.exists(webp_file):
                # Obtenir la taille du fichier JPG
                size_kb = os.path.getsize(jpg_file) / 1024
                total_size += size_kb
                
                old_images.append({
                    'path': jpg_file,
                    'size_kb': size_kb,
                    'webp_path': webp_file
                })
                
                print(f"🗑️  {os.path.basename(jpg_file)} -> {os.path.basename(webp_file)} ({size_kb:.1f} KB)")
            else:
                print(f"⚠️  {os.path.basename(jpg_file)} - Pas d'équivalent WebP trouvé")
    
    print("\n" + "=" * 50)
    print(f"📊 RÉSULTATS DE L'ANALYSE :")
    print(f"🗑️  Images JPG/JPEG à supprimer : {len(old_images)}")
    print(f"💾 Espace à libérer : {total_size:.1f} KB ({total_size/1024:.2f} MB)")
    
    if old_images:
        print(f"\n💡 PROCHAINES ÉTAPES :")
        print(f"   1. Vérifier que les images WebP fonctionnent bien")
        print(f"   2. Supprimer les anciennes images JPG/JPEG")
        print(f"   3. Vérifier que le site fonctionne toujours")
        
        print(f"\n📝 LISTE COMPLÈTE DES IMAGES À SUPPRIMER :")
        for img in old_images:
            print(f"   - {img['path']} ({img['size_kb']:.1f} KB)")
    else:
        print(f"\n✅ Aucune ancienne image à supprimer !")
    
    return old_images

if __name__ == "__main__":
    print("🚀 Démarrage de l'analyse des anciennes images...")
    old_images = find_old_images()




