import "./Error.css";
import Header from "../../components/Header/Header";
import SportsMenu from "../../components/SportsMenu/Sportsmenu";

export default function Error() {
  return (
    <div>
    <Header />
<SportsMenu />
<div className="body-page">
    <div className="error-page">
      <div className="error">404</div>
      <p className="info">Oups! La page que vous demandez n'existe pas.</p>
      <p className="link-home">Nous vous invitons à contacter notre support par email à l'adresse suivante : <a href="mailto:support@sportsee.frx">support@sportsee.fr</a></p>
      <a href="/" className="link-home">
        Retourner sur la page d’accueil
      </a>
    </div>
    </div>
    </div>
  );
}