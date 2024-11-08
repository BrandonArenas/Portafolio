import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';


const App = () => {
  return (
    <div class='main-content'>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
