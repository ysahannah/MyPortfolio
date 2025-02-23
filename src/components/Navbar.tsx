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
      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
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
            {['About', 'Skills', 'Tools'].map((item) => (
              <li className="nav-item" key={item}>
                <button className="nav-link" onClick={() => handleScrollLink(item)}>
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
