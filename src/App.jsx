import './App.css';
import AboutMe from './sections/AboutMe/AboutMe';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Intro from './sections/Intro/Intro';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects />
      <Skills></Skills>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
