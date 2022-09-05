import "./SideMenu.css";
import energy from "../../assets/energy.png";
import protein from "../../assets/chicken.png";
import carbohydrate from "../../assets/apple.png";
import fat from "../../assets/cheeseburger.png";
import useFetch from "../../utils/useFetch";
import Loader from "../../components/Loader/Loader";

export default function SideMenu({ userID }) {
  const [data, isLoading] = useFetch(`http://localhost:3000/user/${userID}`)

  if(isLoading){
    return <Loader />
  }

  return (
    <div className="side-menu">
      <div className="setting">
        <div className="setting-icon calorie">
          <div className="energy-icon nutrition-icon">
            <img src={energy} alt="Energie" />
          </div>
        </div>
        <div className="block-info">
          <div className="title-info">{data.keyData.calorieCount}kCal</div>
          <div className="type-info">Calories</div>
        </div>
      </div>

      <div className="setting">
        <div className="setting-icon protein">
          <div className="protein-icon nutrition-icon">
            <img src={protein} alt="Proteines" />
          </div>
        </div>
        <div className="block-info">
          <div className="title-info">{data.keyData.proteinCount}g</div>
          <div className="type-info">Protéines</div>
        </div>
      </div>

      <div className="setting">
        <div className="setting-icon carbohydrate">
          <div className="carbohydrate-icon nutrition-icon">
            <img src={carbohydrate} alt="Glucides" />
          </div>
        </div>
        <div className="block-info">
          <div className="title-info">{data.keyData.carbohydrateCount}g</div>
          <div className="type-info">Glucides</div>
        </div>
      </div>

      <div className="setting">
        <div className="setting-icon fat">
          <div className="fat-icon nutrition-icon">
            <img src={fat} alt="Lipides" />
          </div>
        </div>
        <div className="block-info">
          <div className="title-info">{data.keyData.lipidCount}g</div>
          <div className="type-info">Lipides</div>
        </div>
      </div>
    </div>
  );
}
