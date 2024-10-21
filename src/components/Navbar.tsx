import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#131313' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: '#fff', fontSize: '2rem', fontWeight: 'bold' }}>YZAVHEL</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#" style={{ color: '#fff', fontSize: '1.5rem' }}>Home</a>
                        <a className="nav-link" href="#Portfolio" style={{ color: '#fff', fontSize: '1.5rem' }}>Portfolio</a>
                        <a className="nav-link" href="#Skills" style={{ color: '#fff', fontSize: '1.5rem' }}>Skills</a>
                        <a className="nav-link" href="#Education" style={{ color: '#fff', fontSize: '1.5rem' }}>Education</a>
                        <a className="nav-link" href="#Resume" style={{ color: '#fff', fontSize: '1.5rem' }}>Resume</a>
                        <a className="nav-link" href="#Contact" style={{ color: '#fff', fontSize: '1.5rem' }}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar