import React from "react";
import Nav from './components/NavBar/Nav';
import Intro from './components/intro/Intro';
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './app.scss';




function App() {
  return (
    <div className="app">
    <Nav />
    <div className='sections'>
     <Intro />
     <About />
     <Portfolio />
     <Contact />
     
      </div> 
      
    </div>
  );
}

export default App;
