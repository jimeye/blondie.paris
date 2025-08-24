import Head from 'next/head'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    societe: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (à remplacer par votre logique d'envoi)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        nom: '',
        societe: '',
        email: '',
        telephone: '',
        sujet: '',
        message: ''
      })
    }, 2000)
  }

  return (
    <div>
      <Head>
        <title>Contact - BLONDIE Paris | Relations Presse & Communication</title>
        <meta name="description" content="Contactez BLONDIE Paris pour vos projets de relations presse, communication et événements. Bureau de relations presse à Arles. Nathalie Roland - Expert en RP et communication." />
        <meta name="keywords" content="contact, relations presse, communication, événements, Arles, Nathalie Roland, BLONDIE Paris, bureau relations presse, conseil communication, devis" />
        <meta name="author" content="BLONDIE Paris - Nathalie Roland" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Arles" />
        <meta name="geo.position" content="43.6769;4.6283" />
        <meta name="ICBM" content="43.6769, 4.6283" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact - BLONDIE Paris | Relations Presse & Communication" />
        <meta property="og:description" content="Contactez BLONDIE Paris pour vos projets de relations presse, communication et événements. Bureau de relations presse à Arles." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blondie-paris.com/contact" />
        <meta property="og:site_name" content="BLONDIE Paris" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://blondie-paris.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Contact BLONDIE Paris - Bureau de relations presse" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact - BLONDIE Paris | Relations Presse & Communication" />
        <meta name="twitter:description" content="Contactez BLONDIE Paris pour vos projets de relations presse, communication et événements." />
        <meta name="twitter:image" content="https://blondie-paris.com/logo.png" />
        <meta name="twitter:image:alt" content="Contact BLONDIE Paris - Bureau de relations presse" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://blondie-paris.com/contact" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact BLONDIE Paris",
              "description": "Page de contact pour BLONDIE Paris - Bureau de relations presse et communication",
              "url": "https://blondie-paris.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "BLONDIE Paris",
                "description": "Bureau de relations presse et communication",
                "url": "https://blondie-paris.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "11 RUE DU SAUVAGE",
                  "addressLocality": "Arles",
                  "postalCode": "13200",
                  "addressCountry": "FR"
                },
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+33-6-09-49-63-29",
                    "contactType": "customer service",
                    "availableLanguage": "French"
                  },
                  {
                    "@type": "ContactPoint",
                    "email": "nathalie@blondie.paris",
                    "contactType": "customer service",
                    "availableLanguage": "French"
                  }
                ]
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://blondie-paris.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Contact",
                    "item": "https://blondie-paris.com/contact"
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <main>
        <Navigation />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-white to-[#FFB6C1]/5 pt-24 pb-6">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-[#394140] mb-6">
                CONTACT
              </h1>
              <div className="w-20 h-1 bg-[#FFB6C1] mx-auto mb-8"></div>
              <p className="text-lg text-[#394140]/80 leading-relaxed uppercase">
                Prêt à collaborer ? Contactez-nous pour discuter de vos projets de relations presse, 
                communication et événements. Notre équipe est là pour vous accompagner.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              
              {/* Formulaire de contact */}
              <div className="bg-white rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#394140] mb-6 uppercase">
                  Envoyez-nous un message
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 uppercase">Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="societe" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                        Société
                      </label>
                      <input
                        type="text"
                        id="societe"
                        name="societe"
                        value={formData.societe}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                        placeholder="Votre société (optionnel)"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="telephone" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="sujet" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                      Sujet *
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="relations-presse">Relations presse</option>
                      <option value="evenements">Événements</option>
                      <option value="communication">Communication</option>
                      <option value="devis">Demande de devis</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#394140] mb-2 uppercase">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FFB6C1] focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Décrivez votre projet..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FFB6C1] hover:bg-[#FFB6C1]/80 text-white font-semibold py-4 px-6 border border-[#394140] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
