import { useState } from 'react'

export default function GalleryModal({ isOpen, onClose, event, zIndex = 999999 }) {
  if (!isOpen || !event) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[999999] flex items-start justify-center overflow-y-auto p-4"
      onClick={onClose}
      style={{ zIndex }}
    >
      <div className="w-full max-w-6xl mx-auto bg-white rounded-none p-2 md:p-3 my-4 overflow-x-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-1 md:px-2 py-2 sticky top-0 bg-white z-[999999]">
          <h2 className="text-lg md:text-xl font-semibold text-[#394140]">
            {event?.modalTitle ? (
              <>
                <span className="block md:inline">Le Club des Directeurs Artistiques</span>
                <span className="block md:inline">Galerie du Club, place Patrat</span>
              </>
            ) : (
              event?.title
            )}
          </h2>
          <button 
            className="text-[#394140] hover:text-[#FFB6C1] transition-colors" 
            aria-label="Fermer" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        {/* Grille 2 colonnes mobile et desktop */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 px-1 md:px-2 pb-2">
          {event?.gallery?.map((src, gi) => (
            <div key={gi} className={`${(gi === 0 || gi === 1 || gi === 2 || gi === 3 || gi === 6 || gi === 7 ? 'col-span-2' : '')}`}>
              <img 
                src={src} 
                alt={`${event?.title} - visuel ${gi + 1}`} 
                className={`w-full h-auto object-contain bg-white ${gi === 0 ? 'mx-auto' : ''}`} 
                loading="lazy"
                onError={(e) => {
                  console.error(`Erreur de chargement pour l'image ${gi + 1}:`, src)
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
