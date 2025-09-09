#!/usr/bin/env python3
"""
Script de suppression des anciennes images JPG/JPEG
Supprime en toute sécurité les images qui ont des équivalents WebP
"""

import os
import glob
import shutil

def delete_old_images():
    """Supprime les anciennes images JPG/JPEG qui ont des équivalents WebP"""
    
    # Dossiers à analyser
    directories = [
        'public',
        'public/logos',
        'public/slider'
    ]
    
    deleted_images = []
    total_size_freed = 0
    
    print("🗑️  SUPPRESSION DES ANCIENNES IMAGES JPG/JPEG...")
    print("=" * 60)
    print("⚠️  ATTENTION : Cette opération est irréversible !")
    print("✅ Seules les images avec équivalent WebP seront supprimées")
    print("=" * 60)
    
    # Demander confirmation
    confirm = input("\n❓ Êtes-vous sûr de vouloir continuer ? (oui/non): ").lower()
    if confirm not in ['oui', 'o', 'yes', 'y']:
        print("❌ Opération annulée par l'utilisateur")
        return
    
    for directory in directories:
        if not os.path.exists(directory):
            continue
            
        print(f"\n📁 Traitement du dossier: {directory}")
        
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
                try:
                    # Obtenir la taille avant suppression
                    size_kb = os.path.getsize(jpg_file) / 1024
                    total_size_freed += size_kb
                    
                    # Supprimer le fichier JPG
                    os.remove(jpg_file)
                    
                    deleted_images.append({
                        'path': jpg_file,
                        'size_kb': size_kb,
                        'webp_path': webp_file
                    })
                    
                    print(f"✅ Supprimé: {os.path.basename(jpg_file)} ({size_kb:.1f} KB)")
                    
                except Exception as e:
                    print(f"❌ Erreur lors de la suppression de {jpg_file}: {e}")
            else:
                print(f"⚠️  Conservé: {os.path.basename(jpg_file)} - Pas d'équivalent WebP")
    
    print("\n" + "=" * 60)
    print(f"🎉 SUPPRESSION TERMINÉE !")
    print(f"📈 Images supprimées: {len(deleted_images)}")
    print(f"💾 Espace libéré: {total_size_freed:.1f} KB ({total_size_freed/1024:.2f} MB)")
    
    if deleted_images:
        print(f"\n📝 IMAGES SUPPRIMÉES :")
        for img in deleted_images:
            print(f"   - {img['path']} ({img['size_kb']:.1f} KB) -> {img['webp_path']}")
        
        print(f"\n💡 PROCHAINES ÉTAPES :")
        print(f"   1. Tester le site pour vérifier qu'il fonctionne")
        print(f"   2. Vérifier que toutes les images WebP s'affichent")
        print(f"   3. Commiter les changements")
    
    return deleted_images

if __name__ == "__main__":
    print("🚀 Démarrage de la suppression des anciennes images...")
    deleted_images = delete_old_images()





