export default {
  name: 'referenceItem',
  title: 'Référence',
  type: 'document',
  fields: [
    {name: 'name', title: 'Nom', type: 'string'},
    {name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}},
    {name: 'url', title: 'Lien', type: 'url'},
    {name: 'order', title: 'Ordre', type: 'number'}
  ]
}


