import 'dotenv/config'
import {config as loadEnv} from 'dotenv'
loadEnv({ path: '.env.local', override: false })
import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_READ_TOKEN

if (!projectId || !token) {
  console.error('Variables manquantes: SANITY_PROJECT_ID et/ou SANITY_API_READ_TOKEN')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-10-01', token, useCdn: false })

async function main() {
  const ops = []
  // Homepage
  ops.push({ createIfNotExists: { _id: 'homepage_singleton', _type: 'homepage', aboutTitle: 'À propos', aboutText: [{_type: 'block', children: [{_type: 'span', text: "Texte d’exemple depuis Sanity."}]}] } })
  // Références (2 exemples sans image)
  ops.push({ create: { _type: 'referenceItem', name: 'Exemple 1', url: 'https://example.com', order: 1 } })
  ops.push({ create: { _type: 'referenceItem', name: 'Exemple 2', url: 'https://example.com', order: 2 } })
  // Actualité (1 exemple)
  ops.push({ create: { _type: 'actualite', title: 'Première actu', slug: { _type: 'slug', current: 'premiere-actu' }, excerpt: 'Actu de test', publishedAt: new Date().toISOString(), featured: true } })

  try {
    const tx = client.transaction()
    ops.forEach(op => {
      if (op.createIfNotExists) tx.createIfNotExists(op.createIfNotExists)
      if (op.create) tx.create(op.create)
    })
    const res = await tx.commit({ visibility: 'async' })
    console.log('Seed OK:', res.transactionId)
  } catch (e) {
    console.error('Seed erreur:', e.message)
    process.exit(2)
  }
}

main()
