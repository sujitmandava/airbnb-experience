import airbnb from "../Images/airbnb.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={airbnb} alt="airbnb" className="airbnblogo"></img>
        </div>
    );
}
