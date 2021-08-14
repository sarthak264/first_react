import './Page.css'
import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import Features from './sections/features/Features'
import Sign_up from './sections/sign_up/Sign_up'
import Testimonial from './sections/testimonials/Testimonial'
import Footer from './sections/footer/Footer'
import Showcase from './sections/showcase/Showcase'

function Page() {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <Showcase />
            <Testimonial />
            <Sign_up />
            <Footer />
        </>
    )
}

export default Page
