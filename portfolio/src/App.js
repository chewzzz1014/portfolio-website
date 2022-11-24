import './App.css';
import React, { useEffect } from 'react'
import Nav from './components/Nav';
import Info from './components/Info';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Nav />
      <div className='main'>
        <div>
          <Info />
          <Skills />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
