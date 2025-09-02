import { useMemo, useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'

// Données locales (5 visuels fournis dans /public/events)
const allEvents = [
  {
    title: 'CAN Paper Gallery',
    cover: '/events/1-pastille+CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
    gallery: [
      '/events/1-CAN+PAPER/1-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/2-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/3-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/4-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/5-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/6-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/7-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/8-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/9-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/12-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/10-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/1-CAN+PAPER/11-CAN+PAPER-blondie-paris-blondie.paris-blondieparis.webp',
    ],
  },
  {
    title: 'Le Club des D.A',
    modalTitle: 'Le Club des Directeurs Artistiques Galerie du Club, place Patrat',
    cover: '/events/2-pastille+cda-blondie-paris-blondie.paris-blondieparis.webp',
    gallery: [
      '/events/Le-Club/1-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/2-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/3-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/4-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/5-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/6-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/7-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/8-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/9-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/10-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/11-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/12-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/13-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/14-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/15-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/16-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/17-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Le-Club/18-Le-Club-des-Directeurs-Artistiques-Galerie-du-Club-place-Patrat-blondie-paris-blondie.paris-blondieparis.webp',
    ],
  },
  {
    title: 'FAST – Théo Gosselin',
    modalTitle: 'Théo Gosselin Garage du Nord Pinus',
    cover: '/events/3-pastille-fast-theo-gosselin.webp',
    gallery: [
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/1-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/2-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/4-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/5-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/6-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/7-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/3-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/8-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/9-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/10-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/11-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/12-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/13-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/14-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Théo-Gosselin-Garage-du-Nord-Pinus/15-Théo-Gosselin-Garage-du-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
    ],
  },
  {
    title: 'Mélanie Elbaz',
    modalTitle: 'Mélanie Elbaz Place Paul Doumer',
    cover: '/events/4-pastille-melanie-elbaz.webp',
    gallery: [
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/1-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/2-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/3-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/4-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/5-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/6-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Mélanie-Elbaz-Place-Paul-Doumer/7-Mélanie-Elbaz-Place-Paul-Doumer-blondie-paris-blondie.paris-blondieparis.webp',
    ],
  },
  {
    title: 'D. Coste – Nord Pinus',
    cover: '/events/5-pastille+d+coste+nord+pinus-blondie-paris-blondie.paris-blondieparis.webp',
    gallery: [
      '/events/Dimitri-Coste-Nord-Pinus/1-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/2-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/3-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/4-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/5-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/6-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/7-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
      '/events/Dimitri-Coste-Nord-Pinus/8-Dimitri-Coste-Nord-Pinus-blondie-paris-blondie.paris-blondieparis.webp',
    ],
  },
]

const PAGE_SIZE_DESKTOP = 8 // >4 par page (desktop)
const PAGE_SIZE_MOBILE = 10 // Tous les événements sur une page mobile

export default function Events() {
  const [page, setPage] = useState(1)
  const [openIdx, setOpenIdx] = useState(null) // index événement ouvert (galerie)

  // Détermine une taille de page différente selon la largeur (simple heuristique côté client)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const pageSize = isMobile ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP
  const totalPages = Math.max(1, Math.ceil(allEvents.length / pageSize))
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize
    return allEvents.slice(start, start + pageSize)
  }, [page, pageSize])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIdx(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Fonction pour fermer la modal
  const closeModal = () => setOpenIdx(null)

  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Events - Blondie Paris</title>
        <meta name="description" content="Expositions et vernissages à Arles – sélection BLONDIE Paris." />
        <link rel="canonical" href="https://blondie-paris.vercel.app/events" />
      </Head>

      <main>
        <section className="relative bg-white py-20">
          <Navigation />

          <div className="container mx-auto px-4">
            <div className="mb-6 text-center">
              <h1 className="text-4xl font-bold text-black mb-4">Expositions et vernissages à Arles</h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mt-2 mx-auto"></div>
            </div>

            {/* Grille des events: 2 colonnes mobile et desktop */}
            <div className="grid grid-cols-2 gap-3 md:gap-5">
              {paginated.map((ev, i) => (
                <button
                  key={i}
                  onClick={() => setOpenIdx(((page - 1) * pageSize) + i)}
                  className={`group bg-transparent overflow-hidden transition ${ev.title === 'D. Coste – Nord Pinus' ? 'col-span-2' : ''}`}
                  aria-label={`Ouvrir la galerie ${ev.title}`}
                >
                  <div className={`relative w-full ${ev.title === 'D. Coste – Nord Pinus' ? 'pt-[66.5%]' : 'pt-[133%]'} bg-transparent`}>
                    <img
                      src={ev.cover}
                      alt={ev.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Erreur de chargement pour ${ev.title}:`, ev.cover)
                      }}
                    />
                  </div>
                  <div className={`${ev.title === 'D. Coste – Nord Pinus' ? 'p-2' : 'p-2'} text-left`}>
                    <p className="text-sm text-[#394140] normal-case">{ev.title}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination simple */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3 mt-8">
                <button
                  className="px-3 py-1 border border-[#FFB6C1] text-sm text-[#394140] rounded-lg disabled:opacity-40 hover:bg-[#FFB6C1]/10 transition-colors"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Précédent
                </button>
                <span className="text-sm text-[#394140] normal-case">Page {page} / {totalPages}</span>
                <button
                  className="px-3 py-1 border border-[#FFB6C1] text-sm text-[#394140] rounded-lg disabled:opacity-40 hover:bg-[#FFB6C1]/10 transition-colors"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Suivant
                </button>
              </div>
            )}
          </div>
        </section>

        <FooterNew />
      </main>

      {/* Modal Galerie */}
      {openIdx !== null && openIdx >= 0 && (
        <div
          className="fixed inset-0 bg-black/70 z-[999999] flex items-start justify-center overflow-y-auto p-4"
          onClick={() => setOpenIdx(null)}
          style={{ zIndex: 999999 }}
        >
          <div className="w-full max-w-6xl mx-auto bg-white rounded-none p-2 md:p-3 my-4 overflow-x-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-1 md:px-2 py-2 sticky top-0 bg-white z-[999999]">
              <h2 className="text-lg md:text-xl font-semibold text-black">
                {allEvents[openIdx]?.modalTitle ? (
                  <>
                    <span className="block md:inline">Le Club des Directeurs Artistiques</span>
                    <span className="block md:inline">Galerie du Club, place Patrat</span>
                  </>
                ) : (
                  allEvents[openIdx]?.title
                )}
              </h2>
              <button className="text-[#394140] hover:text-[#FFB6C1]" aria-label="Fermer" onClick={() => setOpenIdx(null)}>
                ✕
              </button>
            </div>
            {/* Grille 2 colonnes mobile et desktop */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 px-1 md:px-2 pb-2">
              {allEvents[openIdx]?.gallery?.map((src, gi) => (
                <div key={gi} className={`${(gi === 0 || gi === 1 || gi === 2 || gi === 3 || gi === 6 || gi === 7 ? 'col-span-2' : '')}`}>
                  <img 
                    src={src} 
                    alt={`${allEvents[openIdx]?.title} - visuel ${gi + 1}`} 
                    className={`w-full h-auto object-contain bg-white ${gi === 0 ? 'mx-auto' : ''}`} 
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Erreur de chargement pour l'image ${gi + 1}:`, src)
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


