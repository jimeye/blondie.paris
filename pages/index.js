import Head from 'next/head'
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
        <title>{cms?.seo?.title || 'BLONDIE Paris — Relations Presse, Communication & Événements'}</title>
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
        <meta property="og:title" content={cms?.seo?.title || 'BLONDIE Paris — Relations Presse, Communication & Événements'} />
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
        <meta name="twitter:title" content={cms?.seo?.title || 'BLONDIE Paris — Relations Presse, Communication & Événements'} />
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
          
          {/* Section À propos */}
          <section className="bg-white pt-0 md:pt-2 pb-12 md:pb-16">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-6 mt-6">
                <h1 className="text-4xl font-bold text-black mb-4 uppercase">{cms?.aboutTitle || 'À '}<span className="text-black">propos</span></h1>
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
                  {cms?.aboutText ? (
                    cms.aboutText.map((blk, i) => (
                      <p key={i} className="text-lg text-[#b0b0b0]/80">{/* rendu simplifié */}{blk.children?.map(c=>c.text).join(' ')}</p>
                    ))
                  ) : (
                    <p className="text-lg text-[#b0b0b0]/80">Fondé par Nathalie Roland, Blondie Paris est un bureau de relations presse…</p>
                  )}
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

          {/* Section Qui suis-je */}
          <section className="bg-white pt-0 md:pt-2 pb-12 md:pb-16">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-6 mt-6">
                <h2 className="text-4xl font-bold text-black mb-4 uppercase">
                  Rendez-vous chez <span className="text-black">Blondie Paris-Arles</span>
                </h2>
                <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Image à gauche */}
                <div className="w-full mt-8">
                  <img
                    src="/nathalie-roland-blondie-paris-qui-suis-je.webp"
                    alt="Qui suis-je"
                    className="w-full h-auto"
                  />
                </div>

                {/* Contenu texte à droite */}
                <div className="space-y-6 mt-8">
                  {/* Titre - caché sur mobile, visible sur desktop */}
                  <div className="hidden md:block">
                    <h2 className="text-4xl font-bold text-black mb-4 uppercase">
                      Rendez-vous chez <span className="text-black">Blondie Paris-Arles</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#FFB6C1]" />
                  </div>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Mon parcours dans la communication s'est façonné au travers de mes rencontres. Plus de 25 ans d'expérience(s) qui m'ont permis d'acquérir une connaissance et une expertise uniques que je mets au service des agences de publicité, sociétés de production, médias et marques.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Je me nourris des rencontres et des histoires que chacun porte. Mon écoute et mon sens de l'observation m'ont amené à tisser un réseau privilégié de professionnels. Je transforme les récits de mes clients en messages, leur offrant une mise en lumière toujours sincère et originale, qui fait la part belle au conseil et à la rigueur.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Je suis un artisan. Quelle que soit la nature de la mission et des moyens techniques à déployer, le sur-mesure est chez moi de mise. C'est une des raisons qui m'ont poussé, il y a 15 ans, à me lancer en free-lance.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    En 2019 avec la naissance de Blondie Paris, je crée mon bureau de relations presse, relations publiques et productions d'événements. Au plus près des besoins de mes clients, je pose un diagnostic pour leur proposer les solutions efficaces et innovantes, les retombées qu'ils attendent. Mon rôle est de comprendre leurs enjeux, les accompagner et les conseiller au mieux.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    J'ai d'abord appris le métier d'acheteuse d'art, puis assuré l'organisation des cérémonies de remises de prix et les opérations de relations publiques du magazine Stratégies. Pour ensuite gérer la communication (interne, externe) de différentes agences de publicité (TBWA Paris, BETC, Havas…) et associations professionnelles (le Club des Directeurs Artistiques et l'AACC, association des Agences-Conseils en communication).
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Je viens du sud. J'ai mes racines sous le soleil, le bureau à Arles me permet d'être, chaque année, lors des Rencontres de la photographie au plus près de mes clients (vernissages et expositions, relations presse, séminaires…), aidée d'un réseau de qualité que j'ai constitué au fil des ans.
                  </p>
                  <p className="text-lg text-[#b0b0b0]/80">
                    Blondie Paris-Arles c'est une équipe curieuse, toujours au fait de ce qu'il faut savoir.
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