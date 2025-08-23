export default async function handler(req, res) {
  try {
    // Dans un vrai setup: vérifier un secret req.query.secret === process.env.REVALIDATE_SECRET
    await res.revalidate('/')
    await res.revalidate('/references')
    await res.revalidate('/actualites')
    return res.json({revalidated: true})
  } catch (e) {
    return res.status(500).json({revalidated: false, error: e.message})
  }
}


