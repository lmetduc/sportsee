import "./Error.css";

export default function Error() {
  return (
    <div className="error-page">
      <div className="error">404</div>
      <p className="info">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="link-home">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
}