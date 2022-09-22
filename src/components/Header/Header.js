import logo from "../../assets/logo.png";
import "./Header.css";

export default function Header() {
  const nav1 = "Accueil";
  const nav2 = "Profil";
  const nav3 = "Reglage";
  const nav4 = "Communauté";

  return (
    <div className="sportsee-head">
      <div className="sportsee-banner">
        <a href="/">
          <img src={logo} alt="SportSee" className="sportsee-logo" />
        </a>
        <div className="sportsee-block">
          <a className="sportsee-nav" href="/">
            {nav1}
          </a>
          <a className="sportsee-nav" href="/profil">
            {nav2}
          </a>
          <a className="sportsee-nav" href="/setting">
            {nav3}
          </a>
          <a className="sportsee-nav" href="/community">
            {nav4}
          </a>
        </div>
      </div>
    </div>
  );
}
