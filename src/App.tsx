import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/education' element={<Education />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/frontend-project' element={<FrontEndProject />} />
      </Routes>
    </Router>
  );
}

export default App
