import './App.css';
import React from 'react'
import Nav from './components/Nav';
import Info from './components/Info';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Info />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
