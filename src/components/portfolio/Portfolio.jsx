import React from 'react'
import { PortfolioList } from './PortfolioList'
import PortfolioItem from './PortfolioItem'
import './portfolio.scss'
import {Fade} from 'react-reveal'


const Portfolio = () => { 
    return (
        <div  className='contact scroll-area' id='portfolio'>
          <Fade bottom>
          <h1>Some Projects</h1>
          <div className='cardcontainer'>
                {PortfolioList.map((project, index)=>{
                  return <PortfolioItem key={index} image={project.image} title={project.title} />
                })}
          </div> 
          </Fade>  
        </div>
           )
  }

  export default Portfolio