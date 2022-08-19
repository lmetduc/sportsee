import "./Home.css";
import { useState, useEffect } from "react";
import SportsMenu from "../../components/SportsMenu/Sportsmenu";
import SideMenu from "../../components/SideMenu/Sidemenu";
import Example1 from "../../components/ColumnChart/ColumnChart";
import Example2 from "../../components/PieChart/PieChart";
import Example3 from "../../components/PolarChart/PolarChart";
import Example4 from "../../components/LineChart/LineChart";
import Loader from "../../components/Loader/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => { setIsLoading(false); }, 2000);
  }, []);

  return (
    <div>
      <SportsMenu />
      <div className="body">
        <div className="home-title">
          <div className="message">Bonjour</div>
          <div className="home-username">Thomas</div>
        </div>
        <div className="home-text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>

        <div className="content-block">
          <div className="chart-components">

            <div className="column-chart">
            {isLoading ? <Loader /> : <Example1 />}
            </div>

            <div className="block-chart">
              <div className="line-chart chart"> 
              {isLoading ? <Loader /> : <Example4 />}
              </div>

              <div className="polar-chart chart">
              {isLoading ? <Loader /> : <Example3 />}
              </div>

              <div className="pie-chart chart">
              {isLoading ? <Loader /> : <Example2 />}
              </div>

            </div>
          </div>

          <div className="sidemenu-component">
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
