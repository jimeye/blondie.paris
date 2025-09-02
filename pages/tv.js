import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

// Données des images TV avec noms descriptifs
const tvImages = [
  {
    id: 1,
    src: '/events/TV/002-tv-blondie-paris-blondie.paris-blondieparis-STEVE-BSMART.webp',
    title: 'STEVE BSMART'
  },
  {
    id: 2,
    src: '/events/TV/003-tv-blondie-paris-blondie.paris-blondieparis-STEVE-France-2,-Télématin.webp',
    title: 'STEVE France 2, Télématin'
  },
  {
    id: 3,
    src: '/events/TV/004-tv-blondie-paris-blondie.paris-blondieparis-B-Smart-Emergency-Bikes.webp',
    title: 'B Smart Emergency Bikes'
  },
  {
    id: 4,
    src: '/events/TV/005-tv-blondie-paris-blondie.paris-blondieparis-BFM-Business-Romance.webp',
    title: 'BFM Business Romance'
  },
  {
    id: 5,
    src: '/events/TV/006-tv-blondie-paris-blondie.paris-blondieparis-BFM-business-Intermarche-jpeg.webp',
    title: 'BFM Business Intermarche'
  },
  {
    id: 6,
    src: '/events/TV/007-tv-blondie-paris-blondie.paris-blondieparis-BFM-Business-A-vos-marques-MARCEL.webp',
    title: 'BFM Business A vos marques MARCEL'
  },
  {
    id: 7,
    src: '/events/TV/008-tv-blondie-paris-blondie.paris-blondieparis-BFM-BUSINESS-Hebdo-Com-Romance.webp',
    title: 'BFM BUSINESS Hebdo Com Romance'
  },
  {
    id: 8,
    src: '/events/TV/009-tv-blondie-paris-blondie.paris-blondieparis-BFM-Business-Hebdo-Com-Romance.webp',
    title: 'BFM Business Hebdo Com Romance'
  },
  {
    id: 9,
    src: '/events/TV/010-tv-blondie-paris-blondie.paris-blondieparis-BFM-Business-Tech-co-Marcel.webp',
    title: 'BFM Business Tech Co Marcel'
  },
  {
    id: 10,
    src: '/events/TV/011-tv-blondie-paris-blondie.paris-blondieparis-BFM-HEBDO-COM-ANIMALS.webp',
    title: 'BFM HEBDO COM ANIMALS'
  },
  {
    id: 11,
    src: '/events/TV/012-tv-blondie-paris-blondie.paris-blondieparis-bfm-paris-Emergency-Bikes.webp',
    title: 'BFM Paris Emergency Bikes'
  },
  {
    id: 12,
    src: '/events/TV/013-tv-blondie-paris-blondie.paris-blondieparis-bfm-paris-suite-Emergency-Bikes-.webp',
    title: 'BFM Paris Suite Emergency Bikes'
  },
  {
    id: 13,
    src: '/events/TV/014-tv-blondie-paris-blondie.paris-blondieparis-BFM-TV-Intermarche-.webp',
    title: 'BFM TV Intermarche'
  },
  {
    id: 14,
    src: '/events/TV/015-tv-blondie-paris-blondie.paris-blondieparis-C8-WILLIAM-A-MIDI-suite-Addiction-Agency.webp',
    title: 'C8 WILLIAM A MIDI Suite Addiction Agency'
  },
  {
    id: 15,
    src: '/events/TV/016-tv-blondie-paris-blondie.paris-blondieparis-C8-WILLIAM-A-MIDI-Addiction-Agency.webp',
    title: 'C8 WILLIAM A MIDI Addiction Agency'
  },
  {
    id: 16,
    src: '/events/TV/017-tv-blondie-paris-blondie.paris-blondieparis-CANAL-CATHERINE-ET-LILIANE-FAST.webp',
    title: 'CANAL CATHERINE ET LILIANE FAST'
  },
  {
    id: 17,
    src: '/events/TV/018-tv-blondie-paris-blondie.paris-blondieparis-Culture-Pub-10-ans-Oasis-B.Tai-eb.webp',
    title: 'Culture Pub 10 ans Oasis B.Tai'
  },
  {
    id: 18,
    src: '/events/TV/019-tv-blondie-paris-blondie.paris-blondieparis-CULTURE-PUB-Marcel-10-ans-Oasis-B.Tai-eb.2-sept-15.webp',
    title: 'CULTURE PUB Marcel 10 ans Oasis B.Tai'
  },
  {
    id: 19,
    src: '/events/TV/020-tv-blondie-paris-blondie.paris-blondieparis-LCI-en-pleine-forme-Addiction-Agency.webp',
    title: 'LCI En pleine forme Addiction Agency'
  }
]

export default function TV() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index) => {
    setSelectedImage(tvImages[index])
    setCurrentIndex(index)
  }

  const closeCarousel = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % tvImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(tvImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? tvImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(tvImages[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeCarousel()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} className="overflow-x-hidden">
      <Head>
        <title>TV - Blondie Paris</title>
        <meta name="description" content="Revue de presse TV – sélection BLONDIE Paris." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/tv" />
      </Head>

      <main>
        <section className="relative bg-white py-20">
          <Navigation />

          <div className="container mx-auto px-4">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-black">TV</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            {/* Grille des images TV avec format 16/9 */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {tvImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openCarousel(index)}
                  className="group bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-[#FFB6C1]"
                  aria-label={`Ouvrir ${image.title}`}
                >
                  {/* Format 16/9 */}
                  <div className="relative w-full pt-[56.25%] bg-white overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Titre sous l'image */}
                  <div className="p-3 text-left">
                    <p className="text-sm text-[#394140] font-medium leading-tight">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <FooterNew />
      </main>

      {/* Carrousel Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center"
          onClick={closeCarousel}
        >
          <div className="relative w-full max-w-[98vw] mx-auto p-1 md:p-2" onClick={(e) => e.stopPropagation()}>
            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[#FFB6C1] z-10"
              onClick={closeCarousel}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Bouton précédent */}
            <button
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFB6C1] z-10"
              onClick={prevImage}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Bouton suivant */}
            <button
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#FFB6C1] z-10"
              onClick={nextImage}
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain mx-auto"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              
              {/* Titre de l'image */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 md:p-6">
                <h3 className="text-sm md:text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-xs md:text-base opacity-75 mt-1">{currentIndex + 1} / {tvImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
