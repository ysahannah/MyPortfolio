import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Navbar.css';

import { Link as RouterLink } from 'react-router-dom';  
import { Link as ScrollLink } from 'react-scroll';     
import logo from '../assets/yl1.png'; 

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg sticky-top custom-navbar">
                <div className="container-fluid">
                    <RouterLink className="navbar-brand" to="/" id="brand">
                        <img src={logo} height="40px" alt="Logo" />
                    </RouterLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <ScrollLink 
                                className="nav-link" 
                                to="About" 
                                smooth={true} 
                                duration={500}
                                offset={-70}
                            >
                                ABOUT ME
                            </ScrollLink>
                            <ScrollLink 
                                className="nav-link" 
                                to="Skills" 
                                smooth={true} 
                                duration={500}
                                offset={-70}
                            >
                                Skills
                            </ScrollLink>
                            <ScrollLink 
                                className="nav-link" 
                                to="Education" 
                                smooth={true} 
                                duration={500}
                                offset={-70}
                            >
                                Education
                            </ScrollLink>
                            <ScrollLink 
                                className="nav-link" 
                                to="Contact" 
                                smooth={true} 
                                duration={500}
                                offset={-70}
                            >
                                Contact
                            </ScrollLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
