import { useMemo } from 'react'
import EventCard from './EventCard'

export default function EventsGrid({ 
  events, 
  onOpenModal, 
  page = 1, 
  pageSize = 4,
  showPagination = true,
  onPageChange 
}) {
  // Calcul de la pagination
  const { paginated, totalPages, startIndex } = useMemo(() => {
    if (!showPagination) {
      // Si pas de pagination, afficher tous les événements
      return {
        paginated: events,
        totalPages: 1,
        startIndex: 0
      }
    }
    
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginated = events.slice(start, end)
    const totalPages = Math.ceil(events.length / pageSize)
    
    return {
      paginated,
      totalPages,
      startIndex: start
    }
  }, [events, page, pageSize, showPagination])

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Grille des events: 2 colonnes mobile, 4 colonnes desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {paginated.map((event, i) => (
            <EventCard
              key={i}
              event={event}
              index={startIndex + i}
              onOpenModal={onOpenModal}
              isSpecial={event.title === 'D. Coste – Nord Pinus'}
            />
          ))}
        </div>

        {/* Pagination */}
        {showPagination && totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              className="px-4 py-2 bg-[#FFB6C1] text-white rounded hover:bg-[#FFB6C1]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => onPageChange(page - 1)}
              disabled={page === 1}
            >
              Précédent
            </button>
            
            <span className="text-[#394140] font-medium">
              Page {page} sur {totalPages}
            </span>
            
            <button
              className="px-4 py-2 bg-[#FFB6C1] text-white rounded hover:bg-[#FFB6C1]/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => onPageChange(page + 1)}
              disabled={page === totalPages}
            >
              Suivant
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
