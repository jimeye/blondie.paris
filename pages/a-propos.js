import Image from 'next/image'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

export default function APropos() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>À propos - Blondie Paris | Bureau de relations presse</title>
        <meta name="description" content="Découvrez BLONDIE Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication, événements et accompagnement sur mesure. Basé à Arles." />
        <meta name="keywords" content="à propos, BLONDIE Paris, Nathalie Roland, relations presse, bureau communication, événements, agences publicité, Arles, conseil relations publiques" />
        <meta name="author" content="BLONDIE Paris - Nathalie Roland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Arles" />
        <meta name="geo.position" content="43.6769;4.6283" />
        <meta name="ICBM" content="43.6769, 4.6283" />
        
        {/* Open Graph */}
        <meta property="og:title" content="À propos - Blondie Paris | Bureau de relations presse" />
        <meta property="og:description" content="Découvrez BLONDIE Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication et événements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/a-propos" />
        <meta property="og:site_name" content="BLONDIE Paris" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://blondie-paris.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="À propos BLONDIE Paris - Bureau de relations presse" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos - Blondie Paris | Bureau de relations presse" />
        <meta name="twitter:description" content="Découvrez BLONDIE Paris, bureau de relations presse fondé par Nathalie Roland." />
        <meta name="twitter:image" content="https://blondie-paris.com/logo.png" />
        <meta name="twitter:image:alt" content="À propos BLONDIE Paris - Bureau de relations presse" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://blondie-paris.com/a-propos" />
        
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
              "@type": "AboutPage",
                              "name": "À propos - Blondie Paris",
              "description": "Page à propos de BLONDIE Paris - Bureau de relations presse et communication",
              "url": "https://blondie-paris.com/a-propos",
              "mainEntity": {
                "@type": "Organization",
                "name": "Blondie Paris",
                "description": "Bureau de relations presse et communication fondé par Nathalie Roland",
                "url": "https://blondie-paris.com",
                "founder": {
                  "@type": "Person",
                  "name": "Nathalie Roland",
                  "jobTitle": "Fondatrice",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Blondie Paris"
                  }
                },
                "foundingDate": "2020",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "11 RUE DU SAUVAGE",
                  "addressLocality": "Arles",
                  "postalCode": "13200",
                  "addressCountry": "FR"
                },
                "serviceType": [
                  "Relations presse",
                  "Relations publiques",
                  "Communication",
                  "Événements",
                  "Conseil en communication"
                ]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://blondie-paris.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "À propos",
                    "item": "https://blondie-paris.com/a-propos"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main>
        <section className="bg-white py-20">
          <Navigation />
          <div className="container mx-auto px-4">
            
            {/* Titre de la page */}
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-[#394140] mb-4">À propos</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Image à gauche */}
              <div className="w-full mt-4">
                <img
                  src="/nathalie-roland-blondie-paris-a-propos.webp"
                  alt="À propos"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </div>

              {/* Contenu texte à droite */}
              <div className="space-y-4 mt-4">

                <p className="text-lg text-[#878787] normal-case">
                  Fondé par Nathalie Roland, Blondie Paris est un bureau de relations presse, relations publiques et production d'événements qui accompagne à l'année ou en one shot les agences de publicité, les sociétés de production, les médias et les marques.
                </p>
                <p className="text-lg text-[#878787] italic normal-case">
                  « Dans un monde ultra connecté, il est primordial d'avoir un.e expert.e à ses côtés pour accompagner et conseiller les marques dans leur communication. Nous faisons du sur-mesure pour nos partenaires, dont l'objectif principal est de développer leur image et les mettre en lumière » déclare Nathalie Roland.
                </p>
                <p className="text-lg text-[#878787] normal-case">
                  Écoute, rigueur, curiosité et observation sont le secret d'une collaboration pérenne et la marque de fabrique de Blondie Paris. Avec une expertise unique, un savoir-faire reconnu, basé à Arles et Paris, le bureau élabore une stratégie de communication sur mesure dans le respect de la plus grande confidentialité, développe et entretient les relations avec la presse française et internationale, et les influenceurs clefs avec pour objectif d'augmenter la visibilité de chaque client. Il s'entoure, depuis sa création, d'un pôle de free-lance très expérimenté, agile et réactif à vos côtés. Blondie Paris c'est avant tout une équipe qui décrypte l'actualité et les tendances d'aujourd'hui.
                </p>
                <p className="text-lg text-[#878787] normal-case">
                  Doté d'une parfaite connaissance et expertise de l'écosystème de la communication, le bureau dispose d'un solide réseau de professionnels et d'une organisation flexible pour accompagner les clients dans tous leurs projets et dispositifs.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <FooterNew />
          </div>
        </section>
      </main>
    </div>
  )
} 