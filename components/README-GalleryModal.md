# GalleryModal - Composant Modal Réutilisable

## Description
Le composant `GalleryModal` est un modal réutilisable pour afficher des galeries d'images d'événements.

## Utilisation

```jsx
import GalleryModal from '../components/GalleryModal'

// Dans votre composant
const [isModalOpen, setIsModalOpen] = useState(false)
const [selectedEvent, setSelectedEvent] = useState(null)

// Ouvrir le modal
const openModal = (event) => {
  setSelectedEvent(event)
  setIsModalOpen(true)
}

// Fermer le modal
const closeModal = () => {
  setIsModalOpen(false)
  setSelectedEvent(null)
}

// Dans le JSX
<GalleryModal 
  isOpen={isModalOpen}
  onClose={closeModal}
  event={selectedEvent}
  zIndex={999999} // optionnel, par défaut 999999
/>
```

## Props

| Prop | Type | Requis | Description |
|------|------|--------|-------------|
| `isOpen` | boolean | ✅ | Contrôle l'affichage du modal |
| `onClose` | function | ✅ | Fonction appelée pour fermer le modal |
| `event` | object | ✅ | Objet contenant les données de l'événement |
| `zIndex` | number | ❌ | Z-index du modal (défaut: 999999) |

## Structure de l'objet event

```javascript
const event = {
  title: "Titre de l'événement",
  modalTitle: true, // optionnel, pour afficher un titre spécial
  gallery: [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    // ... autres images
  ]
}
```

## Fonctionnalités

- ✅ Modal responsive (mobile/desktop)
- ✅ Grille d'images adaptative
- ✅ Fermeture par clic sur l'overlay
- ✅ Bouton de fermeture
- ✅ Gestion des erreurs d'images
- ✅ Lazy loading des images
- ✅ Z-index configurable
- ✅ Accessibilité (aria-label)

## Exemple complet

Voir `pages/events.js` pour un exemple d'implémentation complète.
