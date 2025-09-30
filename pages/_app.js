import '../styles/globals.css'
import Head from 'next/head'
import CookieBanner from '../components/CookieBanner'
import { NotificationProvider } from '../components/NotificationSystem'

function MyApp({ Component, pageProps }) {
  const siteUrl = 'https://blondie.paris'
  const organizationLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BLONDIE Paris',
    url: siteUrl,
    logo: `${siteUrl}/logo.webp`,
    sameAs: []
  }
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'BLONDIE Paris',
    url: siteUrl
  }

  return (
    <NotificationProvider>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </Head>
      <Component {...pageProps} />
      <CookieBanner />
    </NotificationProvider>
  )
}
 
export default MyApp 