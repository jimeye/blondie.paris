import Head from 'next/head'
import Navigation from '../components/Navigation'
import HeroSlider from '../components/HeroSlider'
import ActualitesSlider from '../components/ActualitesSlider'
import Footer from '../components/Footer'
import { logos as allLogos } from '../data/logos'
import { useEffect, useState } from 'react'

export default function Home() {
  const logos = [...allLogos].sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }))
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://blondie-paris.vercel.app/' }
    ]
  }

  return (
    <div>
      <Head>
        <title>BLONDIE Paris — Relations Presse, Communication & Événements</title>
        <meta name="description" content="BLONDIE Paris accompagne agences, médias et marques: relations presse, relations publiques, production d’événements. Expertise sur‑mesure, réseau, confidentialité." />
        <meta name="keywords" content="relations presse, communication, événements, agence, médias, marques, Paris, Arles, Nathalie Roland" />
        <meta name="author" content="BLONDIE Paris" />
        <meta property="og:title" content="BLONDIE Paris — Relations Presse & Communication" />
        <meta property="og:description" content="Relations presse & RP, production d’événements. Expertise sur‑mesure pour agences, médias et marques." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.vercel.app" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://blondie-paris.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      </Head>

      <main>
        <section className="relative bg-white">
          <Navigation transparent={true} hideHome={true} />
          <HeroSlider />
          
          {/* Section À propos */}
          <section className="bg-white pt-0 md:pt-2 pb-12 md:pb-16">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-6 mt-6">
                <h1 className="text-4xl font-bold text-black mb-4 uppercase">
                  À <span className="text-black">propos</span>
                </h1>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Image à gauche */}
                <div className="w-full mt-8">
                  <img
                    src="/nathalie-roland-blondie-paris-a-propos.webp"
                    alt="À propos"
                    className="w-full h-auto"
                  />
                </div>

                {/* Contenu texte à droite */}
                <div className="space-y-6 mt-8">
                  {/* Titre - caché sur mobile, visible sur desktop */}
                  <div className="hidden md:block">
                    <h1 className="text-4xl font-bold text-black mb-4 uppercase">
                      À <span className="text-black">propos</span>
                    </h1>
                    <div className="w-20 h-1 bg-[#FFB6C1]" />
                  </div>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Fondé par Nathalie Roland, Blondie Paris est un bureau de relations presse, relations publiques et production d'événements qui accompagne à l'année ou en one shot les agences de publicité, les sociétés de production, les médias et les marques.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80 italic">
                    « Dans un monde ultra connecté, il est primordial d'avoir un.e expert.e à ses côtés pour accompagner et conseiller les marques dans leur communication. Nous faisons du sur-mesure pour nos partenaires, dont l'objectif principal est de développer leur image et les mettre en lumière ».
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Écoute, rigueur, curiosité et observation sont le secret d'une collaboration pérenne et la marque de fabrique de Blondie Paris.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section Actualités */}
          <ActualitesSlider />

          {/* Section Références complète */}
          <section className="bg-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-black mb-4 uppercase">
                  Références
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {logos.map((logo, index) => (
                  <div key={index} className="bg-white rounded-none border border-gray-200 p-4 flex items-center justify-center">
                    <img src={logo.src} alt={logo.alt} className="w-full h-20 object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />

          {showBackToTop && (
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-transparent text-[#FFB6C1] rounded-full p-3 md:p-3.5 transition"
            >
              <svg className="w-[23px] h-[23px] md:w-[28px] md:h-[28px]" viewBox="0 0 24 24" fill="none" stroke="#FFB6C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="m5 12 7-7 7 7" />
              </svg>
            </button>
          )}
        </section>
      </main>
    </div>
  )
} 