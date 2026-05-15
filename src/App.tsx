import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Projects />
      <HireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;