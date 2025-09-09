import { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import FooterNew from '../components/FooterNew'
import GalleryModal from '../components/GalleryModal'
import EventsGrid from '../components/EventsGrid'

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

export default function Events() {
  const [openIdx, setOpenIdx] = useState(null) // index événement ouvert (galerie)

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

            {/* Grille des événements */}
            <EventsGrid
              events={allEvents}
              onOpenModal={(index) => setOpenIdx(index)}
              showPagination={false}
            />
          </div>
        </section>

        <FooterNew />
      </main>

      {/* Modal Galerie */}
      <GalleryModal 
        isOpen={openIdx !== null && openIdx >= 0}
        onClose={() => setOpenIdx(null)}
        event={openIdx !== null ? allEvents[openIdx] : null}
      />
    </div>
  )
}


