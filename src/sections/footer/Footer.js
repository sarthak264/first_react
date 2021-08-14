import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 text-center text-lg-start">
                <p className="mb-2">
                    <a href="#">About</a>
                    <span>&middot;</span>
                    <a href="#">Contact</a>
                    <span>&middot;</span>
                    <a href="#">Terms of Use</a>
                    <span>&middot;</span>
                    <a href="#">Privacy Policy</a>
                </p>
                <p className="small text-muted">© Your Website 2021. All Rights Reserved.</p>
            </div>
            <div className="col-12 col-lg-6 text-center text-lg-end">
                <i className="bi bi-facebook"></i>
                <i className="mx-4 bi bi-twitter"></i>
                <i className="bi bi-instagram"></i>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
