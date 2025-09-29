import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }))
    setShowBanner(false)
  }

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary')
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }))
    setShowBanner(false)
  }

  const customizePreferences = () => {
    setShowDetails(true)
  }

  const savePreferences = (preferences) => {
    localStorage.setItem('cookieConsent', 'customized')
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    setShowBanner(false)
  }

  if (!showBanner) return null

  if (showDetails) {
    return <CookiePreferences onSave={savePreferences} onClose={() => setShowDetails(false)} />
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Contenu principal */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#394140] mb-2">
              🍪 Gestion des cookies
            </h3>
            <p className="text-sm text-[#878787] leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site, 
              analyser notre trafic et personnaliser notre contenu. 
              <button 
                onClick={() => setShowDetails(true)}
                className="text-[#FFB6C1] hover:underline ml-1"
              >
                Personnaliser mes préférences
              </button>
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 text-sm font-medium text-[#394140] bg-transparent border border-[#394140] rounded-lg hover:bg-[#394140] hover:text-white transition-colors"
            >
              Nécessaires uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-[#FFB6C1] border border-[#FFB6C1] rounded-lg hover:bg-[#FFB6C1]/80 transition-colors"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function CookiePreferences({ onSave, onClose }) {
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  const handleToggle = (type) => {
    if (type === 'necessary') return // Toujours activé
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handleSave = () => {
    onSave(preferences)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#394140]">
              Préférences des cookies
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-[#878787] mb-6">
            Gérez vos préférences de cookies. Vous pouvez activer ou désactiver 
            différents types de cookies selon vos besoins.
          </p>

          {/* Cookies nécessaires */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#394140] mb-1">
                  Cookies nécessaires
                </h3>
                <p className="text-sm text-[#878787]">
                  Essentiels au fonctionnement du site. Ne peuvent pas être désactivés.
                </p>
              </div>
              <div className="ml-4">
                <div className="w-12 h-6 bg-[#FFB6C1] rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cookies analytiques */}
          <div className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#394140] mb-1">
                  Cookies analytiques
                </h3>
                <p className="text-sm text-[#878787]">
                  Nous aident à comprendre comment vous utilisez notre site pour l'améliorer.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    preferences.analytics ? 'bg-[#FFB6C1]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Cookies marketing */}
          <div className="border-b border-gray-200 pb-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-[#394140] mb-1">
                  Cookies marketing
                </h3>
                <p className="text-sm text-[#878787]">
                  Utilisés pour vous proposer des publicités personnalisées.
                </p>
              </div>
              <div className="ml-4">
                <button
                  onClick={() => handleToggle('marketing')}
                  className={`w-12 h-6 rounded-full relative transition-colors ${
                    preferences.marketing ? 'bg-[#FFB6C1]' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-[#394140] bg-transparent border border-[#394140] rounded-lg hover:bg-[#394140] hover:text-white transition-colors"
            >
              Annuler
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-sm font-medium text-white bg-[#FFB6C1] border border-[#FFB6C1] rounded-lg hover:bg-[#FFB6C1]/80 transition-colors"
            >
              Sauvegarder mes préférences
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
