import './styles/About.css';

function About() {
    return (
        <div className="container-fluid">
            <div id="About" className="about">
                <div className="row">
                    <div className="col mt-4">
                        <center>
                            <h2 className="text-light about-title">ABOUT ME</h2>
                            <p className="text-light about-me">
                                Hi there! I’m Hannah Ysabelle Leguro, and I’m excited to share my journey with you. As a Virtual Assistant, I have a love for technology and a background in administrative tasks, tech support, and web development. I enjoy helping others by managing client inquiries, creating engaging presentations, and lending a hand on web projects.
                                I’m all about problem-solving and finding ways to make things easier for everyone. As I continue to learn and grow, I can’t wait to contribute my skills in a supportive role while exploring new adventures in the tech world. Thanks for stopping by my portfolio—I’m glad you’re here!
                            </p>
                        </center>
                </div>

                <div className="col d-flex">
                    <img height="300vh" src="src\assets\a-photo-of-a-modern-programmer-s-desk-setup-in-a-d-ZZyapb02QlywletE7XclGQ-xoUrYn-XQ1GDqxhRtOBdGg.jpeg" alt="" />
                </div>
                </div>
        </div>
        </div>
    );
}

export default About;
