# BLONDIE PARIS - Site Web Officiel

## 🎯 **Vue d'ensemble**

Site web officiel de **BLONDIE Paris**, bureau de relations presse et communication dirigé par Nathalie Roland. Le site présente les services, références, actualités et événements de l'agence basée à Arles et Paris.

**URL de production :** https://blondie-paris.com

---

## 🏗️ **Architecture Technique**

### **Framework & Technologies**
- **Next.js 13+** - Framework React avec SSR/SSG
- **React 18** - Bibliothèque UI avec hooks modernes
- **Tailwind CSS** - Framework CSS utility-first
- **Sanity CMS** - Système de gestion de contenu headless
- **Vercel** - Plateforme de déploiement et hébergement

### **Structure du Projet**
```
BLONDIE 2/
├── components/          # Composants React réutilisables
├── pages/              # Pages Next.js (routing automatique)
├── public/             # Assets statiques (images, fonts, etc.)
├── styles/             # Styles globaux et configuration
├── lib/                # Utilitaires et configuration Sanity
├── sanity/             # Schémas et configuration Sanity
├── scripts/            # Scripts de génération PDF et utilitaires
├── docs/               # Documentation et fichiers PDF
└── data/               # Données statiques (logos, etc.)
```

---

## 📱 **Pages & Fonctionnalités**

### **Pages Principales**
- **`/`** - Page d'accueil avec sections : À propos, Events, Références, Revue de presse, Contact
- **`/a-propos`** - Présentation détaillée de BLONDIE Paris
- **`/qui-suis-je`** - Biographie et parcours de Nathalie Roland
- **`/actualites`** - Slider d'actualités avec navigation
- **`/references`** - Grille des logos partenaires (42 logos)
- **`/events`** - Galerie d'événements avec modales
- **`/contact`** - Formulaire de contact complet

### **Pages Presse**
- **`/presse-btob`** - Galerie presse BtoB
- **`/presse-grand-public`** - Galerie presse grand public
- **`/presse-internationale`** - Galerie presse internationale
- **`/tv`** - Galerie TV et médias audiovisuels

### **Pages Système**
- **`/404`** - Page d'erreur personnalisée
- **`/studio`** - Interface Sanity CMS

---

## 🎨 **Design System**

### **Palette de Couleurs**
```css
/* Couleurs principales */
--primary-pink: #FFB6C1;      /* Rose - Accent principal */
--text-dark: #394140;         /* Gris anthracite - Titres */
--text-medium: #878787;       /* Gris moyen - Contenu */
--text-light: #8a8a8a;        /* Gris clair - Texte secondaire */
--nav-dark: #111827;          /* Gris très foncé - Navigation */
--white: #FFFFFF;             /* Blanc - Fond */
--black: #000000;             /* Noir - Overlays */
```

### **Typographie**
- **Titres** : `Garamond Normal` (serif)
- **Navigation** : `Neue Helvetica Condensed BQ` (sans-serif)
- **Contenu** : `Garamond Normal` (serif)

### **Composants UI**
- **Navigation** : Header responsive avec menu mobile
- **Footer** : Informations contact et crédits
- **Modales** : Galeries d'images avec navigation
- **Sliders** : Actualités et carrousels
- **Grilles** : Layouts responsives pour contenus

---

## 🧩 **Composants Réutilisables**

### **Navigation & Layout**
- **`Navigation.js`** - Header avec menu responsive et hide-on-scroll
- **`FooterNew.js`** - Footer avec informations contact
- **`Breadcrumbs.js`** - Fil d'Ariane (non utilisé actuellement)

### **Contenu**
- **`Hero.js`** - Section héro avec slider d'images
- **`ActualitesSlider.js`** - Slider d'actualités
- **`ReferencesSection.js`** - Section références
- **`ReviewSection.js`** - Section revue de presse
- **`StorySection.js`** - Section à propos

### **Events & Galeries**
- **`EventsGrid.js`** - Grille d'événements avec pagination
- **`EventCard.js`** - Carte d'événement individuelle
- **`GalleryModal.js`** - Modale de galerie d'images

### **Utilitaires**
- **`SEO.js`** - Composant SEO avec métadonnées
- **`Logo.js`** - Logo BLONDIE avec animations

---

## 📊 **Contenu & Données**

### **Sources de Contenu**
1. **Sanity CMS** - Actualités, contenu dynamique
2. **Fichiers statiques** - Images, logos, données fixes
3. **Configuration** - Paramètres et métadonnées

### **Données Statiques**
- **`data/logos.js`** - 42 logos de références avec URLs
- **Images** - Galeries presse, événements, références
- **Fonts** - Polices personnalisées (Garamond, Helvetica)

