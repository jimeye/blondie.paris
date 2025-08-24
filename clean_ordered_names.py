#!/usr/bin/env python3
"""
Script pour nettoyer les noms des images réorganisées
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

def clean_ordered_images():
    """Nettoie les noms des images réorganisées"""
    folder = "presse_grand_public_images_ordered"
    
    if not os.path.exists(folder):
        print("Dossier presse_grand_public_images_ordered non trouvé")
        return
    
    print("Nettoyage des noms de fichiers...")
    
    for filename in os.listdir(folder):
        if os.path.isfile(os.path.join(folder, filename)):
            # Extraire le numéro et le nom
            if filename.startswith(('0', '1', '2', '3', '4', '5', '6', '7', '8', '9')):
                # Format: 001_nom_du_fichier.ext
                parts = filename.split('_', 1)
                if len(parts) == 2:
                    number = parts[0]
                    name_part = parts[1]
                    
                    # Nettoyer le nom
                    clean_name = clean_filename(name_part)
                    
                    # Créer le nouveau nom
                    new_filename = f"{number}-presse-grand-public-blondie-paris-blondie.paris-blondieparis-{clean_name}"
                    
                    if new_filename != filename:
                        old_path = os.path.join(folder, filename)
                        new_path = os.path.join(folder, new_filename)
                        
                        try:
                            os.rename(old_path, new_path)
                            print(f"✓ Renommé: {filename} -> {new_filename}")
                        except Exception as e:
                            print(f"✗ Erreur pour {filename}: {e}")
    
    print("Nettoyage terminé!")

if __name__ == "__main__":
    clean_ordered_images()
