import Header from './components/Header';
import Hero from './components/Hero';
import Background3D from './components/Background3D';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 relative">
      <Background3D />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
