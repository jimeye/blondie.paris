import Image from 'next/image'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function APropos() {
  return (
    <div>
      <Head>
        <title>À propos - BLONDIE Paris</title>
        <meta name="description" content="Découvrez Blondie Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication, événements et accompagnement sur mesure." />
        <meta name="keywords" content="Blondie Paris, Nathalie Roland, relations presse, bureau communication, événements, agences publicité" />
        <meta name="author" content="Nathalie Roland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="À propos - BLONDIE Paris" />
        <meta property="og:description" content="Découvrez Blondie Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication et événements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/a-propos" />
        <meta property="og:image" content="/apropos.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos - BLONDIE Paris" />
        <meta name="twitter:description" content="Bureau de relations presse et communication sur mesure" />
        <link rel="canonical" href="https://blondie-paris.com/a-propos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white py-20">
          <Navigation />
          <div className="container mx-auto px-4">
            {/* Titre - visible sur mobile, caché sur desktop */}
            <div className="md:hidden text-center mb-4 mt-8">
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
          <div className="mt-8">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  )
} 