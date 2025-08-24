import { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

// Données des images Presse BtoB avec noms descriptifs
const presseBtoBImages = [
  {
    id: 1,
    src: '/events/Presse-BtoB/1-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-gobertet-degove-wanda.webp',
    title: 'CB News - GOBERTET DEGOVE WANDA'
  },
  {
    id: 2,
    src: '/events/Presse-BtoB/2-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-juin-animals.webp',
    title: 'CB News Juin Animals'
  },
  {
    id: 3,
    src: '/events/Presse-BtoB/3-presse-btob-blondie-paris-blondie.paris-blondieparis-animals-cb-news.webp',
    title: 'Animals - CB News'
  },
  {
    id: 4,
    src: '/events/Presse-BtoB/4-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-luxe-artbridge.webp',
    title: 'CB News Luxe ArtBridge'
  },
  {
    id: 5,
    src: '/events/Presse-BtoB/5-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-luxe-f-bellisson-publicis-133.webp',
    title: 'CB News Luxe F.Bellisson Publicis 133'
  },
  {
    id: 6,
    src: '/events/Presse-BtoB/6-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-luxe-publicis-133-publicis-et-nous.webp',
    title: 'CB News Luxe Publicis 133 & Publicis Et Nous'
  },
  {
    id: 7,
    src: '/events/Presse-BtoB/7-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-luxe-publicis-luxe.webp',
    title: 'CB News Luxe Publicis Luxe'
  },
  {
    id: 8,
    src: '/events/Presse-BtoB/8-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-n-oct-marcel-5-ans-ch-p-2.webp',
    title: 'CB News N° Oct - Marcel 5 Ans Ch&P - 2'
  },
  {
    id: 9,
    src: '/events/Presse-BtoB/9-presse-btob-blondie-paris-blondie.paris-blondieparis-strate-gies-n-12-11-15-5-marcel-5-ans-ch-p.webp',
    title: 'Stratégies N° 12_11_15 5 - Marcel 5 Ans Ch&P'
  },
  {
    id: 10,
    src: '/events/Presse-BtoB/10-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-n-oct-marcel-5-ans-ch-p.webp',
    title: 'CB News N° Oct - Marcel 5 Ans Ch&P'
  },
  {
    id: 11,
    src: '/events/Presse-BtoB/11-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-lveb.webp',
    title: 'STRATÉGIES LVEB'
  },
  {
    id: 12,
    src: '/events/Presse-BtoB/12-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-romance.webp',
    title: 'CB News Romance'
  },
  {
    id: 13,
    src: '/events/Presse-BtoB/13-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-vernissage-d-coste-x-fast.webp',
    title: 'CB News Vernissage D. Coste x Fast'
  },
  {
    id: 14,
    src: '/events/Presse-BtoB/14-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-romance.webp',
    title: 'STRATÉGIES Romance'
  },
  {
    id: 15,
    src: '/events/Presse-BtoB/15-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-vernissage-fast.webp',
    title: 'CB News Vernissage FAST'
  },
  {
    id: 16,
    src: '/events/Presse-BtoB/16-presse-btob-blondie-paris-blondie.paris-blondieparis-degove-gobert-strat-wanda.webp',
    title: 'DEGOVE GOBERT STRAT WANDA'
  },
  {
    id: 17,
    src: '/events/Presse-BtoB/17-presse-btob-blondie-paris-blondie.paris-blondieparis-influencia-midiscom-5-11-p1-copie.webp',
    title: 'Influencia Midiscom 5_11 P1'
  },
  {
    id: 18,
    src: '/events/Presse-BtoB/18-presse-btob-blondie-paris-blondie.paris-blondieparis-influencia-midiscom-5-11-p2-copie.webp',
    title: 'Influencia Midiscom 5_11 P2'
  },
  {
    id: 19,
    src: '/events/Presse-BtoB/19-presse-btob-blondie-paris-blondie.paris-blondieparis-syneido-strate-gies.webp',
    title: 'Syneido - STRATÉGIES'
  },
  {
    id: 20,
    src: '/events/Presse-BtoB/20-presse-btob-blondie-paris-blondie.paris-blondieparis-strate-gies-intermarche-romance.webp',
    title: 'Stratégies - Intermarché & Romance'
  },
  {
    id: 21,
    src: '/events/Presse-BtoB/21-presse-btob-blondie-paris-blondie.paris-blondieparis-birth-strate-gies.webp',
    title: 'Birth - Stratégies'
  },
  {
    id: 22,
    src: '/events/Presse-BtoB/22-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-artbridge.webp',
    title: 'STRATÉGIES ArtBridge'
  },
  {
    id: 23,
    src: '/events/Presse-BtoB/23-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-chgp-jpg.webp',
    title: 'STRATÉGIES ChGP'
  },
  {
    id: 24,
    src: '/events/Presse-BtoB/24-presse-btob-blondie-paris-blondie.paris-blondieparis-strate-gies-la-vie-des-budget-atol-copie.webp',
    title: 'Stratégies La Vie Des Budget Atol'
  },
  {
    id: 25,
    src: '/events/Presse-BtoB/25-presse-btob-blondie-paris-blondie.paris-blondieparis-steve-strate-gies.webp',
    title: 'Steve - STRATÉGIES'
  },
  {
    id: 26,
    src: '/events/Presse-BtoB/26-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-midiscom.webp',
    title: 'STRATÉGIES Midiscom'
  },
  {
    id: 27,
    src: '/events/Presse-BtoB/27-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-publicis-luxe-planning.webp',
    title: 'STRATÉGIES PUBLICIS LUXE PLANNING'
  },
  {
    id: 28,
    src: '/events/Presse-BtoB/28-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-publicis-luxe.webp',
    title: 'STRATÉGIES PUBLICIS LUXE'
  },
  {
    id: 29,
    src: '/events/Presse-BtoB/29-presse-btob-blondie-paris-blondie.paris-blondieparis-change-strate-gies.webp',
    title: 'Change - STRATÉGIES'
  },
  {
    id: 30,
    src: '/events/Presse-BtoB/30-presse-btob-blondie-paris-blondie.paris-blondieparis-strategies-saga-dim-publicis-luxe.webp',
    title: 'STRATÉGIES SAGA DIM PUBLICIS LUXE'
  },
  {
    id: 31,
    src: '/events/Presse-BtoB/31-presse-btob-blondie-paris-blondie.paris-blondieparis-midiscom-cb-news.webp',
    title: 'Midiscom - CB News'
  },
  {
    id: 32,
    src: '/events/Presse-BtoB/32-presse-btob-blondie-paris-blondie.paris-blondieparis-birth-strate-gies.webp',
    title: 'Birth - Stratégies'
  },
  {
    id: 33,
    src: '/events/Presse-BtoB/33-presse-btob-blondie-paris-blondie.paris-blondieparis-cb-news-luxe-de-c-20-dp-prod-agences.webp',
    title: 'CB News Luxe Déc 20 DP Prod Agences'
  },
  {
    id: 34,
    src: '/events/Presse-BtoB/34-presse-btob-blondie-paris-blondie.paris-blondieparis-elsa-rakotoson-de-frenzy-strate-gies.webp',
    title: 'Elsa Rakotoson de Frenzy - STRATÉGIES'
  },
  {
    id: 35,
    src: '/events/Presse-BtoB/35-presse-btob-blondie-paris-blondie.paris-blondieparis-birth-strate-gies.webp',
    title: 'Birth - Stratégies'
  },
  {
    id: 36,
    src: '/events/Presse-BtoB/36-presse-btob-blondie-paris-blondie.paris-blondieparis-birth-strate-gies-suite.webp',
    title: 'Birth - Stratégies suite'
  }
]

export default function PresseBtoB() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCarousel = (index) => {
    setSelectedImage(presseBtoBImages[index])
    setCurrentIndex(index)
  }

  const closeCarousel = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % presseBtoBImages.length
    setCurrentIndex(nextIndex)
    setSelectedImage(presseBtoBImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentIndex === 0 ? presseBtoBImages.length - 1 : currentIndex - 1
    setCurrentIndex(prevIndex)
    setSelectedImage(presseBtoBImages[prevIndex])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeCarousel()
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex={0}>
      <Head>
        <title>Presse BtoB - BLONDIE Paris</title>
        <meta name="description" content="Revue de presse BtoB – sélection BLONDIE Paris." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/presse-btob" />
      </Head>

      <main>
        <section className="relative bg-white pt-20 md:pt-24 pb-12 md:pb-16">
          <Navigation />

          <div className="container mx-auto px-4">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-black uppercase">Presse BtoB</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            {/* Grille des images: 2 colonnes mobile, 4 colonnes desktop */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {presseBtoBImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => openCarousel(index)}
                  className="group bg-white rounded-none border border-gray-200 overflow-hidden hover:shadow-md transition"
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

        <Footer />
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
                <p className="text-xs md:text-base opacity-75 mt-1">{currentIndex + 1} / {presseBtoBImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
