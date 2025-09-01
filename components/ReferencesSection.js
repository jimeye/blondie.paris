import Image from 'next/image'
import { logos } from '../data/logos'

export default function ReferencesSection() {
  // Utiliser les logos depuis data/logos.js avec les liens
  const references = logos.slice(0, 12) // Prendre les 12 premiers logos pour la home

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-grey">
          Références
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {references.map((ref) => (
            <div key={ref.name} className={`${ref.name === "Été Indien(s) Arles" ? "w-40 h-40" : "w-32 h-32"} relative grayscale hover:grayscale-0 transition-all duration-300`}>
              <a 
                href={ref.url || '#'} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={ref.name}
                className="block w-full h-full"
              >
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 