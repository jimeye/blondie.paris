export default {
  name: 'homepage',
  title: 'Accueil',
  type: 'document',
  fields: [
    {name: 'heroSlides', title: 'Slides Hero', type: 'array', of: [{type: 'image', options: {hotspot: true}}]},
    {name: 'deezerLabel', title: 'Texte bouton Deezer', type: 'string'},
    {name: 'deezerUrl', title: 'Lien Deezer', type: 'url'},
    {name: 'aboutTitle', title: 'Titre À propos', type: 'string'},
    {name: 'aboutText', title: 'Texte À propos', type: 'array', of: [{type: 'block'}]},
    {name: 'seo', title: 'SEO', type: 'seo'}
  ]
}


