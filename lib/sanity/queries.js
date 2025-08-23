export const homepageQuery = `*[_type == "homepage"][0]{
  heroSlides[]{asset->{url}},
  deezerLabel, deezerUrl,
  aboutTitle, aboutText,
  seo
}`

export const referencesQuery = `*[_type == "referenceItem"]|order(order asc){name, url, logo{asset->{url}}}`

export const actualitesQuery = `*[_type == "actualite"]|order(publishedAt desc){
  title, slug, excerpt, image{asset->{url}}, publishedAt, featured, seo
}`


