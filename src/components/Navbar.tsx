import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
   
import logo from '../assets/yl1.png'; 

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = (to: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: to } });
    } else {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="custom-navbar sticky-top navbar navbar-expand-lg">
      <div className="container-fluid">
        <a id="brand" className="navbar-brand" href="#">
          <img src={logo} height="40px" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleScrollLink('about')}>
                About
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleScrollLink('skills')}>
                Skills
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleScrollLink('education')}>
                Education
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => handleScrollLink('contact')}>
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
