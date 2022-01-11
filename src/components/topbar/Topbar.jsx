import React from 'react'
import './topbar.scss'
import {Person,Mail} from '@material-ui/icons'


export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={'topbar ' + (menuOpen && "active")} id='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>fresh.</a>
                    <div className="itemcontainer">
                      <Person  className='icons'/>
                      <span>+251943946006</span>
                      <div className="itemcontainer">
                      <Mail  className='icons'/> 
                      <span>frewbefekadu32@gmail.com</span>
                      </div>
                    </div>
                </div>
                
                <div className="right">
                    <div className="humburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
