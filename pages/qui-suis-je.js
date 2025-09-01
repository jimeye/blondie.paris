import Image from 'next/image'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

export default function QuiSuisJe() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Qui suis-je - Blondie Paris</title>
        <meta name="description" content="Découvrez Blondie Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication, événements et accompagnement sur mesure." />
        <meta name="keywords" content="Blondie Paris, Nathalie Roland, relations presse, bureau communication, événements, agences publicité" />
        <meta name="author" content="Nathalie Roland" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Qui suis-je - Blondie Paris" />
        <meta property="og:description" content="Découvrez Blondie Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication et événements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/qui-suis-je" />
        <meta property="og:image" content="/qui-suis-je.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Qui suis-je - Blondie Paris" />
        <meta name="twitter:description" content="Bureau de relations presse et communication sur mesure" />
        <link rel="canonical" href="https://blondie-paris.com/qui-suis-je" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-white py-20">
          <Navigation />
          <div className="container mx-auto px-4">
            {/* Titre - visible sur mobile, caché sur desktop */}
            <div className="md:hidden text-center mb-4 mt-4">
              <h1 className="text-4xl font-bold text-black mb-4">
                Rendez-vous chez Blondie Paris
              </h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Image à gauche */}
              <div className="w-full mt-4">
                <img
                  src="/nathalie-roland-blondie-paris-qui-suis-je.webp"
                  alt="Qui suis-je"
                  className="w-full h-auto"
                />
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
          
          <div className="mt-8">
            <FooterNew />
          </div>
        </section>
      </main>
    </div>
  )
} 