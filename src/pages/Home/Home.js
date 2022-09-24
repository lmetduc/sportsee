import "./Home.css";
import SportsMenu from "../../components/SportsMenu/Sportsmenu";
import SideMenu from "../../components/SideMenu/Sidemenu";
import PieChart from "../../components/PieChart/PieChart";
import PolarChart from "../../components/PolarChart/PolarChart";
import LineChart from "../../components/LineChart/LineChart";
import Loader from "../../components/Loader/Loader";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import useFetch from "../../utils/useFetch";
import UserFactory from "../../factories/UserFactory";
import Header from "../../components/Header/Header";

export default function Home() {
  const id = 12; // Simule la récupration de l'ID via la connexion de l'utilisateur
  //const url = "http://localhost:3000/user/${id}";
  //const { id } = useParams();

  // const [user, isLoading] = useFetch(`http://localhost:3000/user/${id}`)

  // const [user, isLoading] = useFetch(url, UserFactory, "user")
  const [data, isLoading] = useFetch(
    `http://localhost:3000/user/${id}`,
    UserFactory,
    "api"
  );

  // Soit on pas reçu les données => Loader
  if (isLoading) {
    return <Loader />;
  }

  // Soit on a reçu les données
  return (
    <div>
      <Header />
      <SportsMenu />
      <div className="body-page">
        <div className="body-block">
          <div className="body">
            <div className="home-title">
              <div className="home-message">
                <div className="message">Bonjour</div>
                <div className="home-username">{data.firstname}</div>
              </div>

              <div className="home-text">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </div>
            </div>

            <div className="content">
              <div className="sidemenu-component">
                <SideMenu userID={id} />
              </div>

              <div className="content-block">
                <div className="chart-components">
                  <div className="column-chart">
                    <ColumnChart userID={id} />
                  </div>

                  <div className="block-chart">
                    <div className="line-chart chart">
                      <LineChart userID={id} />
                    </div>

                    <div className="polar-chart chart">
                      <PolarChart userID={id} />
                    </div>

                    <div className="pie-chart chart">
                      <PieChart userID={id} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
