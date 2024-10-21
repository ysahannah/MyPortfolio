import './styles/Home.css';
import Navbar from './components/Navbar';

function Home() {
    return (
        <>
            <Navbar />
            <div className="hero">
                <div className="name-container">
                    <h1>YZAVHEL LEGURO</h1>
                    <h3>VIRTUAL ASSISTANT / WEB DEVELOPER</h3>

                    <br />
                    <div className="social-media-icons">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook" aria-label="Facebook"></i>
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram" aria-label="Instagram"></i>
                        </a>
                        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" aria-label="GitHub"></i>
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin" aria-label="LinkedIn"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
