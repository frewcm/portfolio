import React from "react";
import './app.scss';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Mesob from './redirects/Mesob'
import Movie from './redirects/Movie'
import Candy from './redirects/Candy'
import {SliderImage} from './redirects/SliderImage'
import Collector from './Collector'




function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Collector />} />
      <Route path='/mesob' element={<Mesob slides={SliderImage} />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/candy' element={<Candy />} />
      </Routes>
       
    </Router>
   
  );
}

export default App;
