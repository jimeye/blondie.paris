import Image from 'next/image'

export default function ReferencesSection() {
  const references = [
    { name: 'TBWA', logo: '/logos/tbwa.png' },
    { name: 'BETC', logo: '/logos/betc.png' },
    { name: 'Havas', logo: '/logos/havas.png' },
    { name: 'AACC', logo: '/logos/aacc.png' },
    { name: 'Club des DA', logo: '/logos/club-da.png' },
    { name: 'Stratégies', logo: '/logos/strategies.png' }
  ]

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-custom-grey">
          RÉFÉRENCES
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {references.map((ref) => (
            <div key={ref.name} className="w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={ref.logo}
                alt={ref.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 