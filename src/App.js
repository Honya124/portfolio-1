import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import SocialLinks from './pages/SocialLinks';
function App() {
  return (
    <div >
    <Navbar />
    <Home />
    <SocialLinks />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    </div>
  );
}

export default App;
