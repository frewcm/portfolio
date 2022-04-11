import React,{useState} from 'react'
import './nav.scss'
import ReorderIcon from '@mui/icons-material/Reorder';




export default function Topbar() {
    const [showLinks, setShowlinks] = useState(false)
    return (
        <div className='nav'>
         <div className='left'>
             <a href='#intro'>FB.</a>
             </div>
         <div className='right' >
             <div className='links'id={showLinks ? 'hidden' : '' }>
             <a href='#about'>About Me</a>
             <a href='#portfolio'>Projects</a>
             <a href='#contact'>Contact Me</a>
             </div>
            <button onClick={()=>setShowlinks(!showLinks)}>
                <ReorderIcon />
            </button>
             </div>
        </div>
    )
}
