import { useState, useEffect } from 'react'

export default function CookiePopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      // Délai pour que l'utilisateur voie d'abord le site
      const timer = setTimeout(() => {
        setShowPopup(true)
        setIsVisible(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
    setTimeout(() => setShowPopup(false), 300)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsVisible(false)
    setTimeout(() => setShowPopup(false), 300)
  }

  if (!showPopup) return null

  return (
    <>
      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Popup */}
      <div className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-lg shadow-2xl border border-[#FFB6C1] z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-[#FFB6C1] rounded-full flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#394140]">Gestion des cookies</h3>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-sm text-[#878787] mb-3">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Ces cookies nous permettent d'analyser le trafic et d'adapter le contenu à vos préférences.
            </p>
            <p className="text-xs text-[#878787]">
              En continuant à naviguer, vous acceptez notre utilisation des cookies.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={acceptCookies}
              className="flex-1 px-4 py-2 bg-[#FFB6C1] text-white rounded-lg hover:bg-[#ff9cb0] transition-colors text-sm font-medium"
            >
              Accepter
            </button>
            <button
              onClick={rejectCookies}
              className="flex-1 px-4 py-2 border border-[#FFB6C1] text-[#FFB6C1] rounded-lg hover:bg-[#FFB6C1] hover:text-white transition-colors text-sm font-medium"
            >
              Refuser
            </button>
          </div>

          {/* Link to privacy policy */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-[#878787] text-center">
              Pour en savoir plus, consultez notre{' '}
              <a href="/politique-confidentialite" className="text-[#FFB6C1] hover:underline">
                politique de confidentialité
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
