import './styles/About.css';
import meImage from '../src/assets/me_enhanced (1).png'; 

function About() {
    return (
        <div id="About" className="about">
            <div className="d-flex flex-row about-container">
                <div className="about-image">
                    <img src={meImage} alt="Hannah's Image" /> {/* Use the imported image */}
                </div>
                <div className="about-description me-5">
                    <center>
                        <h2 className="about-title">ABOUT ME</h2>
                        <h5 className="about-me">
                            I'm an IT graduate passionate about problem-solving, troubleshooting, and web development. As a virtual assistant, I’ve honed my skills in various technical and administrative roles, and I'm eager to contribute and grow in a supportive environment. Let’s build solutions together!
                        </h5>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default About;
