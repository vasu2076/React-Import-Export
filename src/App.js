import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Service from './components/Service';
import Bookquote from './components/bookquote';
import Contact from './components/contact'
import Contact2 from './components/contact2';
import Bookquote2 from './components/bookquote2';
import Service2 from './components/service2';
import About2 from './components/About2';
import Project2 from './components/Project2';
import Home2 from './components/Home2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home2 />} />
        <Route path="/Project" element={<Project />} /> 
        <Route path="/Project2" element={<Project2 />} /> 
        <Route path="/Service" element={<Service />} />
        <Route path="/Service2" element={<Service2 />} />
        <Route path="/Bookquote" element={<Bookquote />} />
        <Route path="/Bookquote2" element={<Bookquote2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/about2" element={<About2 />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Contact2" element={<Contact2 />} />
      </Routes>
    </Router>
  );
}

export default App;

