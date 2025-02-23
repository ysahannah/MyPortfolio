import logo1 from '../assets/yllogo.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <center>
                <div className="logo-footer">
                    <img src={logo1} height="60px" alt="Logo" />
                </div>

                <div className="contact-container">
                    <a href="mailto:hleguro8@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <i className="bi bi-envelope"></i>
                        <span>hleguro8@gmail.com</span>
                    </a>
                    <a href="tel:+639398118600" target="_blank" rel="noopener noreferrer" className="contact-item">
                        <i className="bi bi-telephone"></i>
                        <span>+639199313717</span>
                    </a>
                </div>

                <p className="copyright-text">&copy; {new Date().getFullYear()} YZAVHEL</p>
            </center>
        </footer>
    );
}

export default Footer;
