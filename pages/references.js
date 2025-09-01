import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function References() {

  // Logos organisés par ordre alphabétique
  const logos = [
    { src: "/logos/havas-play.png", alt: "Havas Play", name: "Havas Play", url: "https://www.havasplay.com" },
    { src: "/logos/babel-startégie-&-communication.jpg", alt: "Babel Stratégie & Communication", name: "Babel Stratégie & Communication", url: "https://www.babel-strategie.com" },
    { src: "/logos/aprileproductions.jpg", alt: "Aprile Productions", name: "Aprile Productions", url: "https://www.aprileproductions.com" },
    { src: "/logos/artbridge.png", alt: "Artbridge", name: "Artbridge", url: "https://www.artbridge.fr" },
    { src: "/logos/BIRTH+-+LOGO.jpg", alt: "Birth", name: "Birth", url: "https://www.birth.fr" },
    { src: "/logos/blueparisjpeg.jpeg", alt: "Blue Paris", name: "Blue Paris", url: "https://www.blueparis.com" },
    { src: "/logos/born+to+run.jpg", alt: "Born to Run", name: "Born to Run", url: "https://www.borntorun.fr" },
    { src: "/logos/brand-station-an-FCB-alliance.jpg", alt: "Brand Station an FCB Alliance", name: "Brand Station an FCB Alliance", url: "https://www.brandstation.fr" },
    { src: "/logos/cda.jpg", alt: "CDA", name: "CDA", url: "https://www.clubdirecteursartistiques.fr" },
    { src: "/logos/change.jpg", alt: "Change", name: "Change", url: "https://www.change.fr" },
    { src: "/logos/corbis.png", alt: "Corbis", name: "Corbis", url: "https://www.corbis.com" },
    { src: "/logos/DAGOBERT.png", alt: "Dagobert", name: "Dagobert", url: "https://www.dagobert.fr" },
    { src: "/logos/logo+emergency+bikes.png", alt: "Emergency Bikes", name: "Emergency Bikes", url: "https://www.emergencybikes.com" },
    { src: "/logos/logo+estellon+(1).jpeg", alt: "Estellon", name: "Estellon", url: "https://www.estellon.com" },
    { src: "/logos/LOGOS-FRENZY.png", alt: "Frenzy", name: "Frenzy", url: "https://www.frenzy.fr" },
    { src: "/logos/gang+films.png", alt: "Gang Films", name: "Gang Films", url: "https://www.gangfilms.com" },
    { src: "/logos/grenade&sparks.jpg", alt: "Grenade & Sparks", name: "Grenade & Sparks", url: "https://www.grenadeandsparks.com" },
    { src: "/logos/Logo+HEREZIE.jpg", alt: "HEREZIE", name: "HEREZIE", url: "https://www.herezie.com" },
    { src: "/logos/Logo+Hungry+and+Foolish.png", alt: "Hungry and Foolish", name: "Hungry & Foolish", url: "https://www.hungryandfoolish.com" },
    { src: "/logos/INTERMARCHE.jpg", alt: "Intermarché", name: "Intermarché", url: "https://www.intermarche.com" },
    { src: "/logos/logo-intuit-lab.jpg", alt: "Intuit Lab", name: "Intuit Lab", url: "https://www.intuit-lab.com" },
    { src: "/logos/kind.png", alt: "Kind", name: "Kind", url: "https://www.kind.com" },
    { src: "/logos/La-Pac.png", alt: "La Pac", name: "La Pac", url: "https://www.lapac.fr" },
    { src: "/logos/grace.jpg", alt: "Grace", name: "Grace", url: "https://www.grace.com" },
    { src: "/logos/Logo+Moonlike.png", alt: "Moonlike", name: "Moonlike", url: "https://www.moonlike.com" },
    { src: "/logos/midiscom.png", alt: "Midisc", name: "Midisc", url: "https://www.midisc.com" },
    { src: "/logos/Monks_Logo.jpg", alt: "Monks", name: "Monks", url: "https://www.monks.com" },
    { src: "/logos/logo+oisx.jpg", alt: "OISX", name: "OISX", url: "https://www.oisx.com" },
    { src: "/logos/logo-Ricard.png", alt: "Ricard", name: "Ricard", url: "https://www.ricard.com" },
    { src: "/logos/ROMANCE+-+copie.jpg", alt: "ROMANCE", name: "ROMANCE", url: "https://www.romance.fr" },
    { src: "/logos/logo+standard.png", alt: "Standard", name: "Standard", url: "https://www.standard.fr" },
    { src: "/logos/Logo+SYNEIDO.jpg", alt: "SYNEIDO", name: "SYNEIDO", url: "https://www.syneido.com" },
    { src: "/logos/Steve+Bleu+2021.png", alt: "Steve Bleu", name: "Steve Bleu", url: "https://www.stevebleu.com" },
    { src: "/logos/ubi-bene.jpg", alt: "Ubi Bene", name: "Ubi Bene", url: "https://www.ubibene.com" },
    { src: "/logos/publicis-luxe.jpg", alt: "Publicis Luxe", name: "Publicis Luxe", url: "https://www.publicis-luxe.com" },
    { src: "/logos/orange.png", alt: "Orange", name: "Orange", url: "https://www.orange.com" },
    { src: "/logos/amazon-prime-video.png", alt: "Amazon Prime Video", name: "Amazon Prime Video", url: "https://www.primevideo.com" },
    { src: "/logos/lonely-planet.png", alt: "Lonely Planet", name: "Lonely Planet", url: "https://www.lonelyplanet.com" },
    { src: "/logos/WANDA.jpg", alt: "WANDA", name: "WANDA", url: "https://www.wanda.com" },
    { src: "/logos/altavia-disko.jpg", alt: "Altavia Disko", name: "Altavia Disko", url: "https://www.disko.fr" },
    { src: "/logos/été-indien(s)-arles.jpg", alt: "Été Indien(s) Arles", name: "Été Indien(s) Arles", url: "https://www.eteindien.com" },
    { src: "/logos/Marcel.jpg", alt: "Marcel", name: "Marcel", url: "https://www.marcel.com" }
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
    <div>
      <Head>
        <title>Références - BLONDIE Paris</title>
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
              <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-fade-in uppercase">
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
                        className="coin-face coin-front object-contain" 
                      />
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="coin-face coin-back object-contain" 
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Footer />
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
          padding: 0.5rem;
        }
        .coin-front { transform: rotateY(0deg); }
        .coin-back { transform: rotateY(180deg); filter: grayscale(0.1) contrast(1.05); }
      `}</style>
    </div>
  )
} 