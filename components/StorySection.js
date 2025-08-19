import Image from 'next/image'

export default function StorySection() {
  return (
    <section id="histoire" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image avec effet de survol */}
          <div className="relative overflow-hidden rounded-lg group">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src="https://img.freepik.com/photos-gratuite/ancien-chef-pizzeria-portrait-realiste-du-chef-au-travail-livrant-pizzas-fraiches-i_166373-6607.jpg"
                alt="À propos"
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Contenu texte */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-custom-grey">
              À <span className="text-black">propos</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFB6C1]" />
            <p className="text-lg text-custom-grey/80">
              Fondé par Nathalie Roland, Blondie Paris est un bureau de relations presse, relations publiques et production d'événements qui accompagne à l'année ou en one shot les agences de publicité, les sociétés de production, les médias et les marques.
            </p>
            <p className="text-lg text-custom-grey/80 italic">
              « Dans un monde ultra connecté, il est primordial d'avoir un.e expert.e à ses côtés pour accompagner et conseiller les marques dans leur communication. Nous faisons du sur-mesure pour nos partenaires, dont l'objectif principal est de développer leur image et les mettre en lumière » déclare Nathalie Roland.
            </p>
            <p className="text-lg text-custom-grey/80">
              Ecoute, rigueur, curiosité et observation sont le secret d'une collaboration pérenne et la marque de fabrique de Blondie Paris. Avec une expertise unique, un savoir-faire reconnu, basé à Arles et Paris, le bureau élabore une stratégie de communication sur mesure dans le respect de la plus grande confidentialité, développe et entretient les relations avec la presse française et internationale, et les influenceurs clefs avec pour objectif d'augmenter la visibilité de chaque client. Il s'entoure, depuis sa création, d'un pôle de free-lance très expérimenté, agile et réactif à vos côtés. Blondie Paris c'est avant tout une équipe qui décrypte l'actualité et les tendances d'aujourd'hui.
            </p>
            <p className="text-lg text-custom-grey/80">
              Doté d'une parfaite connaissance et expertise de l'écosystème de la communication, le bureau dispose d'un solide réseau de professionnels et d'une organisation flexible pour accompagner les clients dans tous leurs projets et dispositifs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 