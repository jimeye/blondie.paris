export default function EventCard({ event, index, onOpenModal, isSpecial = false }) {
  const getAspectRatio = () => {
    if (isSpecial) {
      return 'pt-[75%]' // Format rectangulaire pour la galerie spéciale
    }
    return 'pt-[130%]' // Format plus haut pour éviter la coupure
  }

  const getColSpan = () => {
    if (isSpecial) {
      return 'col-span-2 md:col-span-4' // 2 colonnes sur mobile, 4 colonnes (toute la largeur) sur desktop
    }
    return '' // 1 colonne normale
  }

  return (
    <button
      onClick={() => onOpenModal(index)}
      className={`group bg-transparent overflow-hidden transition ${getColSpan()}`}
      aria-label={`Ouvrir la galerie ${event.title}`}
    >
      <div className={`relative w-full ${getAspectRatio()} bg-transparent`}>
        <img
          src={event.cover}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            console.error(`Erreur de chargement pour ${event.title}:`, event.cover)
          }}
        />
      </div>
      <div className="p-1 text-left">
        <p className="text-xs text-[#394140] normal-case">{event.title}</p>
      </div>
    </button>
  )
}
