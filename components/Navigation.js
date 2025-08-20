import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from './Logo'

export default function Navigation({ hideLogo = false, centerMenu = false, transparent = false, hideHome = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPresseOpen, setIsPresseOpen] = useState(false)
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

  const navBg = transparent
    ? 'bg-transparent md:bg-white/40 backdrop-blur-0 md:backdrop-blur-md shadow-none'
    : 'bg-white/80 backdrop-blur-sm shadow-sm'

  return (
    <nav className={`fixed top-0 w-full z-50 ${navBg} ${centerMenu ? 'py-4' : 'py-0.25'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex items-center ${centerMenu ? 'justify-center' : 'justify-between'}`}>
          {!hideLogo && (
            <div className={router.pathname === '/' ? (isLogoVisible ? '' : 'invisible') : ''}>
              <Logo />
            </div>
          )}
          
          {/* Menu desktop */}
          <div className={`hidden md:flex menu-font text-sm ${centerMenu ? 'space-x-8' : 'space-x-8'}`}>
            {!hideHome && router.pathname !== '/' && (
              <Link href="/" className="disco-link text-[#878787] uppercase">
                HOME
              </Link>
            )}
            <Link href="/a-propos" className="disco-link text-[#878787] uppercase">
              À PROPOS
            </Link>
            <Link href="/qui-suis-je" className="disco-link text-[#878787] uppercase">
              QUI SUIS-JE ?
            </Link>
            <Link href="/actualites" className="disco-link text-[#878787] uppercase">
              ACTUALITÉS
            </Link>
            <Link href="/references" className="disco-link text-[#878787] uppercase">
              RÉFÉRENCES
            </Link>
            <Link href="/events" className="disco-link text-[#878787] uppercase">
              EVENTS
            </Link>
            
            {/* Menu Presse avec sous-menu */}
            <div className="relative group">
              <button 
                className="disco-link text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase flex items-center text-sm"
                onClick={() => setIsPresseOpen(!isPresseOpen)}
              >
                REVUE DE PRESSE
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Sous-menu Presse */}
              <div className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg py-2 ${isPresseOpen ? 'block' : 'hidden'} group-hover:block`}>
                <Link href="/presse-btob" className="disco-link block px-4 py-2 text-[#878787]">
                  Presse BtoB
                </Link>
                <Link href="/presse-grand-public" className="disco-link block px-4 py-2 text-[#878787]">
                  Presse Grand Public
                </Link>
                <Link href="/tv" className="disco-link block px-4 py-2 text-[#878787]">
                  TV
                </Link>
                <Link href="/presse-internationale" className="disco-link block px-4 py-2 text-[#878787]">
                  Presse Internationale
                </Link>
              </div>
            </div>

            <Link href="/#contact" className="disco-link text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              CONTACT
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-[#FFB6C1] menu-font"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="#FFB6C1" viewBox="0 0 24 24">
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
          <div className="md:hidden fixed top-0 right-0 w-64 h-screen bg-white/70 backdrop-blur-sm shadow-lg z-50">
            <div className="flex flex-col space-y-4 p-6 menu-font text-right text-sm">
              <div className="flex justify-end mb-6">
                <button 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
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
                  className="disco-link text-[#878787] uppercase"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              )}
              <Link 
                href="/a-propos" 
                className="disco-link text-[#878787] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                À PROPOS
              </Link>
              <Link 
                href="/qui-suis-je" 
                className="disco-link text-[#878787] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                QUI SUIS-JE ?
              </Link>
              <Link 
                href="/actualites" 
                className="disco-link text-[#878787] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                ACTUALITÉS
              </Link>
              <Link 
                href="/references" 
                className="disco-link text-[#878787] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                RÉFÉRENCES
              </Link>
              <Link 
                href="/events" 
                className="disco-link text-[#878787] uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              
              {/* Sous-menu Presse mobile */}
              <div>
                <button 
                  className="disco-link text-[#878787] hover:text-[#FFB6C1] transition-colors w-full text-right"
                  onClick={() => setIsPresseOpen(!isPresseOpen)}
                >
                  REVUE DE PRESSE
                </button>
                {isPresseOpen && (
                  <div className="pr-4 mt-2 space-y-2 text-right">
                    <Link 
                      href="/presse-btob" 
                      className="disco-link block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse BtoB
                    </Link>
                    <Link 
                      href="/presse-grand-public" 
                      className="disco-link block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse Grand Public
                    </Link>
                    <Link 
                      href="/tv" 
                      className="disco-link block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      TV
                    </Link>
                    <Link 
                      href="/presse-internationale" 
                      className="disco-link block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse Internationale
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/#contact" 
                className="disco-link text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .disco-link { position: relative; transition: color 0.2s ease-in-out; display: inline-block; }
        .disco-link:hover {
          color: transparent !important;
          -webkit-text-fill-color: transparent;
          background-image:
            linear-gradient(90deg, #ffffff 0%, #ffd1dc 20%, #ffb6c1 40%, #ffd1dc 60%, #ffffff 80%, #ffd1dc 100%),
            radial-gradient(closest-side, rgba(255,255,255,.9), rgba(255,255,255,0));
          background-size: 200% 100%, 8px 8px;
          background-repeat: no-repeat, repeat;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 1.6s linear infinite;
          text-shadow: 0 0 8px rgba(255,182,193,.45), 0 0 16px rgba(255,209,220,.35);
        }
        @keyframes shimmer {
          0% { background-position: 0% 50%, 0 0; }
          100% { background-position: 200% 50%, 8px 8px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .disco-link:hover { animation: none; }
        }
      `}</style>
    </nav>
  )
} 