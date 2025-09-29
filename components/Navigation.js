import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

export default function Header({ 
  hideLogo = false, 
  centerMenu = false, 
  transparent = false, 
  hideHome = false, 
  closeModal = null, 
  hideOnModal = false 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPresseOpen, setIsPresseOpen] = useState(false)
  const [isPresseMobileOpen, setIsPresseMobileOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const router = useRouter()

  const [isLogoVisible, setIsLogoVisible] = useState(true)
  useEffect(() => {
    if (router.pathname !== '/') {
      setIsLogoVisible(true)
      return
    }
    const handleScroll = () => {
      const viewportHeight = window.innerHeight || 0
      const threshold = Math.max(viewportHeight * 0.98, 500)
      setIsLogoVisible(window.scrollY > threshold)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [router.pathname])

  // Gestion de la visibilité du header au scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Toujours visible en haut de page
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas - masquer le header
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scroll vers le haut - afficher le header
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const navBg = transparent
    ? 'bg-transparent md:bg-white/40 backdrop-blur-0 md:backdrop-blur-md shadow-none'
    : 'bg-white/80 border-b border-[#FFB6C1]'

  return (
    <nav className={`fixed top-0 w-full z-[9998] ${navBg} ${centerMenu ? 'py-4' : 'py-0.25'} ${hideOnModal ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'} ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300 ease-in-out`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center ${centerMenu ? 'justify-center' : 'justify-between'}`}>
          {!hideLogo && (
            <div className={router.pathname === '/' ? 'invisible' : ''}>
              <Logo />
            </div>
          )}
          
          {/* Menu desktop */}
          <div className={`hidden lg:flex menu-font text-sm sm:text-sm lg:text-base justify-center ${centerMenu ? 'space-x-1 sm:space-x-2 lg:space-x-4' : 'space-x-1 sm:space-x-2 lg:space-x-4'}`}>
            {!hideHome && router.pathname !== '/' && (
              <Link href="/" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase">
                HOME
              </Link>
            )}
            {router.pathname !== '/a-propos' && (
              <Link href="/a-propos" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase">
                À PROPOS
              </Link>
            )}
            {router.pathname !== '/qui-suis-je' && (
              <Link href="/qui-suis-je" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase">
                QUI SUIS-JE ?
              </Link>
            )}
            {router.pathname !== '/actualites' && (
              <Link href="/actualites" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase">
                ACTUALITÉS
              </Link>
            )}
            {router.pathname !== '/references' && (
              <Link href="/references" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase">
                REFERENCES
              </Link>
            )}
            {router.pathname !== '/events' && (
              <Link href="/events" className="text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase" onClick={closeModal}>
                EVENTS
              </Link>
            )}

            {router.pathname !== '/contact' && (
              <Link href="/contact" className="disco-link text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase text-sm sm:text-sm lg:text-base ">
                CONTACT
              </Link>
            )}
            
            {/* Menu Presse avec sous-menu */}
            <div className="relative group">
              <div className="disco-link text-gray-900 hover:text-[#FFB6C1] transition-colors nav-link uppercase text-sm sm:text-sm lg:text-base cursor-pointer ">
                <span className="inline-flex items-center uppercase">
                  REVUE DE PRESSE
                  <svg className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
              
              {/* Sous-menu Presse */}
              <div className="absolute left-0 mt-1 w-52 bg-black/90 backdrop-blur-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/presse-btob" className="disco-link block px-4 py-0.5 text-[#878787] hover:text-[#FFB6C1]  uppercase text-xs">
                  PRESSE BTOB
                </Link>
                <Link href="/presse-grand-public" className="disco-link block px-4 py-0.5 text-[#878787] hover:text-[#FFB6C1]  uppercase text-xs">
                  PRESSE GRAND PUBLIC
                </Link>
                <Link href="/tv" className="disco-link block px-4 py-0.5 text-[#878787] hover:text-[#FFB6C1]  uppercase text-xs">
                  TV
                </Link>
                <Link href="/presse-internationale" className="disco-link block px-4 py-0.5 text-[#878787] hover:text-[#FFB6C1]  uppercase text-xs">
                  PRESSE INTERNATIONALE
                </Link>
              </div>
            </div>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className={`lg:hidden text-[#FFB6C1] menu-font hover:text-[#878787] transition-colors ml-auto ${isMenuOpen ? 'hidden' : ''} ${router.pathname === '/' ? (isLogoVisible ? 'invisible' : 'block') : 'block'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile overlay */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-80 bg-black/90 backdrop-blur-sm shadow-lg z-[9999] animate-slide-in-left mobile-overlay" style={{ height: 'calc(95vh - 4rem)' }}>
            <div className="flex flex-col space-y-4 p-4 menu-font text-right text-sm">
              <div className="flex justify-end mb-4">
                <button 
                  className="text-[#FFB6C1] hover:text-[#FFB6C1]/80 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {!hideHome && router.pathname !== '/' && (
                <Link 
                  href="/" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              )}
              {router.pathname !== '/a-propos' && (
                <Link 
                  href="/a-propos" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À PROPOS
                </Link>
              )}
              {router.pathname !== '/qui-suis-je' && (
                <Link 
                  href="/qui-suis-je" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  QUI SUIS-JE ?
                </Link>
              )}
              {router.pathname !== '/actualites' && (
                <Link 
                  href="/actualites" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ACTUALITÉS
                </Link>
              )}
              {router.pathname !== '/references' && (
                <Link 
                  href="/references" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  REFERENCES
                </Link>
              )}
              {router.pathname !== '/events' && (
                <Link 
                  href="/events" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => {
                    setIsMenuOpen(false)
                    if (closeModal) closeModal()
                  }}
                >
                  EVENTS
                </Link>
              )}

              {router.pathname !== '/contact' && (
                <Link 
                  href="/contact" 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              )}
              
              {/* Sous-menu Presse mobile simple */}
              <div className="relative group">
                <div 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link w-full text-right cursor-pointer  uppercase flex items-center justify-end"
                  onClick={() => setIsPresseMobileOpen(!isPresseMobileOpen)}
                >
                  REVUE DE PRESSE
                  <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${isPresseMobileOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className={`pr-4 mt-2 space-y-2 text-right transition-all duration-200 ${isPresseMobileOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0 overflow-hidden'}`}>
                  <Link 
                    href="/presse-btob" 
                    className="block text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PRESSE BTOB
                  </Link>
                  <Link 
                    href="/presse-grand-public" 
                    className="block text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PRESSE GRAND PUBLIC
                  </Link>
                  <Link 
                    href="/tv" 
                    className="block text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    TV
                  </Link>
                  <Link 
                    href="/presse-internationale" 
                    className="block text-[#878787] hover:text-[#FFB6C1] transition-colors nav-link  uppercase"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PRESSE INTERNATIONALE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .disco-link { position: relative; transition: color 0.2s ease-in-out; display: inline-block; }
        .disco-link:hover {
          color: #FFB6C1 !important;
          -webkit-text-fill-color: #FFB6C1;
          background-image: none;
          background-clip: initial;
          -webkit-background-clip: initial;
          animation: none;
          text-shadow: none;
        }
        
        /* Effet étoile filante pour le soulignement */
        .nav-link {
          position: relative;
          overflow: hidden;
          display: inline-block;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #FFB6C1 20%, #FFB6C1 80%, transparent 100%);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 1;
        }
        
        .nav-link:hover::after {
          left: 100%;
        }
        
        /* Animation de fermeture plus lente pour l'overlay */
        .mobile-overlay {
          transition: transform 2s ease-in-out;
        }
        .mobile-overlay.closing {
          transform: translateX(-100%);
        }
      `}</style>
    </nav>
  )
}
