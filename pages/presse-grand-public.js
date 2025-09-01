import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

// Données des images Presse Grand Public avec noms descriptifs
const presseGrandPublicImages = [
  {
    id: 1,
    src: '/events/Presse%20Grand%20Public/001-presse-grand-public-blondie-paris-blondie.paris-blondieparis-La-Provence-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'La Provence Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 2,
    src: '/events/Presse%20Grand%20Public/002-presse-grand-public-blondie-paris-blondie.paris-blondieparis-La-Provence-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'La Provence Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 3,
    src: '/events/Presse%20Grand%20Public/003-presse-grand-public-blondie-paris-blondie.paris-blondieparis-La-Provence-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'La Provence Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 4,
    src: '/events/Presse%20Grand%20Public/004-presse-grand-public-blondie-paris-blondie.paris-blondieparis-TOUT-MA-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'TOUT MA Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 5,
    src: '/events/Presse%20Grand%20Public/005-presse-grand-public-blondie-paris-blondie.paris-blondieparis-Fréquence-Sud-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'Fréquence Sud Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 6,
    src: '/events/Presse%20Grand%20Public/006-presse-grand-public-blondie-paris-blondie.paris-blondieparis-SUD-VIBES-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'SUD VIBES Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 7,
    src: '/events/Presse%20Grand%20Public/007-presse-grand-public-blondie-paris-blondie.paris-blondieparis-The-Good-Arles-Festival-ÉTÉ-INDIEN(S)-Samsung-Internet.webp',
    title: 'The Good Arles Festival ÉTÉ INDIEN(S) Samsung Internet'
  },
  {
    id: 8,
    src: '/events/Presse%20Grand%20Public/008-presse-grand-public-blondie-paris-blondie.paris-blondieparisRadio-Carmargues-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'Radio Carmargues Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 9,
    src: '/events/Presse%20Grand%20Public/009-presse-grand-public-blondie-paris-blondie.paris-blondieparis-My-Provence-Festival-ÉTÉ-INDIEN(S).webp',
    title: 'My Provence Festival ÉTÉ INDIEN(S)'
  },
  {
    id: 10,
    src: '/events/Presse%20Grand%20Public/010-presse-grand-public-blondie-paris-blondie.paris-blondieparis-Actu-Paris-Emergency-Bikes.webp',
    title: 'Actu Paris Emergency Bikes'
  },
  {
    id: 11,
    src: '/events/Presse%20Grand%20Public/011-presse-grand-public-blondie-paris-blondie.paris-blondieparis-The-Good-life-Marcel.webp',
    title: 'The Good Life Marcel'
  },
  {
    id: 12,
    src: '/events/Presse%20Grand%20Public/012-presse-grand-public-blondie-paris-blondie.paris-blondieparis-APAR.TV-Dimitri-Coste-Fast-.webp',
    title: 'APAR.TV Dimitri Coste Fast'
  },
  {
    id: 13,
    src: '/events/Presse%20Grand%20Public/013-presse-grand-public-blondie-paris-blondie.paris-blondieparis-Biba-Pastis-1212.webp',
    title: 'Biba Pastis 1212'
  },
  {
    id: 14,
    src: '/events/Presse%20Grand%20Public/014-presse-grand-public-blondie-paris-blondie.paris-blondieparis-challenges-Animals.webp',
    title: 'Challenges Animals'
  },
  {
    id: 15,
    src: '/events/Presse%20Grand%20Public/015-presse-grand-public-blondie-paris-blondie.paris-blondieparis-CHALLENGES-Marcel.webp',
    title: 'CHALLENGES Marcel'
  },
  {
    id: 16,
    src: '/events/Presse%20Grand%20Public/016-presse-grand-public-blondie-paris-blondie.paris-blondieparis-Challenges-Soir-M.Delcourt-Intermarche-.webp',
    title: 'Challenges Soir M.Delcourt Intermarche'
  },
  {
    id: 17,
    src: '/events/Presse%20Grand%20Public/017-presse-grand-public-blondie-paris-blondie.paris-blondieparis-Detours-Canal-Emergency-Bikes.webp',
    title: 'Detours Canal Emergency Bikes'
  },
  {
    id: 18,
    src: '/events/Presse%20Grand%20Public/018-presse-grand-public-blondie-paris-blondie.paris-blondieparis-doctissimo-Emergency-Bikes.webp',
    title: 'Doctissimo Emergency Bikes'
  },
  {
    id: 19,
    src: '/events/Presse%20Grand%20Public/019-presse-grand-public-blondie-paris-blondie.paris-blondieparis-DOOLITTLE-FAST.webp',
    title: 'DOOLITTLE FAST'
  },
  {
    id: 20,
    src: '/events/Presse%20Grand%20Public/020-presse-grand-public-blondie-paris-blondie.paris-blondieparis-ELLE-Anne-de-Maupeou-x-Marcel.webp',
    title: 'ELLE Anne de Maupeou x Marcel'
  }
]

export default function PresseGrandPublic() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index) => {
    setSelectedImage(presseGrandPublicImages[index])
    setCurrentIndex(index)
  }

  const closeCarousel = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % presseGrandPublicImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(presseGrandPublicImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? presseGrandPublicImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(presseGrandPublicImages[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeCarousel()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <Head>
        <title>Presse grand public - Blondie Paris</title>
        <meta name="description" content="Revue de presse Grand Public – sélection BLONDIE Paris." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/presse-grand-public" />
      </Head>

      <main>
        <section className="relative bg-white pt-20 md:pt-24 pb-12 md:pb-16">
          <Navigation />

          <div className="container mx-auto px-4">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-black">Presse grand public</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            {/* Grille des images: 2 colonnes mobile, 4 colonnes desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {presseGrandPublicImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openCarousel(index)}
                  className="group bg-white rounded-none border border-[#FFB6C1] overflow-hidden hover:shadow-md transition"
                  aria-label={`Ouvrir ${image.title}`}
                >
                  <div className="relative w-full pt-[133%] bg-white">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-2 text-left">
                    <p className="text-sm text-[#394140]">{image.title}</p>
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
                <p className="text-xs md:text-base opacity-75 mt-1">{currentIndex + 1} / {presseGrandPublicImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
