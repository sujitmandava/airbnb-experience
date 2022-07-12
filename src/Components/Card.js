export default function Card(props) {
    return (
        <div className="card">
            <img className="card-image" src={props.image}></img>
            <h4 className="card-reviews">
                {props.rating}
                <span className="card-reviews-side-text">
                    ({props.numberratings})•{props.location}
                </span>
            </h4>
            <h4 className="card-title">{props.title}</h4>
            <h4 className="card-pricing">
                From ${props.price}{" "}
                <span className="card-pricing-side-text"> / person</span>
            </h4>
        </div>
    );
}
