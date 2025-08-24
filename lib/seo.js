// Configuration SEO centralisée pour BLONDIE Paris

export const siteConfig = {
  name: 'BLONDIE Paris',
  description: 'Bureau de relations presse et communication spécialisé dans les relations publiques, événements et conseil en communication',
  url: 'https://blondie-paris.com',
  ogImage: 'https://blondie-paris.com/logo.png',
  creator: 'BLONDIE Paris - Nathalie Roland',
  keywords: [
    'relations presse',
    'communication',
    'événements',
    'agence',
    'médias',
    'marques',
    'Paris',
    'Arles',
    'Marseille',
    'Lyon',
    'France',
    'Nathalie Roland',
    'bureau relations presse',
    'conseil communication',
    'production événements',
    'relations publiques'
  ].join(', '),
  address: {
    street: '11 RUE DU SAUVAGE',
    city: 'Arles',
    postalCode: '13200',
    country: 'FR',
    coordinates: {
      latitude: 43.6769,
      longitude: 4.6283
    }
  },
  contact: {
    phone: '+33-6-09-49-63-29',
    email: 'nathalie@blondie.paris',
    whatsapp: '+33609496329'
  }
}

// Données structurées pour l'organisation
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "alternateName": "BLONDIE",
  "description": siteConfig.description,
  "url": siteConfig.url,
  "logo": siteConfig.ogImage,
  "image": siteConfig.ogImage,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address.street,
    "addressLocality": siteConfig.address.city,
    "postalCode": siteConfig.address.postalCode,
    "addressCountry": siteConfig.address.country
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": siteConfig.contact.phone,
    "contactType": "customer service",
    "email": siteConfig.contact.email,
    "availableLanguage": "French"
  },
  "founder": {
    "@type": "Person",
    "name": "Nathalie Roland"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": siteConfig.address.coordinates.latitude,
      "longitude": siteConfig.address.coordinates.longitude
    },
    "geoRadius": "50000"
  },
  "areaServed": ["FR", "Paris", "Arles", "Marseille", "Lyon"],
  "serviceType": [
    "Relations presse",
    "Relations publiques", 
    "Communication",
    "Événements",
    "Conseil en communication"
  ],
  "sameAs": [
    "https://www.linkedin.com/company/blondie-paris",
    "https://www.instagram.com/blondie.paris"
  ]
}

