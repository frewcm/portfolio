import React from 'react'
import { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList'
import './portfolio.scss'

export default function Portfolio() {
    const [selected, setSelected] = useState('featured')
    const list = [
        {id: 'featured',
         title: 'Featured'},
         {id: 'web',
         title: 'web App'},
         {id: 'mobile',
         title: 'Mobile App'},
         {id: 'design',
         title: 'Design'},
         {id: 'content',
         title: 'Content'}
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
                )

             )}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
                <div className="item">
                    <img src="assets/unknown.png" alt="" />
                    <h3>unknown app1</h3>
                </div>
            </div>
           
        </div>
    )
}
