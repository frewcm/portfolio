import React from 'react'
import './movie.scss' 
import GitHubIcon from '@mui/icons-material/GitHub';
import moviepic from '../components/images/moviepic.png'

function Movie() {
  return (
    <div id='movie'>
    <h1 className='head'>Movie Search App</h1>
    <div className='moviediscription'>
      <h4 className='movieh4'>Discription:</h4>
       <p className='Moviep'>react app that use free movie api to search for movies and add them to favorites</p>
       <div className='moviegithub'>
         <GitHubIcon />
         <a href='https://github.com/frewcm/movie-search-app'className='moviegithubp'>Go to github</a>
       </div>
      
    </div>
     <div className='movieimage'>
       <img src={moviepic} alt='' />
     </div>
    </div>
  )
}

export default Movie