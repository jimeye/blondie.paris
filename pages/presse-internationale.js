import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

// Données des images Presse Internationale avec noms descriptifs
const presseInternationaleImages = [
  {
    id: 1,
    src: '/presse_internationale_images_webp/001-presse-internationale-blondie-paris-blondie.paris-blondieparis-ad-ruby-resti-du-coeur.webp',
    title: 'Ad Ruby Resti Du Coeur'
  },
  {
    id: 2,
    src: '/presse_internationale_images_webp/002-presse-internationale-blondie-paris-blondie.paris-blondieparis-adobo-cite-s.webp',
    title: 'Adobo Cite S'
  },
  {
    id: 3,
    src: '/presse_internationale_images_webp/003-presse-internationale-blondie-paris-blondie.paris-blondieparis-ads-of-brands-Birth.webp',
    title: 'Ads Of Brands Birth'
  },
  {
    id: 4,
    src: '/presse_internationale_images_webp/004-presse-internationale-blondie-paris-blondie.paris-blondieparis-ads-of-the-world-abbe-pierre.webp',
    title: 'Ads Of The World Abbe Pierre'
  },
  {
    id: 5,
    src: '/presse_internationale_images_webp/005-presse-internationale-blondie-paris-blondie.paris-blondieparis-ads-of-the-world-cite-s.webp',
    title: 'Ads Of The World Cite S'
  },
  {
    id: 6,
    src: '/presse_internationale_images_webp/006-presse-internationale-blondie-paris-blondie.paris-blondieparis-lbb-birth.webp',
    title: 'LBB Birth'
  },
  {
    id: 7,
    src: '/presse_internationale_images_webp/007-presse-internationale-blondie-paris-blondie.paris-blondieparis-lbb-birth.webp',
    title: 'LBB Birth'
  },
  {
    id: 8,
    src: '/presse_internationale_images_webp/008-presse-internationale-blondie-paris-blondie.paris-blondieparis-lbb-frenzy.webp',
    title: 'LBB Frenzy'
  },
  {
    id: 9,
    src: '/presse_internationale_images_webp/009-presse-internationale-blondie-paris-blondie.paris-blondieparis-lbb-Pia-anderson.webp',
    title: 'LBB Pia Anderson'
  },
  {
    id: 10,
    src: '/presse_internationale_images_webp/010-presse-internationale-blondie-paris-blondie.paris-blondieparis-more-aboute-ad-herezie.webp',
    title: 'More Aboute Ad Herezie'
  },
  {
    id: 11,
    src: '/presse_internationale_images_webp/011-presse-internationale-blondie-paris-blondie.paris-blondieparis-muse-birth.webp',
    title: 'Muse Birth'
  },
  {
    id: 12,
    src: '/presse_internationale_images_webp/012-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-restos-du-coeur.webp',
    title: 'Shots Restos Du Coeur'
  },
  {
    id: 13,
    src: '/presse_internationale_images_webp/013-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-5G.webp',
    title: 'Shots 5G'
  },
  {
    id: 14,
    src: '/presse_internationale_images_webp/014-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-abbe-pierre.webp',
    title: 'Shots Abbe Pierre'
  },
  {
    id: 15,
    src: '/presse_internationale_images_webp/015-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-birh.webp',
    title: 'Shots Birh'
  },
  {
    id: 16,
    src: '/presse_internationale_images_webp/016-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-birth.webp',
    title: 'Shots Birth'
  },
  {
    id: 17,
    src: '/presse_internationale_images_webp/017-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-christopher-anderson.webp',
    title: 'Shots Christopher Anderson'
  },
  {
    id: 18,
    src: '/presse_internationale_images_webp/018-presse-internationale-blondie-paris-blondie.paris-blondieparis-shots-hermes-birth.webp',
    title: 'Shots Hermes Birth'
  },
  {
    id: 19,
    src: '/presse_internationale_images_webp/019-presse-internationale-blondie-paris-blondie.paris-blondieparis-the-stable-abbe-pierre.webp',
    title: 'The Stable Abbe Pierre'
  },
  {
    id: 20,
    src: '/presse_internationale_images_webp/020-presse-internationale-blondie-paris-blondie.paris-blondieparis-we-love-ad-abbe-pierre.webp',
    title: 'We Love Ad Abbe Pierre'
  },
  {
    id: 21,
    src: '/presse_internationale_images_webp/021-presse-internationale-blondie-paris-blondie.paris-blondieparis-Screenshot-2021-04-13-French-Grocer-s-New-Ad-Looks-to-a-Time-After-Coronavirus-1-.webp',
    title: 'French Grocer New Ad Looks To A Time After Coronavirus'
  }
]

export default function PresseInternationale() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index) => {
    setSelectedImage(presseInternationaleImages[index])
    setCurrentIndex(index)
  }

  const closeCarousel = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % presseInternationaleImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(presseInternationaleImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? presseInternationaleImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(presseInternationaleImages[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeCarousel()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0} className="overflow-x-hidden">
      <Head>
        <title>Presse internationale - Blondie Paris</title>
        <meta name="description" content="Revue de presse Internationale – sélection BLONDIE Paris." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/presse-internationale" />
      </Head>

      <main>
        <section className="relative bg-white py-20">
          <Navigation />

          <div className="container mx-auto px-4">
            
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-black">Presse internationale</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            {/* Grille des images: 2 colonnes mobile, 4 colonnes desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {presseInternationaleImages.map((image, index) => (
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
                <p className="text-xs md:text-base opacity-75 mt-1">{currentIndex + 1} / {presseInternationaleImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
