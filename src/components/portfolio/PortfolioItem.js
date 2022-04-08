import React from 'react'
import './item.scss'



function PortfolioItem({image,title}) {
  return (
    <div className='card'>
      <div className='imagecontainer'>
        {<img src={image} alt='' />}
      </div>
     <p className='portfoliop'>{title}</p>
    </div>
  )
}

export default PortfolioItem