import './styles/About.css';
import meImage from '../src/assets/aifaceswap-02a6e53fea00a8695c9d0ceb7356e144(1)_enhanced.jpg'; 

function About() {
    return (
        <div id="About" className="about">
            <div className="d-flex flex-row about-container">
                <div className="about-image">
                    <img src={meImage} alt="Hannah's Image" />
                </div>
                <div className="about-description me-5">
                    <center>
                        <h2 className="about-title">ABOUT ME</h2>
                        <h6 className="about-me">
                            I'm an IT graduate passionate about problem-solving, troubleshooting, and web development. As a virtual assistant, I’ve honed my skills in various technical and administrative roles, and I'm eager to contribute and grow in a supportive environment. Let’s build solutions together!
                        </h6>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default About;
