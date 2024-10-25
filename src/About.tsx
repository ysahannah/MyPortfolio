import './styles/About.css';
import meImage from '../src/assets/me.png'; 

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
                        <p className="about-me">
                            Hi there! I’m Hannah Ysabelle Leguro, and I’m excited to share my journey with you. As a Virtual Assistant, I have a love for technology and a background in administrative tasks, tech support, and web development. I enjoy helping others by managing client inquiries, creating engaging presentations, and lending a hand on web projects. 
                            I’m all about problem-solving and finding ways to make things easier for everyone. As I continue to learn and grow, I can’t wait to contribute my skills in a supportive role while exploring new adventures in the tech world. Thanks for stopping by my portfolio — I’m glad you’re here!
                        </p>
                    </center>
                </div>
            </div>
        </div>
    );
}

export default About;
