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

  return (
    <div>
      <Head>
        <title>BLONDIE - Bureau de Relations Presse et Communication</title>
        <meta name="description" content="Blondie Paris, bureau de relations presse, relations publiques et production d'événements. Expertise en communication sur mesure pour agences, médias et marques." />
        <meta name="keywords" content="relations presse, communication, événements, agences publicité, médias, marques, Nathalie Roland, Blondie Paris" />
        <meta name="author" content="Nathalie Roland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="BLONDIE - Bureau de Relations Presse et Communication" />
        <meta property="og:description" content="Blondie Paris, bureau de relations presse, relations publiques et production d'événements. Expertise en communication sur mesure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BLONDIE - Bureau de Relations Presse" />
        <meta name="twitter:description" content="Expertise en relations presse et communication sur mesure" />
        <link rel="canonical" href="https://blondie-paris.com" />
        <link rel="icon" href="/favicon.ico" />
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
                    « Dans un monde ultra connecté, il est primordial d'avoir un.e expert.e à ses côtés pour accompagner et conseiller les marques dans leur communication. Nous faisons du sur-mesure pour nos partenaires, dont l'objectif principal est de développer leur image et les mettre en lumière » déclare Nathalie Roland.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Ecoute, rigueur, curiosité et observation sont le secret d'une collaboration pérenne et la marque de fabrique de Blondie Paris. Avec une expertise unique, un savoir-faire reconnu, basé à Arles et Paris, le bureau élabore une stratégie de communication sur mesure dans le respect de la plus grande confidentialité, développe et entretient les relations avec la presse française et internationale, et les influenceurs clefs avec pour objectif d'augmenter la visibilité de chaque client. Il s'entoure, depuis sa création, d'un pôle de free-lance très expérimenté, agile et réactif à vos côtés. Blondie Paris c'est avant tout une équipe qui décrypte l'actualité et les tendances d'aujourd'hui.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Doté d'une parfaite connaissance et expertise de l'écosystème de la communication, le bureau dispose d'un solide réseau de professionnels et d'une organisation flexible pour accompagner les clients dans tous leurs projets et dispositifs.
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