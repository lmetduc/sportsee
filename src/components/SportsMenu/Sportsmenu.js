import "./Sportsmenu.css";
import yoga from "../../assets/yoga.png";
import swimming from "../../assets/swimming.png";
import cycling from "../../assets/cycling.png";
import strength from "../../assets/strength.png";

export default function SportsMenu() {

  return (
    <div className="sports-head">
      <div className="sports-menu">

        <div className="sports-block">
          <div className="sport-card">
          <a className="sports-nav" href="/yoga">
            <img src={yoga} alt="Yoga" className="sport-icon" />
          </a>
          </div>

          <div className="sport-card">
          <a className="sports-nav" href="/natation">
          <img src={swimming} alt="Natation" className="sport-icon" />
          </a>
          </div>

          <div className="sport-card">
          <a className="sports-nav" href="/cyclisme">
          <img src={cycling} alt="Cyclisme" className="sport-icon" />
          </a>
          </div>

          <div className="sport-card">
          <a className="sports-nav" href="/musculation">
          <img src={strength} alt="Musculation" className="sport-icon" />
          </a>
          </div>

        </div>
      </div>
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  );
}