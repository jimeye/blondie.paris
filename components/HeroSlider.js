import Image from 'next/image'

export default function HeroSlider() {
  return (
    <div className="relative w-full h-screen -mt-16">
      <div className="absolute inset-0">
        <Image
          src="/nathalie-roland-blondie-paris-hero-acceuil.webp"
          alt="Blondie Paris"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
      </div>
              <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" style={{ marginTop: '-33vh' }}>
            <img
              src="/logo.webp"
              alt="Blondie Paris Logo"
              className="w-64 h-auto"
            />
          </div>
        </div>
    </div>
  )
} 