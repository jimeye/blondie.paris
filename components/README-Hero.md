# Composant Hero

## Description
Composant réutilisable pour créer des sections hero avec slider d'images, logo centré et lien playlist.

## Utilisation

### Import
```jsx
import Hero from '../components/Hero'
```

### Utilisation basique
```jsx
<Hero />
```

### Utilisation avec configuration personnalisée
```jsx
<Hero
  slides={['/image1.jpg', '/image2.jpg']}
  showLogo={true}
  logoPath="/custom-logo.png"
  showPlaylist={false}
  autoAdvance={false}
  showNavigation={true}
/>
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `slides` | `string[]` | `['/nathalie-roland-blondie-paris-hero-acceuil.webp', '/nathalie-roland-blondie-paris-hero-acceuil-2.webp']` | Tableau des images du slider |
| `showLogo` | `boolean` | `true` | Afficher le logo centré |
| `logoPath` | `string` | `'/logo.webp'` | Chemin vers l'image du logo |
| `logoAlt` | `string` | `'Blondie Paris Logo'` | Texte alternatif du logo |
| `logoSize` | `string` | `'w-64 h-auto'` | Classes CSS pour la taille du logo |
| `logoMarginTop` | `string` | `'-33vh'` | Marge top du logo (style inline) |
| `showPlaylist` | `boolean` | `true` | Afficher le lien playlist |
| `playlistUrl` | `string` | URL Deezer par défaut | URL du lien playlist |
| `playlistLabel` | `string` | `'My Playlist'` | Texte du lien playlist |
| `playlistIcon` | `string` | `'/logo-deezer-playlis-blondie-paris-relation-presse.webp'` | Icône du lien playlist |
| `playlistIconAlt` | `string` | `'Deezer'` | Texte alternatif de l'icône |
| `autoAdvance` | `boolean` | `true` | Auto-avancement des slides |
| `autoAdvanceInterval` | `number` | `8000` | Intervalle d'auto-avancement en ms |
| `showNavigation` | `boolean` | `false` | Afficher les flèches de navigation |
| `height` | `string` | `'h-[95vh] md:h-[105vh] lg:h-[110vh]'` | Classes CSS pour la hauteur |
| `marginTop` | `string` | `'-mt-16'` | Classes CSS pour la marge top |
| `alt` | `string` | `'Blondie Paris'` | Texte alternatif des images |

## Exemples d'utilisation

### Hero simple sans logo ni playlist
```jsx
<Hero
  slides={['/image1.jpg']}
  showLogo={false}
  showPlaylist={false}
  autoAdvance={false}
/>
```

### Hero avec navigation manuelle
```jsx
<Hero
  showNavigation={true}
  autoAdvance={false}
/>
```

### Hero personnalisé pour une autre page
```jsx
<Hero
  slides={['/custom-hero1.jpg', '/custom-hero2.jpg']}
  logoPath="/custom-logo.png"
  logoAlt="Mon Logo"
  showPlaylist={false}
  height="h-[80vh]"
  marginTop=""
/>
```

## Fonctionnalités

- **Slider automatique** : Changement automatique des images
- **Navigation manuelle** : Flèches pour naviguer (optionnel)
- **Logo centré** : Logo positionné au centre (configurable)
- **Lien playlist** : Lien vers playlist Deezer (configurable)
- **Responsive** : S'adapte à toutes les tailles d'écran
- **Accessible** : Labels ARIA et navigation clavier
- **Performance** : Images optimisées avec Next.js Image
