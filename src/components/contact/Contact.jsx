import React from 'react'
import './contact.scss'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Fade} from 'react-reveal'



export default function Contact() {

    return (
        <div className='contact scroll-area' id="contact">
            <Fade bottom>
        <p className='p1'>get in touch</p>  
        <h1 id='h1contact'>Contact</h1>
        <div className='contactcontainer'>
        <div className='leftcontact'>
            <div className='icons'>
                <PhoneIcon sx={{
                    backgroundColor: '#8E8D8A',
                    borderRadius: '50%',
                    width:'30px',
                    height:'30px',
                    padding:'5px',
                    color:'black'}}  />
                <p className='p2'>+251943946006</p>
            </div>
            <div className='icons'>
                <EmailIcon sx={{
                    backgroundColor: '#8E8D8A',
                    borderRadius: '50%',
                    width:'30px',
                    height:'30px',
                    padding:'5px',
                    color:'black' }}/>
                <p className='p2'>frewbefekadu32@gmail.com</p>
            </div>
            <div className='icons'>
                <LocationOnIcon sx={{
                    backgroundColor: '#8E8D8A',
                    borderRadius: '50%',
                    width:'30px',
                    height:'30px',
                    padding:'5px',
                    color:'black' 
                  }}/>
                <p className='p2'>Addis Ababa, Ethiopia</p>
            </div>
            </div>
        <div className='rightcontact'>
            <form action="https://formsubmit.co/855a4d39f35cf7fb4ae0581f2a7edaad" method="POST">
                <label>Name</label>
                <input type='text' name='name' placeholder='name...' required />
                <label>Email</label>
                <input type='email' name='email' placeholder='email...' required />
                <label>Your message</label>
                <textarea typeof='text' name='message' placeholder='message...'/>
                <input type='submit' value='send' className='send'/>
            </form>
            </div>
            </div>
            </Fade>
        </div>
    )
}
