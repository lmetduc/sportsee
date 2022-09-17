import "./Loader.css";
import Header from "../Header/Header";
import SportsMenu from "../SportsMenu/Sportsmenu";

export default function Loader(color) {
    return (

        <div className="loader-container">
            <div className={`loader ${color === "loader-white"? "loader-white" : ""}`}></div>
        </div>
    )
}