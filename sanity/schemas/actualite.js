export default {
  name: 'actualite',
  title: 'Actualité',
  type: 'document',
  fields: [
    {name: 'title', title: 'Titre', type: 'string'},
    {name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}},
    {name: 'excerpt', title: 'Chapeau', type: 'text'},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'publishedAt', title: 'Date de publication', type: 'datetime'},
    {name: 'body', title: 'Contenu', type: 'array', of: [{type: 'block'}]},
    {name: 'featured', title: 'Mise en avant', type: 'boolean'},
    {name: 'seo', title: 'SEO', type: 'seo'}
  ]
}


