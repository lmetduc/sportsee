import "./Home.css";
import { useState, useEffect } from "react";
import SportsMenu from "../../components/SportsMenu/Sportsmenu";
import SideMenu from "../../components/SideMenu/Sidemenu";
import energy from "../../assets/energy.png";
import protein from "../../assets/chicken.png";
import carbohydrate from "../../assets/apple.png";
import fat from "../../assets/cheeseburger.png";
import Example1 from "../../components/ColumnChart/ColumnChart";
import Example2 from "../../components/PieChart/PieChart";
import Example3 from "../../components/PolarChart/PolarChart";
import Example4 from "../../components/LineChart/LineChart";

export default function Home() {
  
  return (
    <div>
      <SportsMenu />
      <div className="body">

        <div className="home-title"><div className="message">Bonjour</div><div className="home-username">Thomas</div></div>
        <div className="home-text">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>

        <div className="content-block">

        <div className="chart-components">

          <div className="column-chart"><div class="loader-container"><div class="loader"></div></div><Example1 /></div>

          <div className="block-chart">
          <div className="line-chart chart"><div class="loader-container"><div class="loader"></div></div><Example4/></div>
          <div className="polar-chart chart"><div class="loader-container"><div class="loader"></div></div><Example3/></div>
          <div className="pie-chart chart"><div class="loader-container"><div class="loader"></div></div><Example2/></div>
          </div>

        </div>

        <div className="sidemenu-component"><SideMenu /></div>
        </div>
      </div>
    </div>
  );
}
