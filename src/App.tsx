import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from "./Home";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";
import About from "./About";
import FrontEndProject from './FrontEndProject';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      // Scroll to the section specified in the state after navigating to the home page
      const sectionId = location.state.scrollTo;
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/frontend-project' element={<FrontEndProject />} />
      </Routes>
    </div>
  );
}

export default App;

