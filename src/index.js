import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Mesob from './redirects/Mesob'
import Movie from './redirects/Movie'
import Candy from './redirects/Candy'
import {SliderImage} from './redirects/SliderImage'


ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/mesob' element={<Mesob slides={SliderImage} />} />
    <Route path='/movie' element={<Movie />} />
    <Route path='/candy' element={<Candy />} />
    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

