export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold text-[#394140] mb-4">404</h1>
        <p className="text-[#394140] mb-6">La page demandée est introuvable.</p>
        <a href="/" className="text-[#FFB6C1] underline">Revenir à l’accueil</a>
      </div>
    </main>
  )
}


