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
    ? 'bg-white/40 backdrop-blur-md shadow-none'
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
              <Link href="/" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
                HOME
              </Link>
            )}
            <Link href="/a-propos" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              À PROPOS
            </Link>
            <Link href="/qui-suis-je" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              QUI SUIS-JE ?
            </Link>
            <Link href="/actualites" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              ACTUALITÉS
            </Link>
            <Link href="/references" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              RÉFÉRENCES
            </Link>
            <Link href="/events" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              EVENTS
            </Link>
            
            {/* Menu Presse avec sous-menu */}
            <div className="relative group">
              <button 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase flex items-center text-sm"
                onClick={() => setIsPresseOpen(!isPresseOpen)}
              >
                REVUE DE PRESSE
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Sous-menu Presse */}
              <div className={`absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg py-2 ${isPresseOpen ? 'block' : 'hidden'} group-hover:block`}>
                <Link href="/presse-btob" className="block px-4 py-2 text-[#878787] hover:text-[#FFB6C1] transition-colors">
                  Presse BtoB
                </Link>
                <Link href="/presse-grand-public" className="block px-4 py-2 text-[#878787] hover:text-[#FFB6C1] transition-colors">
                  Presse Grand Public
                </Link>
                <Link href="/tv" className="block px-4 py-2 text-[#878787] hover:text-[#FFB6C1] transition-colors">
                  TV
                </Link>
                <Link href="/presse-internationale" className="block px-4 py-2 text-[#878787] hover:text-[#FFB6C1] transition-colors">
                  Presse Internationale
                </Link>
              </div>
            </div>

            <Link href="/#contact" className="text-[#878787] hover:text-[#FFB6C1] transition-colors uppercase">
              CONTACT
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button 
            className="md:hidden text-[#FFB6C1] menu-font"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden fixed top-0 right-0 w-64 h-screen bg-white/95 backdrop-blur-sm shadow-lg z-50">
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
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
              )}
              <Link 
                href="/a-propos" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À PROPOS
              </Link>
              <Link 
                href="/qui-suis-je" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                QUI SUIS-JE ?
              </Link>
              <Link 
                href="/actualites" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ACTUALITÉS
              </Link>
              <Link 
                href="/references" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                RÉFÉRENCES
              </Link>
              <Link 
                href="/events" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                EVENTS
              </Link>
              
              {/* Sous-menu Presse mobile */}
              <div>
                <button 
                  className="text-[#878787] hover:text-[#FFB6C1] transition-colors w-full text-right"
                  onClick={() => setIsPresseOpen(!isPresseOpen)}
                >
                  REVUE DE PRESSE
                </button>
                {isPresseOpen && (
                  <div className="pr-4 mt-2 space-y-2 text-right">
                    <Link 
                      href="/presse-btob" 
                      className="block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse BtoB
                    </Link>
                    <Link 
                      href="/presse-grand-public" 
                      className="block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse Grand Public
                    </Link>
                    <Link 
                      href="/tv" 
                      className="block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      TV
                    </Link>
                    <Link 
                      href="/presse-internationale" 
                      className="block text-[#878787] hover:text-[#FFB6C1] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Presse Internationale
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                href="/#contact" 
                className="text-[#878787] hover:text-[#FFB6C1] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 