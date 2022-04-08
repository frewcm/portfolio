import React,{useState} from 'react'
import './mesob.scss'
import { SliderImage } from './SliderImage'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';



function Mesob({slides}) {

const [current, setCurrent] = useState(0)
const length = slides.length

const nextImage = ()=>{
  setCurrent(current === length - 1 ? 0 : current + 1)
}
const prevImage = ()=>{
  setCurrent(current === 0 ? length -1 : current - 1)
}
console.log(current)
  return (
    <div id='mesob'>
      <h1 className='head'>Mesob Habesha Restaurant</h1>
      <div className='mesobdiscription'>
        <h4 className='mesobh4'>Discription:</h4>
         <p className='mesobp'>react app that showcase traditional Ethiopian restaurant</p>
         <div className='github'>
           <GitHubIcon />
           <a href='https://github.com/frewcm/habesha-restaurant'className='githubp'>Go to github</a>
         </div>
         <div className='live'>
           <CircleIcon sx={{
             color: 'red'
           }} /> 
           <p className='livep'>Live</p>
           <a href='https://mesobhabesharestaurant.netlify.app/'>Go to netlify</a>
         </div>
      </div>
      <div className='imageslider'>
           <ArrowCircleLeftIcon  className='arrowleft' onClick={prevImage} sx={{
             fontSize: '30px'
           }} />
           <ArrowCircleRightIcon className='arrowright' onClick={nextImage} sx={{
             fontSize: '30px'
           }} />
      {SliderImage.map((slide, index)=>{
        return(
        <div className={index===current ? 'slide active' : 'slide'} key={index}>
          {index===current && (<img src={slide.image} alt='' className='image' />)}
        
        </div>
       )})}
        
          
         </div>
      </div>
  )
}

export default Mesob