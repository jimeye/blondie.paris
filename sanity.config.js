import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

// Utilise les variables visibles côté navigateur pour Studio,
// puis retombe sur les variables serveur si nécessaires.
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '9yhsyxpg'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'

export default defineConfig({
  name: 'blondie-cms',
  title: 'BLONDIE CMS',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: schemas
  }
})


