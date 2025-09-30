import { useState, useEffect, useCallback } from 'react'

export default function GalleryModal({ isOpen, onClose, event, zIndex = 999999 }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState(new Set())

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setCurrentImage(0)
      setIsLoading(true)
      setLoadedImages(new Set())
    }
  }, [isOpen])

  // Navigation au clavier
  const handleKeyDown = useCallback((e) => {
    if (!isOpen || !event?.gallery) return

    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        e.preventDefault()
        setCurrentImage(prev => prev > 0 ? prev - 1 : event.gallery.length - 1)
        break
      case 'ArrowRight':
        e.preventDefault()
        setCurrentImage(prev => prev < event.gallery.length - 1 ? prev + 1 : 0)
        break
      case 'Home':
        e.preventDefault()
        setCurrentImage(0)
        break
      case 'End':
        e.preventDefault()
        setCurrentImage(event.gallery.length - 1)
        break
    }
  }, [isOpen, event, onClose])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown, isOpen])

  // Image loading handler
  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set([...prev, index]))
    if (index === 0) setIsLoading(false)
  }

  // Image error handler
  const handleImageError = (index, src) => {
    console.error(`Erreur de chargement pour l'image ${index + 1}:`, src)
    setLoadedImages(prev => new Set([...prev, index]))
  }

  if (!isOpen || !event) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[999999] flex items-start justify-center overflow-y-auto p-4"
      onClick={onClose}
      style={{ zIndex }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="w-full max-w-6xl mx-auto bg-white rounded-none p-2 md:p-3 my-4 overflow-x-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-1 md:px-2 py-2 sticky top-0 bg-white z-[999999]">
          <h2 id="modal-title" className="text-lg md:text-xl font-semibold text-[#394140]">
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
            className="text-[#394140] hover:text-[#FFB6C1] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFB6C1] rounded" 
            aria-label="Fermer la galerie" 
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        {/* Navigation clavier info */}
        <div className="px-1 md:px-2 py-1 text-xs text-[#878787] border-b">
          <p>Navigation: ← → (images) • Échap (fermer) • Début/Fin (première/dernière)</p>
        </div>
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFB6C1]"></div>
            <span className="ml-2 text-[#878787]">Chargement des images...</span>
          </div>
        )}
        
        {/* Grille optimisée avec lazy loading et compression progressive */}
        <div className="grid grid-cols-2 gap-2 md:gap-3 px-1 md:px-2 pb-2">
          {event?.gallery?.map((src, gi) => {
            const isLoaded = loadedImages.has(gi)
            const isSpecial = gi === 0 || gi === 1 || gi === 2 || gi === 3 || gi === 6 || gi === 7
            
            return (
              <div 
                key={gi} 
                className={`relative ${isSpecial ? 'col-span-2' : ''} group`}
                style={{ aspectRatio: isSpecial ? '16/9' : '4/5' }}
              >
                {/* Placeholder de chargement */}
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-[#FFB6C1] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                
                {/* Image avec lazy loading et compression progressive */}
                <img 
                  src={src} 
                  alt={`${event?.title} - visuel ${gi + 1}`} 
                  className={`w-full h-full object-cover bg-white transition-opacity duration-300 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  } ${gi === 0 ? 'mx-auto' : ''}`}
                  loading={gi < 4 ? "eager" : "lazy"} // Premier 4 images en eager loading
                  decoding="async"
                  onLoad={() => handleImageLoad(gi)}
                  onError={() => handleImageError(gi, src)}
                  style={{
                    filter: isLoaded ? 'none' : 'blur(5px)',
                    transform: isLoaded ? 'scale(1)' : 'scale(1.1)'
                  }}
                />
                
                {/* Overlay d'information */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                    {gi + 1} / {event.gallery.length}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Navigation thumbnails pour les grandes galeries */}
        {event?.gallery?.length > 8 && (
          <div className="px-1 md:px-2 py-2 border-t">
            <div className="flex space-x-2 overflow-x-auto">
              {event.gallery.slice(0, 12).map((src, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-colors ${
                    index === currentImage ? 'border-[#FFB6C1]' : 'border-transparent hover:border-gray-300'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Aller à l'image ${index + 1}`}
                >
                  <img 
                    src={src} 
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
