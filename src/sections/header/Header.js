import "./Header.css";
import Newsletter from '../../components/newletter/Newsletter'

function Header() {
  return (
    <header className="header">
      <img src="./images/bg-masthead.jpg" alt="" />
      <div className="container text-white">
        <div className="row justify-content-center">
            <div className="col-12 col-xl-6 text-center">
              <h1 className="mb-5 display-5">Generate more leads with a professional landing page!</h1>
              <Newsletter />
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
