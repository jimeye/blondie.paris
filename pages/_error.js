import React from 'react'
import Head from 'next/head'

function Error({ statusCode, hasGetInitialPropsRun, err }) {
  return (
    <>
      <Head>
        <title>Erreur {statusCode} - BLONDIE PARIS</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-[#394140] mb-4">
              {statusCode || 'Erreur'}
            </h1>
            <div className="w-20 h-1 bg-[#FFB6C1] mx-auto mb-6"></div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg text-[#878787] mb-4">
              {statusCode
                ? `Une erreur ${statusCode} s'est produite sur le serveur`
                : 'Une erreur s\'est produite côté client'}
            </p>
            <p className="text-sm text-[#878787]">
              Nous nous excusons pour la gêne occasionnée.
            </p>
          </div>
          
          <div className="space-y-4">
            <button 
              onClick={() => window.location.href = '/'}
              className="block w-full px-6 py-3 bg-[#FFB6C1] text-white rounded-lg hover:bg-[#ff9cb0] transition-colors"
            >
              Retour à l'accueil
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="block w-full px-6 py-3 border border-[#FFB6C1] text-[#FFB6C1] rounded-lg hover:bg-[#FFB6C1] hover:text-white transition-colors"
            >
              Réessayer
            </button>
          </div>
          
          {process.env.NODE_ENV === 'development' && err && (
            <details className="mt-8 text-left">
              <summary className="cursor-pointer text-sm text-[#878787] mb-2">
                Détails de l'erreur (développement)
              </summary>
              <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
                {err.stack || err.message || 'Aucun détail disponible'}
              </pre>
            </details>
          )}
        </div>
      </div>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { 
    statusCode,
    hasGetInitialPropsRun: true,
    err: process.env.NODE_ENV === 'development' ? err : null
  }
}

export default Error
