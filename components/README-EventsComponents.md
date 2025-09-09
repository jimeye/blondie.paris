# Composants Événements - Documentation

## Vue d'ensemble
Cette documentation décrit les composants réutilisables pour l'affichage des événements et galeries.

## Composants disponibles

### 1. EventCard
Composant pour afficher une carte d'événement individuelle.

#### Props
| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `event` | object | ✅ | Objet contenant les données de l'événement |
| `index` | number | ✅ | Index de l'événement dans la liste |
| `onOpenModal` | function | ✅ | Fonction appelée pour ouvrir le modal |
| `isSpecial` | boolean | ❌ | Si true, applique un style spécial (défaut: false) |

#### Structure de l'objet event
```javascript
const event = {
  title: "Titre de l'événement",
  cover: "/path/to/cover-image.webp",
  gallery: [
    "/path/to/image1.webp",
    "/path/to/image2.webp",
    // ... autres images
  ],
  modalTitle: true // optionnel, pour afficher un titre spécial
}
```

#### Utilisation
```jsx
<EventCard
  event={event}
  index={0}
  onOpenModal={(index) => setOpenModal(index)}
  isSpecial={event.title === 'D. Coste – Nord Pinus'}
/>
```

### 2. EventsGrid
Composant pour afficher une grille d'événements avec pagination.

#### Props
| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `events` | array | ✅ | Liste des événements à afficher |
| `onOpenModal` | function | ✅ | Fonction appelée pour ouvrir le modal |
| `page` | number | ❌ | Page actuelle (défaut: 1) |
| `pageSize` | number | ❌ | Nombre d'événements par page (défaut: 4) |
| `showPagination` | boolean | ❌ | Afficher la pagination (défaut: true) |
| `onPageChange` | function | ❌ | Fonction appelée lors du changement de page |

#### Utilisation
```jsx
<EventsGrid
  events={allEvents}
  onOpenModal={(index) => setOpenModal(index)}
  page={currentPage}
  pageSize={4}
  onPageChange={setCurrentPage}
  showPagination={true}
/>
```

### 3. GalleryModal
Composant modal pour afficher les galeries d'images.

#### Props
| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `isOpen` | boolean | ✅ | Contrôle l'affichage du modal |
| `onClose` | function | ✅ | Fonction appelée pour fermer le modal |
| `event` | object | ✅ | Objet contenant les données de l'événement |
| `zIndex` | number | ❌ | Z-index du modal (défaut: 999999) |

#### Utilisation
```jsx
<GalleryModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  event={selectedEvent}
  zIndex={999999}
/>
```

## Exemple d'utilisation complète

```jsx
import { useState } from 'react'
import EventCard from '../components/EventCard'
import EventsGrid from '../components/EventsGrid'
import GalleryModal from '../components/GalleryModal'

export default function EventsPage() {
  const [page, setPage] = useState(1)
  const [openIdx, setOpenIdx] = useState(null)
  const pageSize = 4

  return (
    <div>
      {/* Grille des événements */}
      <EventsGrid
        events={allEvents}
        onOpenModal={(index) => setOpenIdx(index)}
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
      />

      {/* Modal de galerie */}
      <GalleryModal
        isOpen={openIdx !== null}
        onClose={() => setOpenIdx(null)}
        event={openIdx !== null ? allEvents[openIdx] : null}
      />
    </div>
  )
}
```

## Fonctionnalités

### EventCard
- ✅ **Responsive** : S'adapte mobile/desktop
- ✅ **Aspect ratio adaptatif** : Format spécial pour certains événements
- ✅ **Gestion d'erreurs** : Images avec fallback
- ✅ **Accessibilité** : Boutons avec aria-label
- ✅ **Performance** : Lazy loading des images

### EventsGrid
- ✅ **Pagination automatique** : Calcul et affichage des pages
- ✅ **Responsive** : 2 colonnes mobile, 4 colonnes desktop
- ✅ **Configurable** : Taille de page personnalisable
- ✅ **Navigation** : Boutons précédent/suivant
- ✅ **Compteur de pages** : Affichage page actuelle/total

### GalleryModal
- ✅ **Modal responsive** : S'adapte mobile/desktop
- ✅ **Grille d'images** : Affichage en 2 colonnes
- ✅ **Fermeture multiple** : Clic overlay, bouton, touche Escape
- ✅ **Gestion d'erreurs** : Images avec fallback
- ✅ **Performance** : Lazy loading des images

## Styles et classes CSS

### Classes principales
- **Grille** : `grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5`
- **Aspect ratio** : `pt-[130%]` (normal), `pt-[75%]` (spécial)
- **Images** : `object-cover` pour remplir le cadre
- **Pagination** : Boutons avec `bg-[#FFB6C1]` et `hover:bg-[#FFB6C1]/80`

### Couleurs
- **Primaire** : `#FFB6C1` (rose)
- **Texte** : `#394140` (gris foncé)
- **Background** : `white` (blanc)

## Notes techniques

1. **Performance** : Les images utilisent `loading="lazy"` pour un chargement optimisé
2. **Accessibilité** : Tous les boutons ont des `aria-label` appropriés
3. **Responsive** : Utilisation de classes Tailwind avec breakpoints `md:`
4. **Gestion d'erreurs** : `onError` handlers pour les images défaillantes
5. **État** : Gestion centralisée de l'état avec `useState`

## Maintenance

Pour modifier le comportement :
1. **EventCard** : Modifier les aspect ratios dans `getAspectRatio()`
2. **EventsGrid** : Ajuster la pagination dans `useMemo`
3. **GalleryModal** : Modifier la grille d'images dans le JSX

Pour ajouter de nouveaux événements :
1. Ajouter l'objet dans le tableau `allEvents`
2. Respecter la structure avec `title`, `cover`, et `gallery`
3. Optionnel : ajouter `modalTitle: true` pour un titre spécial
