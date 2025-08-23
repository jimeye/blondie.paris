export default {
  name: 'settings',
  title: 'Paramètres globaux',
  type: 'document',
  fields: [
    {name: 'siteName', title: 'Nom du site', type: 'string'},
    {name: 'accentColor', title: 'Couleur d\'accent', type: 'string', description: 'Hex (ex: #FFB6C1)'},
    {name: 'social', title: 'Réseaux sociaux', type: 'object', fields: [
      {name: 'instagram', type: 'url'},
      {name: 'linkedin', type: 'url'}
    ]}
  ]
}


