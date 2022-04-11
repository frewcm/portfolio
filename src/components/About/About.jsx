import './about.scss'
import React from 'react'
import {Fade} from 'react-reveal'

function About() {
  return (
    
    <div className='about scroll-area'id='about'>
      <Fade bottom>
      <p className='p'>more</p>
      <h1>About me</h1>
<div className='aboutContainer'>
      
    <div className='leftabout'>
        <h4>Hello!</h4>
        <p className='aboutdiscription'>My name is Frew Befekadu and i'm a passionate Front end 
          developer using web technologies to build your website so that 
          it is functional and user friendly but at the same time attractive,
          i add personal touch to your product and make sure that its 
          eye catching and easy to use 
        </p>
        <p className='aboutdiscription'>
          I will love to hear from you.Whether it's a project,job opportunity,or just a chat
          .Feel free to contact me.
        </p>
    </div>
    <div className='rightabout'>
        <h3 className='h3skill'>Skills</h3>
        <div className='skillcontainer'>
        <p className='skills'>HTML</p>
        <p className='skills'>CSS</p>
        <p className='skills'>JavaScript</p>
        <p className='skills'>React</p>
        <p className='skills'>Node.js</p>
        <p className='skills'>Express</p>
        </div>
    </div>
  </div>
  </Fade>
      </div>
      
  )
}

export default About