### **SEO & Métadonnées**
- Métadonnées complètes pour chaque page
- Open Graph et Twitter Cards
- Données structurées JSON-LD
- Sitemap XML automatique

---

## 🚀 **Déploiement & Performance**

### **Environnements**
- **Production** : https://blondie-paris.com (Vercel)
- **Développement** : http://localhost:3000
- **CMS** : Interface Sanity Studio

### **Optimisations**
- Images WebP pour performance
- Lazy loading des images
- Code splitting automatique
- Cache optimisé (Vercel)

### **Monitoring**
- Analytics intégrés
- Métriques de performance
- Monitoring d'erreurs

---

## 🛠️ **Scripts & Utilitaires**

### **Scripts de Développement**
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting du code
```

### **Scripts Personnalisés**
- **`scripts/export-*.mjs`** - Génération de PDFs
- **`scripts/seed-sanity.mjs`** - Initialisation Sanity
- **`scripts/test-sanity.mjs`** - Tests Sanity

---

## 📁 **Structure Détaillée**

### **Pages (`/pages`)**
```
pages/
├── _app.js              # Configuration globale Next.js
├── _document.js         # HTML document personnalisé
├── _error.js           # Gestion d'erreurs
├── 404.js              # Page 404 personnalisée
├── index.js            # Page d'accueil
├── a-propos.js         # Page À propos
├── qui-suis-je.js      # Page Qui suis-je
├── actualites.js       # Page Actualités
├── references.js       # Page Références
├── events.js           # Page Events
├── contact.js          # Page Contact
├── presse-btob.js      # Page Presse BtoB
├── presse-grand-public.js # Page Presse Grand Public
├── presse-internationale.js # Page Presse Internationale
├── tv.js               # Page TV
└── api/
    └── revalidate.js   # API de revalidation
```

### **Composants (`/components`)**
```
components/
├── Navigation.js       # Header principal
├── FooterNew.js        # Footer
├── Hero.js            # Section héro
├── ActualitesSlider.js # Slider actualités
├── ReferencesSection.js # Section références
├── ReviewSection.js   # Section revue de presse
├── StorySection.js    # Section à propos
├── EventsGrid.js      # Grille événements
├── EventCard.js       # Carte événement
├── GalleryModal.js    # Modale galerie
├── SEO.js             # Composant SEO
├── Logo.js            # Logo BLONDIE
└── Breadcrumbs.js     # Fil d'Ariane
```

### **Configuration**
```
├── next.config.js     # Configuration Next.js
├── tailwind.config.js # Configuration Tailwind
├── postcss.config.js  # Configuration PostCSS
├── sanity.config.js   # Configuration Sanity
└── package.json       # Dépendances et scripts
```

---

## 🎯 **Fonctionnalités Clés**

### **Responsive Design**
- Mobile-first approach
- Breakpoints : sm, md, lg, xl
- Navigation adaptative
- Images responsives

### **Interactions**
- Animations CSS fluides
- Transitions hover
- Modales interactives
- Sliders avec navigation

### **Performance**
- Images optimisées (WebP)
- Lazy loading
- Code splitting
- Cache optimisé

### **Accessibilité**
- Navigation clavier
- ARIA labels
- Contraste optimisé
- Structure sémantique

---

## 📞 **Contact & Support**

### **Équipe**
- **Direction** : Nathalie Roland
- **Développement** : JOSEPH STUDIO CREATIVE
- **Design** : JOSEPH STUDIO CREATIVE

### **Informations**
- **Email** : nathalie@blondie.paris
- **Téléphone** : +33 (0)6 09 49 63 29
- **Adresse** : 11 RUE DU SAUVAGE, 13200 Arles, France

### **Ressources**
- **Repository** : https://github.com/jimeye/blondie.paris
- **Production** : https://blondie-paris.com
- **CMS** : Interface Sanity Studio

---

## 📋 **Changelog**

### **Version Actuelle** (Janvier 2025)
- ✅ Harmonisation complète des couleurs
- ✅ Refactoring des composants
- ✅ Optimisation des performances
- ✅ Nettoyage du code
- ✅ Documentation complète

### **Fonctionnalités Récentes**
- Composants modulaires réutilisables
- Système de couleurs unifié
- Navigation hide-on-scroll
- Galeries avec modales
- SEO optimisé

---

## 🔧 **Maintenance**

### **Mises à Jour Régulières**
- Dépendances npm
- Images et contenus
- Métadonnées SEO
- Sitemap XML

### **Monitoring**
- Performance Core Web Vitals
- Erreurs JavaScript
- Analytics de trafic
- Disponibilité du site

---

*Dernière mise à jour : 28 janvier 2025*
*Version : 2.0.0*
