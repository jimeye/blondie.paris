import Head from 'next/head'
import Navigation from '../components/Navigation'
import HeroSlider from '../components/HeroSlider'
import ActualitesSlider from '../components/ActualitesSlider'
import Footer from '../components/Footer'

export default function Home() {
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
        <section className="relative bg-white pt-20 md:pt-24">
          <Navigation transparent={true} hideHome={true} />
          <HeroSlider />
          
          {/* Section À propos */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-4 mt-8">
                <h1 className="text-4xl font-bold text-black mb-4">
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
                    <h1 className="text-4xl font-bold text-black mb-4">
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

          {/* Section Qui suis-je */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-4">
              {/* Titre - visible sur mobile, caché sur desktop */}
              <div className="md:hidden text-center mb-4 mt-8">
                <h1 className="text-4xl font-bold text-black mb-4">
                  Rendez-vous chez <span className="text-black">Blondie Paris-Arles</span>
                </h1>
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
                    <h1 className="text-4xl font-bold text-black mb-4">
                      Rendez-vous chez <span className="text-black">Blondie Paris-Arles</span>
                    </h1>
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

          <Footer />
        </section>
      </main>
    </div>
  )
} 