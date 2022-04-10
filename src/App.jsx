import React from "react";
import Nav from './components/NavBar/Nav';
import Intro from './components/intro/Intro';
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './app.scss';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Mesob from './redirects/Mesob'
import Movie from './redirects/Movie'
import Candy from './redirects/Candy'
import {SliderImage} from './redirects/SliderImage'





function App() {
  return (
    // <div className="app">
    // <Nav />
    // <div className='sections'>
    //  <Intro />
    //  <About />
    //  <Portfolio />
    //  <Contact />
     
    //   </div> 
      
    // </div>
    <Router>
      <Nav />
      <Intro />
      <About />
      <Portfolio />
      <Contact />
    <Routes>
      <Route path='/mesob' element={<Mesob slides={SliderImage} />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/candy' element={<Candy />} />
      </Routes>
    </Router>
  );
}

export default App;
