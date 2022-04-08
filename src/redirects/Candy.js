import React from 'react'
import './candy.scss'
import candycrush from '../components/images/candycrush.png'
import GitHubIcon from '@mui/icons-material/GitHub';

function Candy() {
  return (
    <div id='candy'>
    <h1 className='head'>Candy Crush</h1>
    <div className='candydiscription'>
      <h4 className='candyh4'>Discription:</h4>
       <p className='candyp'>react app that use candy crush game logic</p>
       </div>
       <div className='candygithub'>
         <GitHubIcon />
         <a href='https://github.com/frewcm/Candy-Crush-React'className='candygithubp'>Go to github</a>
       </div>
      
   
     <div className='candyimage'>
       <img src={candycrush} alt='' />
     </div>
      </div>
  )
}

export default Candy;