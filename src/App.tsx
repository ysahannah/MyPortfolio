import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./Home";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import About from "./About";
import Footer from "./components/Footer";
import Portfolio from './Portfolio';
import FrontEndProject from './FrontEndProject';

function App() {
  const location = useLocation(); 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/frontend-project' element={<FrontEndProject />} />
      </Routes>

      {/* Conditionally render the following components if not on FrontEndProject route */}
      {location.pathname !== '/frontend-project' && (
        <>
          <Portfolio />
          <About />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
