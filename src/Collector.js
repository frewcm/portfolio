import React from 'react'
import Nav from './components/NavBar/Nav';
import Intro from './components/intro/Intro';
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

function Collector() {
  return (
    <div>
        <Nav />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
    </div>
  )
}

export default Collector