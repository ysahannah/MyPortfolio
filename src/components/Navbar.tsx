import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" id="brand">YZAVHEL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#Portfolio">Portfolio</a>
                            <a className="nav-link" href="#Skills">Skills</a>
                            <a className="nav-link" href="#Education">Education</a>
                            <a className="nav-link" href="#Resume">Resume</a>
                            <a className="nav-link" href="#Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
