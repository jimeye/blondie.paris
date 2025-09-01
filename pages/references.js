import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'
import { useState } from 'react'

export default function References() {

  // Logos organisés par ordre alphabétique
  const logos = [
    { src: "/logos_standardized/havas-play.webp", alt: "Havas Play", name: "Havas Play", url: "https://www.havasplay.com" },
    { src: "/logos_standardized/babel-startégie-&-communication.webp", alt: "Babel Stratégie & Communication", name: "Babel Stratégie & Communication", url: "https://www.babel-strategie.com" },
    { src: "/logos_standardized/aprileproductions.webp", alt: "Aprile Productions", name: "Aprile Productions", url: "https://www.aprileproductions.com" },
    { src: "/logos_standardized/artbridge.webp", alt: "Artbridge", name: "Artbridge", url: "https://www.artbridge.fr" },
    { src: "/logos_standardized/BIRTH+-+LOGO.webp", alt: "Birth", name: "Birth", url: "https://www.birth.fr" },
    { src: "/logos_standardized/blueparisjpeg.webp", alt: "Blue Paris", name: "Blue Paris", url: "https://www.blueparis.com" },
    { src: "/logos_standardized/born+to+run.webp", alt: "Born to Run", name: "Born to Run", url: "http://www.borntorun.fr/index.php" },
    { src: "/logos_standardized/brand-station-an-FCB-alliance.webp", alt: "Brand Station an FCB Alliance", name: "Brand Station an FCB Alliance", url: "https://www.brandstation.fr" },
    { src: "/logos_standardized/cda.webp", alt: "CDA", name: "CDA", url: "https://www.clubdirecteursartistiques.fr" },
    { src: "/logos_standardized/change.webp", alt: "Change", name: "Change", url: "https://www.change.fr" },
    { src: "/logos_standardized/corbis.webp", alt: "Corbis", name: "Corbis", url: "https://www.corbis.com" },
    { src: "/logos_standardized/DAGOBERT.webp", alt: "Dagobert", name: "Dagobert", url: "https://www.dagobert.fr" },
    { src: "/logos_standardized/logo+emergency+bikes.webp", alt: "Emergency Bikes", name: "Emergency Bikes", url: "https://www.emergencybikes.com" },
    { src: "/logos_standardized/logo+estellon+(1).webp", alt: "Estellon", name: "Estellon", url: "https://www.estellon.com" },
    { src: "/logos_standardized/LOGOS-FRENZY.webp", alt: "Frenzy", name: "Frenzy", url: "https://www.frenzy.fr" },
    { src: "/logos_standardized/gang+films.webp", alt: "Gang Films", name: "Gang Films", url: "https://www.gangfilms.com" },
    { src: "/logos_standardized/grenade&sparks.webp", alt: "Grenade & Sparks", name: "Grenade & Sparks", url: "https://www.grenadeandsparks.com" },
    { src: "/logos_standardized/Logo+HEREZIE.webp", alt: "HEREZIE", name: "HEREZIE", url: "https://www.herezie.com" },
    { src: "/logos_standardized/Logo+Hungry+and+Foolish.webp", alt: "Hungry and Foolish", name: "Hungry & Foolish", url: "https://www.hungryandfoolish.com" },
    { src: "/logos_standardized/INTERMARCHE.webp", alt: "Intermarché", name: "Intermarché", url: "https://www.intermarche.com" },
    { src: "/logos_standardized/logo-intuit-lab.webp", alt: "Intuit Lab", name: "Intuit Lab", url: "https://www.intuit-lab.com" },
    { src: "/logos_standardized/kind.webp", alt: "Kind", name: "Kind", url: "https://www.kind.com" },
    { src: "/logos_standardized/La-Pac.webp", alt: "La Pac", name: "La Pac", url: "https://www.lapac.fr" },
    { src: "/logos_standardized/grace.webp", alt: "Grace", name: "Grace", url: "https://www.grace.com" },
    { src: "/logos_standardized/Logo+Moonlike.webp", alt: "Moonlike", name: "Moonlike", url: "https://www.moonlike.com" },
    { src: "/logos_standardized/midiscom.webp", alt: "Midisc", name: "Midisc", url: "https://www.midisc.com" },
    { src: "/logos_standardized/Monks_Logo.webp", alt: "Monks", name: "Monks", url: "https://www.monks.com" },
    { src: "/logos_standardized/logo+oisx.webp", alt: "OISX", name: "OISX", url: "https://www.oisx.com" },
    { src: "/logos_standardized/logo-Ricard.webp", alt: "Ricard", name: "Ricard", url: "https://www.ricard.com" },
    { src: "/logos_standardized/ROMANCE+-+copie.webp", alt: "ROMANCE", name: "ROMANCE", url: "https://www.romance.fr" },
    { src: "/logos_standardized/logo+standard.webp", alt: "Standard", name: "Standard", url: "https://www.standard.fr" },
    { src: "/logos_standardized/Logo+SYNEIDO.webp", alt: "SYNEIDO", name: "SYNEIDO", url: "https://www.syneido.com" },
    { src: "/logos_standardized/Steve+Bleu+2021.webp", alt: "Steve Bleu", name: "Steve Bleu", url: "https://www.steve.paris/" },
    { src: "/logos_standardized/ubi-bene.webp", alt: "Ubi Bene", name: "Ubi Bene", url: "https://www.ubibene.com" },
    { src: "/logos_standardized/publicis-luxe.webp", alt: "Publicis Luxe", name: "Publicis Luxe", url: "https://www.publicis-luxe.com" },
    { src: "/logos_standardized/orange.webp", alt: "Orange", name: "Orange", url: "https://www.orange.com" },
    { src: "/logos_standardized/amazon-prime-video.webp", alt: "Amazon Prime Video", name: "Amazon Prime Video", url: "https://www.primevideo.com" },
    { src: "/logos_standardized/lonely-planet.webp", alt: "Lonely Planet", name: "Lonely Planet", url: "https://www.lonelyplanet.com" },
    { src: "/logos_standardized/WANDA.webp", alt: "WANDA", name: "WANDA", url: "https://www.wanda.com" },
    { src: "/logos_standardized/altavia-disko.webp", alt: "Altavia Disko", name: "Altavia Disko", url: "https://www.disko.fr" },
    { src: "/logos_standardized/été-indien(s)-arles.webp", alt: "Été Indien(s) Arles", name: "Été Indien(s) Arles", url: "https://www.eteindien.com" },
    { src: "/logos_standardized/Marcel.webp", alt: "Marcel", name: "Marcel", url: "https://www.marcel.com" }
  ]

  const breadcrumbsLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://blondie-paris.vercel.app/' },
      { '@type': 'ListItem', position: 2, name: 'Références', item: 'https://blondie-paris.vercel.app/references' }
    ]
  }

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Références - Blondie Paris</title>
        <meta name="description" content="Partenaires et références BLONDIE Paris: agences, médias, marques. Expertise en relations presse et communication." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/references" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      </Head>

      <main>
        <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 py-20">
          <Navigation />
          <div className="container mx-auto px-4">
            {/* Titre avec animation */}
            <div className="hidden">
              <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in">
                Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Références</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-600 mx-auto rounded-full animate-pulse"></div>
              <p className="text-gray-600 mt-6 text-lg">Découvrez nos partenaires de confiance</p>
            </div>

            {/* Grille avec effets modernes - Logos par ordre alphabétique */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...logos]
                .sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }))
                .map((logo, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-none bg-white shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 perspective-1000"
                >
                  <a href={logo.url || '#'} target="_blank" rel="noopener noreferrer" aria-label={logo.name} className="block relative flex items-center justify-center h-40 p-6 cursor-pointer">
                    <div className="flip-coin">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className={`coin-face coin-front object-contain w-full h-full ${logo.name === "Été Indien(s) Arles" ? "max-w-[350px] max-h-[200px] sm:max-w-[385px] sm:max-h-[220px]" : "max-w-[280px] max-h-[160px] sm:max-w-[308px] sm:max-h-[176px]"}`}
                      />
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className={`coin-face coin-back object-contain w-full h-full ${logo.name === "Été Indien(s) Arles" ? "max-w-[350px] max-h-[200px] sm:max-w-[385px] sm:max-h-[220px]" : "max-w-[280px] max-h-[160px] sm:max-w-[308px] sm:max-h-[176px]"}`}
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <FooterNew />
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        @keyframes coin-flip {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(90deg); }
          100% { transform: rotateY(180deg); }
        }
        
        .group:hover .group-hover\:rotate-y-180 {
          animation: coin-flip 0.7s ease-in-out;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .perspective-1000 { perspective: 1000px; }
        .flip-coin {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .group:hover .flip-coin {
          transform: rotateY(360deg) scale(1.05);
        }
        .coin-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          background: white;
        }
        .coin-front { transform: rotateY(0deg); }
        .coin-back { transform: rotateY(180deg); filter: grayscale(0.1) contrast(1.05); }
      `}</style>
    </div>
  )
} 