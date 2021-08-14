import './Sign_up.css'
import Newsletter from '../../components/newletter/Newsletter';

function Sign_up() {
    return (
        <section id="sign_up" className="sign_up">
            <img src="./images/bg-masthead.jpg" alt="" />
            <div className="container text-center">
                <div class="row justify-content-center">
                    <div class="col-12 col-xl-6">
                        <h2 className="text-white mb-4">Ready to get started? Sign up now!</h2>
                        <Newsletter />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sign_up;
