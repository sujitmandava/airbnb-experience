import photogrid from "../Images/photogrid.png";
import "../App.css";

export default function Hero() {
    return (
        <div className="hero-section">
            <img src={photogrid} alt="photoGrid" className="photoGrid"></img>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </div>
    );
}
