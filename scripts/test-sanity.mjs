import 'dotenv/config'
import {createClient} from '@sanity/client'
import {homepageQuery, referencesQuery, actualitesQuery} from '../lib/sanity/queries.js'

// Assure le chargement de .env.local si présent
if (!process.env.SANITY_PROJECT_ID && !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  const {config} = await import('dotenv')
  config({ path: '.env.local' })
}

const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_READ_TOKEN

if (!projectId) {
  console.error('Missing projectId')
  process.exit(1)
}

const client = createClient({ projectId, dataset, apiVersion: '2024-10-01', token, useCdn: false })

async function main() {
  try {
    const [home, refs, acts] = await Promise.all([
      client.fetch(homepageQuery).catch(e => ({ error: e.message })),
      client.fetch(referencesQuery).catch(e => ({ error: e.message })),
      client.fetch(actualitesQuery).catch(e => ({ error: e.message })),
    ])
    console.log(JSON.stringify({ ok: true, sizes: { home: !!home && !home.error ? 1 : 0, refs: Array.isArray(refs) ? refs.length : 0, acts: Array.isArray(acts) ? acts.length : 0 }, errors: { home: home?.error, refs: refs?.error, acts: acts?.error } }, null, 2))
  } catch (e) {
    console.error(JSON.stringify({ ok: false, error: e.message }, null, 2))
    process.exit(2)
  }
}

main()


