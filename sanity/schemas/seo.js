export default {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {name: 'title', title: 'Title', type: 'string'},
    {name: 'description', title: 'Meta description', type: 'text'},
    {name: 'ogImage', title: 'Image OpenGraph', type: 'image', options: {hotspot: true}},
    {name: 'canonical', title: 'Canonical', type: 'url'}
  ]
}


