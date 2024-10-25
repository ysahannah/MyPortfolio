import './styles/Education.css';
import { FaGraduationCap, FaClipboardList, FaBook, FaSchool } from 'react-icons/fa'; // Import the icons

function Education() {
    return (
        <div id="Education" className="education">
            <h2 className='text-center'>EDUCATION</h2>

            <div className="education-cards">
                <div className="card">
                    <div className="icon-container">
                        <FaGraduationCap className="card-icon" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Bachelor of Science in Information Technology</h5>
                        <p className="card-text">University of Antique</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon-container">
                        <FaClipboardList className="card-icon" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Science, Technology, Engineering and Mathematics</h5>
                        <p className="card-text">University of Antique</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon-container">
                        <FaBook className="card-icon" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Junior High School</h5>
                        <p className="card-text">University of Antique</p>
                    </div>
                </div>

                <div className="card">
                    <div className="icon-container">
                        <FaSchool className="card-icon" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Elementary</h5>
                        <p className="card-text">Sta. Rita Academy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
