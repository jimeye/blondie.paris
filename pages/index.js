import Head from 'next/head'
import Link from 'next/link'
import {sanityClient} from '../lib/sanity/client'
import {homepageQuery, referencesQuery} from '../lib/sanity/queries'
import Navigation from '../components/Navigation'
import HeroSlider from '../components/HeroSlider'
import ActualitesSlider from '../components/ActualitesSlider'
import Footer from '../components/Footer'
import { logos as allLogos } from '../data/logos'
import { useEffect, useState } from 'react'

export default function Home({cms, refs}) {
  const logos = (refs?.length ? refs : allLogos).sort((a, b) => (a.name || '').localeCompare(b.name || '', 'fr', { sensitivity: 'base' }))
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Configuration des pages pour le swipe
  const pages = [
    { path: '/', name: 'HOME' },
    { path: '/a-propos', name: 'À PROPOS' },
    { path: '/qui-suis-je', name: 'QUI SUIS-JE ?' },
    { path: '/actualites', name: 'ACTUALITÉS' },
    { path: '/references', name: 'REFERENCES' },
    { path: '/events', name: 'EVENTS' },
    { path: '/presse-btob', name: 'REVUE DE PRESSE' },
    { path: '/contact', name: 'CONTACT' }
  ]

  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  // Détecter la page actuelle dynamiquement côté client
  useEffect(() => {
    const getCurrentPageIndex = () => {
      const currentPath = window.location.pathname
      const index = pages.findIndex(page => page.path === currentPath)
      return index >= 0 ? index : 0
    }
    
    const index = getCurrentPageIndex()
    setCurrentPageIndex(index)
    console.log('Pages configurées:', pages.map(p => p.name))
    console.log('Index actuel:', index, 'Page actuelle:', pages[index].name, 'Path actuel:', window.location.pathname)
  }, [])

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])



  // Fonctions pour le swipe
  const onTouchStart = (e) => {
    // Éviter les swipes sur les éléments interactifs
    if (e.target.closest('button, a, input, textarea, select')) return
    
    console.log('Touch start:', e.targetTouches[0].clientX)
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    if (!touchStart) return
    console.log('Touch move:', e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const minSwipeDistance = 80 // Distance minimale réduite
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    console.log('Distance de swipe:', distance, 'minSwipeDistance:', minSwipeDistance)
    console.log('isLeftSwipe:', isLeftSwipe, 'isRightSwipe:', isRightSwipe)

    if (isLeftSwipe) {
      // Swipe gauche - page suivante
      const nextPageIndex = (currentPageIndex + 1) % pages.length
      console.log('Swipe gauche - Index actuel:', currentPageIndex, 'Index suivant:', nextPageIndex)
      console.log('Swipe gauche vers:', pages[nextPageIndex].name, 'Path:', pages[nextPageIndex].path)
      window.location.href = pages[nextPageIndex].path
    } else if (isRightSwipe) {
      // Swipe droite - page précédente
      const prevPageIndex = currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1
      console.log('Swipe droite - Index actuel:', currentPageIndex, 'Index précédent:', prevPageIndex)
      console.log('Swipe droite vers:', pages[prevPageIndex].name, 'Path:', pages[prevPageIndex].path)
      window.location.href = pages[prevPageIndex].path
    }
    
    // Reset
    setTouchStart(null)
    setTouchEnd(null)
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://blondie-paris.vercel.app/' }
    ]
  }

  return (
    <div 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="touch-pan-y"
      style={{ touchAction: 'pan-y', userSelect: 'none' }}
    >
      <Head>
        <title>{cms?.seo?.title || 'Blondie Paris — Relations presse, communication & événements'}</title>
        <meta name="description" content={cms?.seo?.description || "BLONDIE Paris accompagne agences, médias et marques: relations presse, relations publiques, production d'événements. Expertise sur‑mesure, réseau, confidentialité."} />
        <meta name="keywords" content="relations presse, communication, événements, agence, médias, marques, Paris, Arles, Nathalie Roland, bureau relations presse, conseil communication, production événements" />
        <meta name="author" content="BLONDIE Paris - Nathalie Roland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Arles, Paris" />
        <meta name="geo.position" content="43.6769;4.6283" />
        <meta name="ICBM" content="43.6769, 4.6283" />
        
        {/* Open Graph */}
        <meta property="og:title" content={cms?.seo?.title || 'Blondie Paris — Relations presse, communication & événements'} />
        <meta property="og:description" content={cms?.seo?.description || "BLONDIE Paris accompagne agences, médias et marques: relations presse, relations publiques, production d'événements. Expertise sur‑mesure, réseau, confidentialité."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/" />
        <meta property="og:site_name" content="BLONDIE Paris" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://blondie-paris.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="BLONDIE Paris - Bureau de relations presse" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={cms?.seo?.title || 'Blondie Paris — Relations presse, communication & événements'} />
        <meta name="twitter:description" content={cms?.seo?.description || "BLONDIE Paris accompagne agences, médias et marques: relations presse, relations publiques, production d'événements."} />
        <meta name="twitter:image" content="https://blondie-paris.com/logo.png" />
        <meta name="twitter:image:alt" content="BLONDIE Paris - Bureau de relations presse" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://blondie-paris.com/" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BLONDIE Paris",
              "alternateName": "BLONDIE",
              "description": "Bureau de relations presse et communication spécialisé dans les relations publiques, événements et conseil en communication",
              "url": "https://blondie-paris.com",
              "logo": "https://blondie-paris.com/logo.png",
              "image": "https://blondie-paris.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11 RUE DU SAUVAGE",
                "addressLocality": "Arles",
                "postalCode": "13200",
                "addressCountry": "FR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+33-6-09-49-63-29",
                "contactType": "customer service",
                "email": "nathalie@blondie.paris",
                "availableLanguage": "French"
              },
              "founder": {
                "@type": "Person",
                "name": "Nathalie Roland"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 43.6769,
                  "longitude": 4.6283
                },
                "geoRadius": "50000"
              },
              "areaServed": ["FR", "Paris", "Arles"],
              "serviceType": [
                "Relations presse",
                "Relations publiques", 
                "Communication",
                "Événements",
                "Conseil en communication"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/blondie-paris",
                "https://www.instagram.com/blondie.paris"
              ]
            })
          }}
        />
      </Head>

      <main>
        <section className="relative bg-white">
          <Navigation transparent={true} hideHome={true} />
          <HeroSlider />
          
          {/* Section À propos complète */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-4 mt-4">
                <h1 className="text-4xl font-bold text-black mb-4">À propos</h1>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image à gauche - Rideau depuis la gauche */}
                <div className="w-full mt-4 overflow-hidden">
                  <div className="curtain-left">
                    <img
                      src="/nathalie-roland-blondie-paris-a-propos.webp"
                      alt="À propos"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Contenu texte à droite */}
                <div className="space-y-4 mt-4">
                  {/* Titre - caché sur mobile, visible sur desktop */}
                  <div className="hidden md:block">
                                    <h1 className="text-4xl font-bold text-black mb-4">
                  À propos
                </h1>
                    <div className="w-20 h-1 bg-[#FFB6C1]" />
                  </div>
                                        <p className="text-lg text-[#8a8a8a] normal-case">
                        Fondé par Nathalie Roland, Blondie Paris est un bureau de relations presse, relations publiques et production d'événements qui accompagne à l'année ou en one shot les agences de publicité, les sociétés de production, les médias et les marques.
                      </p>
                      <p className="text-lg text-[#8a8a8a] italic normal-case">
                        « Dans un monde ultra connecté, il est primordial d'avoir un.e expert.e à ses côtés pour accompagner et conseiller les marques dans leur communication. Nous faisons du sur-mesure pour nos partenaires, dont l'objectif principal est de développer leur image et les mettre en lumière » déclare Nathalie Roland.
                      </p>
                      <p className="text-lg text-[#8a8a8a] normal-case">
                        Écoute, rigueur, curiosité et observation sont le secret d'une collaboration pérenne et la marque de fabrique de Blondie Paris. Avec une expertise unique, un savoir-faire reconnu, basé à Arles et Paris, le bureau élabore une stratégie de communication sur mesure dans le respect de la plus grande confidentialité, développe et entretient les relations avec la presse française et internationale, et les influenceurs clefs avec pour objectif d'augmenter la visibilité de chaque client. Il s'entoure, depuis sa création, d'un pôle de free-lance très expérimenté, agile et réactif à vos côtés. Blondie Paris c'est avant tout une équipe qui décrypte l'actualité et les tendances d'aujourd'hui.
                      </p>
                      <p className="text-lg text-[#8a8a8a] normal-case">
                        Doté d'une parfaite connaissance et expertise de l'écosystème de la communication, le bureau dispose d'un solide réseau de professionnels et d'une organisation flexible pour accompagner les clients dans tous leurs projets et dispositifs.
                      </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Section Qui suis-je complète */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-4 mt-4">
                <h1 className="text-4xl font-bold text-black mb-4">
                  Rendez-vous chez Blondie Paris
                </h1>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Image à gauche - Rideau depuis la droite */}
                <div className="w-full mt-4 overflow-hidden">
                  <div className="curtain-right-scroll" id="curtain-right-photo">
                    <img
                      src="/nathalie-roland-blondie-paris-qui-suis-je.webp"
                      alt="Qui suis-je"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Contenu texte à droite */}
                <div className="space-y-4 mt-4">
                  {/* Titre - caché sur mobile, visible sur desktop */}
                  <div className="hidden md:block">
                    <h1 className="text-4xl font-bold text-black mb-4">
                      Rendez-vous chez Blondie Paris
                    </h1>
                    <div className="w-20 h-1 bg-[#FFB6C1]" />
                  </div>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    Mon parcours dans la communication s'est façonné au travers de mes rencontres. Plus de 25 ans d'expérience(s) qui m'ont permis d'acquérir une connaissance et une expertise uniques que je mets au service des agences de publicité, sociétés de production, médias et marques.
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    Je me nourris des rencontres et des histoires que chacun porte. Mon écoute et mon sens de l'observation m'ont amené à tisser un réseau privilégié de professionnels. Je transforme les récits de mes clients en messages, leur offrant une mise en lumière toujours sincère et originale, qui fait la part belle au conseil et à la rigueur.
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    Je suis un artisan. Quelle que soit la nature de la mission et des moyens techniques à déployer, le sur-mesure est chez moi de mise. C'est une des raisons qui m'ont poussé, il y a 15 ans, à me lancer en free-lance.
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    En 2019 avec la naissance de Blondie Paris, je crée mon bureau de relations presse, relations publiques et productions d'événements. Au plus près des besoins de mes clients, je pose un diagnostic pour leur proposer les solutions efficaces et innovantes, les retombées qu'ils attendent. Mon rôle est de comprendre leurs enjeux, les accompagner et les conseiller au mieux.
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    J'ai d'abord appris le métier d'acheteuse d'art, puis assuré l'organisation des cérémonies de remises de prix et les opérations de relations publiques du magazine Stratégies. Pour ensuite gérer la communication (interne, externe) de différentes agences de publicité (TBWA Paris, BETC, Havas…) et associations professionnelles (le Club des Directeurs Artistiques et l'AACC, association des Agences-Conseils en communication).
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    Je viens du sud. J'ai mes racines sous le soleil, le bureau à Arles me permet d'être, chaque année, lors des Rencontres de la photographie au plus près de mes clients (vernissages et expositions, relations presse, séminaires…), aidée d'un réseau de qualité que j'ai constitué au fil des ans.
                  </p>
                  <p className="text-lg text-[#8a8a8a] normal-case">
                    Blondie Paris-Arles c'est une équipe curieuse, toujours au fait de ce qu'il faut savoir.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Section Events complète */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Events
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>
              
              {/* Grille des events: 2 colonnes mobile, 4 colonnes desktop + 5ème sur toute la largeur */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                <div className="group bg-transparent overflow-hidden transition">
                  <div className="relative w-full pt-[133%] bg-transparent">
                    <img
                      src="/events/1-pastille+CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp"
                      alt="CAN Paper Gallery"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1 text-left">
                    <p className="text-xs text-[#394140] normal-case">CAN Paper Gallery</p>
                  </div>
                </div>
                
                <div className="group bg-transparent overflow-hidden transition">
                  <div className="relative w-full pt-[133%] bg-transparent">
                    <img
                      src="/events/2-pastille+cda-blondie-paris-blondie.paris-blondieparis.webp"
                      alt="Le Club des Directeurs Artistiques"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1 text-left">
                    <p className="text-xs text-[#394140] normal-case">Le Club des Directeurs Artistiques</p>
                  </div>
                </div>
                
                <div className="group bg-transparent overflow-hidden transition">
                  <div className="relative w-full pt-[133%] bg-transparent">
                    <img
                      src="/events/3-pastille%2Bfast%2Bth%C3%A9o%2Bgosselin-blondie-paris-blondie.paris-blondieparis.webp"
                      alt="FAST – Théo Gosselin"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1 text-left">
                    <p className="text-xs text-[#394140] normal-case">FAST – Théo Gosselin</p>
                  </div>
                </div>
                
                <div className="group bg-transparent overflow-hidden transition">
                  <div className="relative w-full pt-[133%] bg-transparent">
                    <img
                      src="/events/4-pastille%2Bm%C3%A9lanie%2Belbaz%20-blondie-paris-blondie.paris-blondieparis..webp"
                      alt="Mélanie Elbaz"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1 text-left">
                    <p className="text-xs text-[#394140] normal-case">Mélanie Elbaz</p>
                  </div>
                </div>
                
                <div className="group bg-transparent overflow-hidden transition col-span-2 md:col-span-4">
                  <div className="relative w-full pt-[66.5%] bg-transparent">
                    <img
                      src="/events/5-pastille+d+coste+nord+pinus-blondie-paris-blondie.paris-blondieparis.webp"
                      alt="D. Coste – Nord Pinus"
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-1 text-left">
                    <p className="text-xs text-[#394140] normal-case">D. Coste – Nord Pinus</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section Références */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Références
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
                {logos.map((logo, index) => (
                  <a 
                    key={index} 
                    href={logo.url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={logo.name}
                    className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center hover:border-[#FFB6C1] transition-colors"
                  >
                    <img src={logo.src} alt={logo.alt} className="w-full h-20 object-contain" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Section Revue de Presse */}
          <section className="bg-white py-8">
            <div className="container mx-auto px-4">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-black mb-4 uppercase">
                  REVUE DE PRESSE
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/presse-btob" className="bg-white rounded-lg border border-[#FFB6C1] p-8 flex items-center justify-center hover:border-[#FFB6C1] transition-colors">
                  <span className="text-xl font-semibold text-[#394140] text-center uppercase">PRESSE BTOB</span>
                </Link>
                <Link href="/presse-grand-public" className="bg-white rounded-lg border border-[#FFB6C1] p-8 flex items-center justify-center hover:border-[#FFB6C1] transition-colors">
                  <span className="text-xl font-semibold text-[#394140] text-center uppercase">PRESSE GRAND PUBLIC</span>
                </Link>
                <Link href="/tv" className="bg-white rounded-lg border border-[#FFB6C1] p-8 flex items-center justify-center hover:border-[#FFB6C1] transition-colors">
                  <span className="text-xl font-semibold text-[#394140] text-center uppercase">TV</span>
                </Link>
                <Link href="/presse-internationale" className="bg-white rounded-lg border border-[#FFB6C1] p-8 flex items-center justify-center hover:border-[#FFB6C1] transition-colors">
                  <span className="text-xl font-semibold text-[#394140] text-center uppercase">PRESSE INTERNATIONALE</span>
                </Link>
              </div>
            </div>
          </section>

          {/* Section Contact complète */}
          <section className="bg-gradient-to-br from-white to-[#FFB6C1]/5 py-8">
            <div className="ml-5 lg:ml-0">
              <div className="text-center mb-6">
                <h2 className="text-4xl font-bold text-[#394140] mb-4">
                  Contact
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto mb-6" />

              </div>
              
              <div>
                {/* Formulaire de contact */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-[#394140] mb-4 uppercase">
                    Envoyez-nous un message
                  </h3>
                  
                  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="societe" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                          Société
                        </label>
                        <input
                          type="text"
                          id="societe"
                          name="societe"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                          placeholder="Votre société (optionnel)"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                          placeholder="+33 6 12 34 56 78"
                        />
                      </div>
                      <div>
                        <label htmlFor="sujet" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                          Sujet *
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="relations-presse">Relations presse</option>
                          <option value="production-evenements">Production d'événements</option>
                          <option value="conseil">Conseil</option>
                          <option value="demande-devis">Demande de devis</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Décrivez votre projet..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="block w-[30%] mx-auto bg-[#FFB6C1] hover:bg-[#FFB6C1]/80 hover:text-[#394140] text-white font-semibold py-3 px-6 border border-[#394140] rounded-lg transition-all duration-200 uppercase"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Section Newsletter - MASQUÉE TEMPORAIREMENT */}
          {/* 
          <section className="bg-white py-16">
            <div className="px-4 ml-5 lg:ml-0">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#394140] mb-6">
                  Newsletter
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto mb-8" />
                <p className="text-lg text-[#8a8a8a] normal-case max-w-2xl mx-auto leading-relaxed">
                  Restez informé de nos actualités, événements et conseils en relations presse. 
                  Recevez nos insights exclusifs directement dans votre boîte mail.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200 text-[#394140] placeholder-gray-400"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#FFB6C1] hover:bg-[#FFB6C1]/80 hover:text-[#394140] text-white font-semibold py-3 px-8 border border-[#394140] rounded-lg transition-all duration-200 uppercase whitespace-nowrap"
                  >
                    S'abonner
                  </button>
                </form>
                <p className="text-xs text-[#8a8a8a] text-center mt-4 normal-case">
                  En vous abonnant, vous acceptez de recevoir nos newsletters. 
                  Vous pouvez vous désabonner à tout moment.
                </p>
              </div>
            </div>
          </section>
          */}

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

export async function getStaticProps() {
  let cms = null
  let refs = null
  try {
    cms = await sanityClient.fetch(homepageQuery)
    refs = await sanityClient.fetch(referencesQuery)
  } catch (e) {
    // si les variables SANITY ne sont pas définies, on garde les contenus locaux
  }
  return { props: { cms: cms || null, refs: refs || null }, revalidate: 60 }
}