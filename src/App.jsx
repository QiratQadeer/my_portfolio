import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <span className="logo-text">Qirat</span>
            <span className="logo-dot">.</span>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Qirat Qadeer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
