import './Review.css'

function Review(props) {
    return (
        <div className="review text-center mx-auto">
            <img src={props.src} className="rounded-circle"/>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </div>
    )
}

export default Review
