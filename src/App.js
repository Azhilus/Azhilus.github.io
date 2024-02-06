import './App.css';
import React from 'react';
import About from './components/about/About';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Sidebar from './components/sidebar/Sidebar';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
    </>
  );
}

export default App;
