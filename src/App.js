import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
    const card_info = data.map((info) => (
        <Card
            image={info.coverImg}
            rating={info.stats.rating}
            numberratings={info.stats.reviewCount}
            location={info.location}
            title={info.title}
            price={info.price}
        />
    ));

    return (
        <div className="App">
            <Navbar></Navbar>
            <Hero></Hero>
            <section className="cards-list">{card_info}</section>
        </div>
    );
}

export default App;