// Configuration SEO par page
export const pageConfigs = {
  home: {
    title: 'BLONDIE Paris — Relations Presse, Communication & Événements',
    description: 'BLONDIE Paris accompagne agences, médias et marques: relations presse, relations publiques, production d\'événements. Expertise sur‑mesure, réseau, confidentialité.',
    keywords: 'relations presse, communication, événements, agence, médias, marques, Paris, Arles, Nathalie Roland, bureau relations presse, conseil communication, production événements',
    schema: organizationSchema
  },
  contact: {
    title: 'Contact - BLONDIE Paris | Relations Presse & Communication',
    description: 'Contactez BLONDIE Paris pour vos projets de relations presse, communication et événements. Bureau de relations presse à Arles. Nathalie Roland - Expert en RP et communication.',
    keywords: 'contact, relations presse, communication, événements, Arles, Nathalie Roland, BLONDIE Paris, bureau relations presse, conseil communication, devis',
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact BLONDIE Paris",
      "description": "Page de contact pour BLONDIE Paris - Bureau de relations presse et communication",
      "url": `${siteConfig.url}/contact`,
      "mainEntity": organizationSchema,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contact",
            "item": `${siteConfig.url}/contact`
          }
        ]
      }
    }
  },
  about: {
    title: 'À propos - BLONDIE Paris | Bureau de Relations Presse',
    description: 'Découvrez BLONDIE Paris, bureau de relations presse fondé par Nathalie Roland. Expertise en communication, événements et accompagnement sur mesure. Basé à Arles.',
    keywords: 'à propos, BLONDIE Paris, Nathalie Roland, relations presse, bureau communication, événements, agences publicité, Arles, conseil relations publiques',
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "À propos - BLONDIE Paris",
      "description": "Page à propos de BLONDIE Paris - Bureau de relations presse et communication",
      "url": `${siteConfig.url}/a-propos`,
      "mainEntity": {
        ...organizationSchema,
        "founder": {
          "@type": "Person",
          "name": "Nathalie Roland",
          "jobTitle": "Fondatrice",
          "worksFor": {
            "@type": "Organization",
            "name": siteConfig.name
          }
        },
        "foundingDate": "2020"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "À propos",
            "item": `${siteConfig.url}/a-propos`
          }
        ]
      }
    }
  },
  presseBtob: {
    title: 'Presse BtoB - BLONDIE Paris | Revue de Presse',
    description: 'Découvrez la revue de presse BtoB de BLONDIE Paris. Relations presse spécialisées business-to-business, communication corporate et médias professionnels.',
    keywords: 'presse BtoB, relations presse, business to business, communication corporate, médias professionnels, BLONDIE Paris, revue presse',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Presse BtoB - BLONDIE Paris",
      "description": "Revue de presse BtoB de BLONDIE Paris",
      "url": `${siteConfig.url}/presse-btob`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Revue de Presse",
            "item": `${siteConfig.url}/#revue-de-presse`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Presse BtoB",
            "item": `${siteConfig.url}/presse-btob`
          }
        ]
      }
    }
  },
  presseGrandPublic: {
    title: 'Presse Grand Public - BLONDIE Paris | Revue de Presse',
    description: 'Revue de presse grand public de BLONDIE Paris. Relations presse médias grand public, communication événementielle et couverture médiatique.',
    keywords: 'presse grand public, relations presse, médias grand public, communication événementielle, couverture médiatique, BLONDIE Paris, revue presse',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Presse Grand Public - BLONDIE Paris",
      "description": "Revue de presse grand public de BLONDIE Paris",
      "url": `${siteConfig.url}/presse-grand-public`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Revue de Presse",
            "item": `${siteConfig.url}/#revue-de-presse`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Presse Grand Public",
            "item": `${siteConfig.url}/presse-grand-public`
          }
        ]
      }
    }
  },
  tv: {
    title: 'TV - BLONDIE Paris | Revue de Presse',
    description: 'Revue de presse TV de BLONDIE Paris. Relations presse télévision, médias audiovisuels et couverture télévisuelle.',
    keywords: 'TV, télévision, relations presse, médias audiovisuels, couverture télévisuelle, BLONDIE Paris, revue presse',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "TV - BLONDIE Paris",
      "description": "Revue de presse TV de BLONDIE Paris",
      "url": `${siteConfig.url}/tv`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Revue de Presse",
            "item": `${siteConfig.url}/#revue-de-presse`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "TV",
            "item": `${siteConfig.url}/tv`
          }
        ]
      }
    }
  },
  presseInternationale: {
    title: 'Presse Internationale - BLONDIE Paris | Revue de Presse',
    description: 'Revue de presse internationale de BLONDIE Paris. Relations presse médias internationaux et communication globale.',
    keywords: 'presse internationale, relations presse, médias internationaux, communication globale, BLONDIE Paris, revue presse',
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Presse Internationale - BLONDIE Paris",
      "description": "Revue de presse internationale de BLONDIE Paris",
      "url": `${siteConfig.url}/presse-internationale`,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": siteConfig.url
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Revue de Presse",
            "item": `${siteConfig.url}/#revue-de-presse`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Presse Internationale",
            "item": `${siteConfig.url}/presse-internationale`
          }
        ]
      }
    }
  }
}

// Fonction utilitaire pour générer les meta tags
export const generateMetaTags = (pageConfig, customUrl = null) => {
  const url = customUrl || `${siteConfig.url}${pageConfig.url || ''}`
  
  return {
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: pageConfig.keywords,
    author: siteConfig.creator,
    robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    language: 'fr',
    geoRegion: 'FR',
    geoPlacename: siteConfig.address.city,
    geoPosition: `${siteConfig.address.coordinates.latitude};${siteConfig.address.coordinates.longitude}`,
    ICBM: `${siteConfig.address.coordinates.latitude}, ${siteConfig.address.coordinates.longitude}`,
    
    // Open Graph
    ogTitle: pageConfig.title,
    ogDescription: pageConfig.description,
    ogType: 'website',
    ogUrl: url,
    ogSiteName: siteConfig.name,
    ogLocale: 'fr_FR',
    ogImage: siteConfig.ogImage,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    ogImageAlt: `${pageConfig.title} - ${siteConfig.name}`,
    
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: pageConfig.title,
    twitterDescription: pageConfig.description,
    twitterImage: siteConfig.ogImage,
    twitterImageAlt: `${pageConfig.title} - ${siteConfig.name}`,
    
    // Canonical
    canonical: url,
    
    // Schema
    schema: pageConfig.schema
  }
}
