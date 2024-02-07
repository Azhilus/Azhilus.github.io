import './App.css';
import React from 'react';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;
