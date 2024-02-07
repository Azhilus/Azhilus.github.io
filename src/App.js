import './App.css';
import React from 'react';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
    </>
  );
}

export default App;
