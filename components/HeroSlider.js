import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  '/nathalie-roland-blondie-paris-hero-acceuil.webp',
  '/nathalie-roland-blondie-paris-hero-acceuil-2.webp',
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((p) => (p + 1) % slides.length)
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length)

  // Auto-advance léger sur desktop (facultatif)
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-[85vh] md:h-[95vh] lg:h-[110vh] -mt-16">
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt="Blondie Paris"
              fill
              className="object-cover w-full h-full"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Flèches navigation - fond transparent, flèches roses */}
      {/* {slides.length > 1 && (
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
      )} */}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center" style={{ marginTop: '-33vh' }}>
          <img
            src="/logo.webp"
            alt="Blondie Paris Logo"
            className="w-64 h-auto"
          />
        </div>
      </div>

      <a
        href="https://www.deezer.com/fr/playlist/8889404982?utm_campaign=system-message&utm_content=playlist-8889404982&utm_medium=mobile&utm_source=user_sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-4 bottom-4 md:left-6 md:bottom-6 text-white px-1.5 py-1.5 md:px-2 md:py-1.5 rounded-md backdrop-blur-sm transition flex items-center gap-2"
        aria-label="Écouter la playlist Deezer Blondie Paris-Arles"
      >
        <img
          src="/logo-deezer-playlis-blondie-paris-relation-presse.webp"
          alt="Deezer"
          className="h-5 w-auto md:h-6"
        />
        <span className="text-sm font-medium">My Playlist</span>
      </a>
    </div>
  )
} 