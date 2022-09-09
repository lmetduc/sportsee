import "./Loader.css";

export default function Loader(color) {
    return (
        <div className="loader-container">
            <div className={`loader ${color === "loader-white"? "loader-white" : ""}`}></div>
        </div>
    )
}