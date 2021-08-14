import './Features.css'
import Feature from '../../components/feature/Feature'

function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <Feature title="Fully Responsive" text="This theme will look great on any device, no matter the size!" class="bi bi-window"/>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                        <Feature title="Bootstrap 5 Ready" text="Featuring the latest build of the new Bootstrap 5 framework!" class="bi bi-layers"/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Feature title="Easy to Use" text="Ready to use with your own content, or customize the source files!" class="bi bi-terminal"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
