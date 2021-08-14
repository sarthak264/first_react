import './Card.css'

function Card(props) {
    return (
        <div className="single_card">
            <div className="row">
                <div className="col-12 col-lg-6 img-box">
                   <img src={props.src}/>
                </div>
                <div className="col-12 col-lg-6 text-box d-lg-flex flex-lg-column justify-content-center">
                    <h2>{props.title}</h2>
                    <p className="lead mb-0">{props.text}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
