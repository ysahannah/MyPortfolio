import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';

import logo from '../assets/yl1.png'; 

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#Home" id="brand">
                        <img src={logo} height="40px" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <a className="nav-link" href="#About">ABOUT ME</a>
                            <a className="nav-link" href="#Skills">Skills</a>
                            <a className="nav-link" href="#Education">Education</a>
                            <a className="nav-link" href="#Contact">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
