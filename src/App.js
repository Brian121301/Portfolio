import './App.css';
import './style.css'
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import Contact from './components/contact';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes> 
    </Router>
  );
}

export default App;
