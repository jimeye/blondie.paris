import { useState, useEffect } from 'react'

const slides = [
  { image: '/nathalie-roland-blondie-paris-hero-actualites-1.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-2.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-3.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-4.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-5.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-6.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-7.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-8.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-9.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-10.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-11.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-12.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-13.webp' },
  { image: '/nathalie-roland-blondie-paris-hero-actualites-14.webp' },
]

export default function ActualitesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change de slide toutes les 5 secondes

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative bg-white py-8 md:py-20">
      <div className="container mx-auto px-4">
        {/* Titre de la section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">
            Nos <span className="text-black">actualités</span>
          </h2>
          <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
        </div>

        {/* Slider */}
        <div className="relative h-[calc(100vh-8rem)] md:h-[calc(100vh-12rem)] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`Actualité ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-[#FFB6C1] transition-colors z-10"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-[#FFB6C1] transition-colors z-10"
          >
            <svg className="w-6 h-6 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
} 