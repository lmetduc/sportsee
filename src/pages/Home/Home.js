import "./Home.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SportsMenu from "../../components/SportsMenu/Sportsmenu";
import SideMenu from "../../components/SideMenu/Sidemenu";
import PieChart from "../../components/PieChart/PieChart";
import PolarChart from "../../components/PolarChart/PolarChart";
import LineChart from "../../components/LineChart/LineChart";
import Loader from "../../components/Loader/Loader";
import ColumnChart from "../../components/ColumnChart/ColumnChart";
import useFetch from "../../utils/useFetch";
import UserFactory from "../../factories/UserFactory";


export default function Home() { 

  const id = 12 // Simule la récupration de l'ID via la connexion de l'utilisateur
  //const url = "http://localhost:3000/user/${id}";
  //const { id } = useParams();

  const navigate = useNavigate();
  const [activity, setActivity]= useState(null);
  const [session, setSession]= useState(null);
  const [performance, setPerformance]= useState(null);

// const [user, isLoading] = useFetch(`http://localhost:3000/user/${id}`)

// const [user, isLoading] = useFetch(url, UserFactory, "user")
const [user, isLoading] = useFetch(`http://localhost:3000/user/${id}`)

  // Soit on pas reçu les données => Loader
  if(isLoading){
    return <p>Chargement en cours...</p>
  }


  // Soit on a reçu les données
  return (
    <div>
      <SportsMenu />

      {user ? (
        <div className="body">
          <div className="home-title">
            <div className="message">Bonjour</div>
            <div className="home-username">{user.userInfos.firstName}</div>
          </div>
          <div className="home-text">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </div>

          <div className="content-block">
            <div className="chart-components">
              <div className="column-chart">
              <ColumnChart userID={id} />
                { /* activity ? <ColumnChart data={activity.data.sessions}/> : <Loader /> */}
              </div>

              <div className="block-chart">
                <div className="line-chart chart">
                <LineChart userID={id} />
                { /*session ? <MyLineChart data={session.data.sessions}/> : <Loader /> */}
                </div>

                <div className="polar-chart chart">
                <PolarChart userID={id} />
                { /*performance ? <MyPolarChart data={performance.data}/> : <Loader /> */}
                </div>

                <div className="pie-chart chart">
                  <PieChart userID={id}/>
                { /*<MyPieChart userID={id} />*/}
                {/* {user ? <MyPieChart data={user.data.todayScore}/> : <Loader />} */}
                </div>
              </div>
            </div>

            <div className="sidemenu-component">
              <SideMenu userID={id}/>
              {/*<SideMenu user={user} /> */}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}
