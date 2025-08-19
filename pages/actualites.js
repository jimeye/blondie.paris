import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

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

export default function Actualites() {
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
    <div>
      <Head>
        <title>Actualités - BLONDIE Paris</title>
        <meta name="description" content="Découvrez les dernières actualités et réalisations de Blondie Paris. Relations presse, événements et communication sur mesure." />
        <meta name="keywords" content="actualités Blondie Paris, relations presse, événements, communication, médias, presse" />
        <meta name="author" content="Nathalie Roland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Actualités - BLONDIE Paris" />
        <meta property="og:description" content="Découvrez les dernières actualités et réalisations de Blondie Paris. Relations presse et événements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/actualites" />
        <meta property="og:image" content="/nathalie-roland-blondie-paris-hero-actualites-1.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Actualités - BLONDIE Paris" />
        <meta name="twitter:description" content="Dernières actualités et réalisations" />
        <link rel="canonical" href="https://blondie-paris.com/actualites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Slider */}
        <section className="relative bg-white py-8 md:py-20">
          <Navigation />
          <div className="relative h-[calc(100vh-8rem)] md:h-[calc(100vh-4rem)] overflow-hidden">
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
          <div className="mt-8">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
} 