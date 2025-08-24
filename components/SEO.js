import Head from 'next/head'
import { generateMetaTags } from '../lib/seo'

export default function SEO({ pageConfig, customUrl = null }) {
  const meta = generateMetaTags(pageConfig, customUrl)
  
  return (
    <Head>
      {/* Meta tags de base */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="author" content={meta.author} />
      <meta name="robots" content={meta.robots} />
      <meta name="language" content={meta.language} />
      <meta name="geo.region" content={meta.geoRegion} />
      <meta name="geo.placename" content={meta.geoPlacename} />
      <meta name="geo.position" content={meta.geoPosition} />
      <meta name="ICBM" content={meta.ICBM} />
      
      {/* Open Graph */}
      <meta property="og:title" content={meta.ogTitle} />
      <meta property="og:description" content={meta.ogDescription} />
      <meta property="og:type" content={meta.ogType} />
      <meta property="og:url" content={meta.ogUrl} />
      <meta property="og:site_name" content={meta.ogSiteName} />
      <meta property="og:locale" content={meta.ogLocale} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:image:width" content={meta.ogImageWidth} />
      <meta property="og:image:height" content={meta.ogImageHeight} />
      <meta property="og:image:alt" content={meta.ogImageAlt} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={meta.twitterCard} />
      <meta name="twitter:title" content={meta.twitterTitle} />
      <meta name="twitter:description" content={meta.twitterDescription} />
      <meta name="twitter:image" content={meta.twitterImage} />
      <meta name="twitter:image:alt" content={meta.twitterImageAlt} />
      
      {/* Canonical */}
      <link rel="canonical" href={meta.canonical} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Preconnect pour les performances */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(meta.schema)
        }}
      />
    </Head>
  )
}
