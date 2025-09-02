#!/usr/bin/env python3
"""
Script de mise à jour des chemins des logos
Convertit les références JPG/JPEG vers WebP dans data/logos.js
"""

import re

def update_logo_paths():
    """Met à jour les chemins des logos dans data/logos.js"""
    
    # Lire le fichier
    with open('data/logos.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Compter les modifications
    changes_count = 0
    
    # Remplacer les extensions JPG/JPEG par WebP
    # Pattern pour capturer les chemins des logos
    patterns = [
        (r'("/logos/[^"]+)\.jpg"', r'\1.webp"'),
        (r'("/logos/[^"]+)\.jpeg"', r'\1.webp"'),
        (r'("/logos/[^"]+)\.JPG"', r'\1.webp"'),
        (r'("/logos/[^"]+)\.JPEG"', r'\1.webp"')
    ]
    
    for pattern, replacement in patterns:
        new_content, count = re.subn(pattern, replacement, content)
        if count > 0:
            content = new_content
            changes_count += count
            print(f"✅ {count} chemins mis à jour avec le pattern: {pattern}")
    
    # Écrire le fichier mis à jour
    with open('data/logos.js', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n🎉 MISE À JOUR TERMINÉE !")
    print(f"📈 Chemins mis à jour: {changes_count}")
    
    if changes_count > 0:
        print(f"\n💡 Prochaines étapes:")
        print(f"   1. Vérifier que les images WebP existent")
        print(f"   2. Tester le site avec les nouvelles images")
        print(f"   3. Supprimer les anciennes images JPG/JPEG")

if __name__ == "__main__":
    print("🚀 Démarrage de la mise à jour des chemins des logos...")
    update_logo_paths()
