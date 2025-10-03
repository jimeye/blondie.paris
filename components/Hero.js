import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero({
  slides = [
    '/nathalie-roland-blondie-paris-hero-acceuil.webp',
    '/nathalie-roland-blondie-paris-hero-acceuil-2.webp',
  ],
  showLogo = true,
  logoPath = '/logo.webp',
  logoAlt = 'Blondie Paris Logo',
  logoSize = 'w-64 h-auto',
  logoMarginTop = '-33vh',
  showPlaylist = true,
  playlistUrl = 'https://www.deezer.com/fr/playlist/8889404982?utm_campaign=system-message&utm_content=playlist-8889404982&utm_medium=mobile&utm_source=user_sharing',
  playlistLabel = 'My Playlist',
  playlistIcon = '/logo-deezer-playlis-blondie-paris-relation-presse.webp',
  playlistIconAlt = 'Deezer',
  autoAdvance = true,
  autoAdvanceInterval = 8000,
  showNavigation = false,
  height = 'h-[95vh] h-[100dvh] md:h-[105vh] lg:h-[110vh]',
  marginTop = '-mt-16',
  alt = 'Blondie Paris'
}) {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((p) => (p + 1) % slides.length)
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length)

  // Auto-advance si activé
  useEffect(() => {
    if (!autoAdvance || slides.length <= 1) return
    
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, autoAdvanceInterval)
    
    return () => clearInterval(id)
  }, [autoAdvance, autoAdvanceInterval, slides.length])

  return (
    <div className={`relative w-full ${height} ${marginTop} hero-container`}>
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover w-full h-full"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Navigation flèches - optionnel */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Image précédente"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-transparent p-2 md:p-3"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#FFB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Image suivante"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-transparent p-2 md:p-3"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#FFB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      {/* Logo centré - optionnel */}
      {showLogo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" style={{ marginTop: logoMarginTop }}>
            <img
              src={logoPath}
              alt={logoAlt}
              className={logoSize}
            />
          </div>
        </div>
      )}

      {/* Lien playlist - optionnel */}
      {showPlaylist && (
        <a
          href={playlistUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-4 bottom-4 md:left-6 md:bottom-6 text-white px-1.5 py-1.5 md:px-2 md:py-1.5 rounded-md backdrop-blur-sm transition flex items-center gap-2"
          aria-label={`Écouter la playlist ${playlistLabel}`}
        >
          <img
            src={playlistIcon}
            alt={playlistIconAlt}
            className="h-5 w-auto md:h-6"
          />
          <span className="text-sm font-medium">{playlistLabel}</span>
        </a>
      )}
    </div>
  )
}
