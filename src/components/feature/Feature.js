import './Feature.css'

function Feature(props) {
    return (
        <div className="feature mx-auto text-center">
            <i className={props.class}></i>
            <h3>{props.title}</h3>
            <p className="lead mb-0">{props.text}</p>
        </div>
    )
}

export default Feature
