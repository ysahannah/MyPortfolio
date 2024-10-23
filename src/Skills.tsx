import './styles/Skills.css';

function Skills() {
    return (
        <div id='Skills' className="skills mt-4">
            <center>
                <h2 className="text-light">SKILLS</h2>
            </center>

            <div className="progressbar mt-5">
                <div className="skill-row">
                    <label className='text-light'>HTML & CSS</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>

                <div className="skill-row">
                    <label className='text-light'>REACT</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>

                <div className="skill-row">
                    <label className='text-light'>PHP</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>

                <div className="skill-row">
                    <label className='text-light'>GIT</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>

                <div className="skill-row">
                    <label className='text-light'>MySQL</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>

                <div className="skill-row">
                    <label className='text-light'>C#</label>
                    <div className="progress">
                        <div className="progress-bar progress-bar bg-info" role="progressbar"
                            style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
