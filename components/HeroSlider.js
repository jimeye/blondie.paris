import Image from 'next/image'

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[110vh] md:h-[110vh] -mt-16">
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
      <a
        href="https://www.deezer.com/fr/playlist/8889404982?utm_campaign=system-message&utm_content=playlist-8889404982&utm_medium=mobile&utm_source=user_sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-4 bottom-4 md:left-6 md:bottom-6 bg-black/40 hover:bg-black/60 text-white px-1.5 py-1.5 md:px-2 md:py-1.5 rounded-md backdrop-blur-sm transition flex items-center"
        aria-label="Écouter la playlist Deezer Blondie Paris-Arles"
      >
        <img
          src="/logo-deezer-playlis-blondie-paris-relation-presse.webp"
          alt="Deezer"
          className="h-5 w-auto md:h-6"
        />
        <span className="sr-only">Écouter la playlist</span>
      </a>
    </div>
  )
} 