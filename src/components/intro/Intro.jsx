import React from 'react'
import './intro.scss'
import { init} from 'ityped'
import { useEffect, useRef } from 'react'
import frew from '../images/frew.jpg'
import Arrow from '../images/ar.png'

export default function Intro() {
    
    
    const textRef = useRef();
 
    useEffect(()=>{ 
        
        init(textRef.current, {
             showCursor: true,
             backDelay: 1500,
             backSpeed: 60,
              strings: ['Developer', 'Designer','Content creator' ] }
        );
    },[])
    return (
        <div className='intro scroll-area' id='intro'>
            <div className="left">
                <div className='imagecontainer'>
                   <img className='frew' src={frew} alt='' />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'am</h2>
                    <h1>Frew Befekadu</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a className='arrlink' href="#about">
                     <img className='arrblink' src={Arrow} alt="" />
                </a>
            </div>
        </div>
    )
}
