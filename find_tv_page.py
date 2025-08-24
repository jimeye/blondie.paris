#!/usr/bin/env python3
"""
Script pour explorer le site et trouver la page TV
"""

import requests
from bs4 import BeautifulSoup
import re

def find_tv_page():
    """Trouve la page TV sur le site blondie.paris"""
    base_url = "https://synthesizer-swordfish-lrgy.squarespace.com"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        print(f"Exploration de: {base_url}")
        response = requests.get(base_url, headers=headers, verify=False, timeout=30)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Chercher tous les liens
        links = soup.find_all('a', href=True)
        
        print("Liens trouvés:")
        for link in links:
            href = link.get('href')
            text = link.get_text(strip=True)
            
            # Chercher des liens contenant "tv" ou "television"
            if 'tv' in href.lower() or 'tv' in text.lower() or 'television' in text.lower():
                print(f"  TV trouvé: {text} -> {href}")
            
            # Afficher aussi les liens principaux
            if href.startswith('/') and len(href) > 1:
                print(f"  Lien: {text} -> {href}")
    
    except Exception as e:
        print(f"Erreur: {e}")

if __name__ == "__main__":
    find_tv_page()
