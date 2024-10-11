export default function Card(props) {
    return (
        <div className="card--container">
            <div className="card--div">
                <img src={props.imageUrl}
                    alt="a picture of mount Fuji" className="card--img"/>
                <div className="info--div">
                    <img src="/images/locator.png" alt="a locator icon" className="locator--img"/>
                    <span>{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                    <h2>{props.title}</h2>
                    <p className="date--p">{props.startDate} - {props.endDate}</p>
                    <p className="description--p">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}