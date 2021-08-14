import './Testimonial.css'
import Review from '../../components/review/Review'

function Testimonial() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container text-center">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <Review src="./images/testimonials-1.jpg" title="Margaret E." text='"This is fantastic! Thanks so much guys!"'/>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <Review src="./images/testimonials-2.jpg" title="Fred S." text='"Bootstrap is amazing. I have been using it to create lots of super nice landing pages."'/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Review src="./images/testimonials-3.jpg" title="Sarah W." text='"Thanks so much for making these free resources available to us!"'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
