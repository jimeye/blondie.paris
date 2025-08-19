function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `Une erreur ${statusCode} s'est produite sur le serveur`
        : 'Une erreur s\'est produite côté client'}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
