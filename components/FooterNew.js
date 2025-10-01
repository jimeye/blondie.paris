import { useState, useEffect } from 'react'

export default function Footer() {
  const [forceUpdate, setForceUpdate] = useState(0)
  
  useEffect(() => {
    // Force un rechargement du composant
    setForceUpdate(prev => prev + 1)
  }, [])
  
  return (
    <footer key={forceUpdate} className="bg-white text-[#878787] border-t border-[#FFB6C1] menu-font select-text">
      <div className="container mx-auto pt-4 pb-4 md:pb-6 ml-5 lg:ml-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-5">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2 text-[#394140] select-text text-left">
              BLONDIE PARIS
              <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
            </h3>
            {/* Bureau description updated */}
            <p className="text-base normal-case select-text">Bureau de relations presse,</p>
            <p className="text-base normal-case select-text">Relation publiques,</p>
            <p className="text-base normal-case select-text">Événements.</p>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-2 text-[#394140] select-text text-left">
                Contact
                <div className="w-20 h-0.5 bg-[#FFB6C1] mt-2"></div>
              </h3>
              <p className="text-lg normal-case mb-3 font-semibold select-text text-left">Nathalie Roland</p>
              <div className="flex items-center space-x-4 mt-2 mb-2">
                <a href="tel:+33609496329" className="text-[#878787] hover:text-[#FFB6C1] transition-colors" aria-label="Téléphoner">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-.23a2 2 0 0 1 2.11.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/></svg>
                </a>
                <a href="tel:+33609496329" className="text-base text-[#878787] hover:text-[#FFB6C1] transition-colors select-text">+33 (0)6 09 49 63 29</a>
              </div>
              <div className="flex items-center space-x-4 mt-2 mb-2">
                <a href="mailto:nathalie@blondie.paris" className="text-[#878787] hover:text-[#FFB6C1] transition-colors" aria-label="Email">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>
                </a>
                <a href="mailto:nathalie@blondie.paris" className="text-base text-[#878787] hover:text-[#FFB6C1] transition-colors select-text">nathalie@blondie.paris</a>
              </div>
            </div>
            <div className="text-left">
              <p className="text-base normal-case select-text mb-2">© 2025 BLONDIE.PARIS</p>
              <p className="text-base normal-case select-text mb-2">Website design by <a href="tel:+33608251223" className="text-xs uppercase text-[#878787] hover:text-[#FFB6C1] transition-colors select-text">JOSEPH STUDIO CREATIVE</a></p>
              <p className="text-base normal-case select-text">Tous droits réservés</p>
            </div>
        </div>
      </div>
    </footer>
  )
}