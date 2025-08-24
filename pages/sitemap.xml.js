import { siteConfig, pageConfigs } from '../lib/seo'

const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }) => {
  const baseUrl = siteConfig.url
  
  // Liste des pages du site
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/a-propos', priority: '0.8', changefreq: 'monthly' },
    { url: '/qui-suis-je', priority: '0.8', changefreq: 'monthly' },
    { url: '/actualites', priority: '0.7', changefreq: 'weekly' },
    { url: '/references', priority: '0.6', changefreq: 'monthly' },
    { url: '/events', priority: '0.7', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/presse-btob', priority: '0.7', changefreq: 'weekly' },
    { url: '/presse-grand-public', priority: '0.7', changefreq: 'weekly' },
    { url: '/tv', priority: '0.7', changefreq: 'weekly' },
    { url: '/presse-internationale', priority: '0.7', changefreq: 'weekly' }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  })
  .join('')}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
