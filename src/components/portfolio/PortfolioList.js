import movie from '../images/movie.png'
import mesob from '../images/mesob.png'
import candy from '../images/candy.png'
import {Link} from 'react-router-dom'


export const PortfolioList = 
    [{
        "id": 1,
       "image": mesob,
       "title": <Link to='/mesob' style={{textDecoration: 'none',
       color: '#E85A4F',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight:'900'
        }}>Mesob Habesha Restaurant</Link>,
       
    },
    {
        "id": 2,
        "image": movie,
       "title": <Link to='/movie' style={{textDecoration: 'none',
       color: '#E85A4F',
       fontFamily: 'Arial, Helvetica, sans-serif',
       fontWeight:'900'}}>Movie App</Link>,
       
    },
    {
        "id": 3,
        "image": candy,
       "title": <Link to='/candy'style={{textDecoration: 'none',
                                         color: '#E85A4F',
                                         fontFamily: 'Arial, Helvetica, sans-serif',
                                         fontWeight:'900'
                  }}>Candy Crush</Link>,
       
    },
   
   
]
