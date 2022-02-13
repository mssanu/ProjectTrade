import React from 'react'
import './Popular.css'
import Img from './image/trading.jpg'

function Popular({price,rating,heading,Name}) {
  return (
    <div className='Popular'>
        <div className='Img'>
            <img width="200px" alt='' src={Img}></img>

        </div>
        <div className='Details'>
            <div>
            <h5>{heading}</h5>
            </div>
            <div className='profile'>
                <img width="30px" alt='' src={Img}></img>
                <p>{Name}</p>

            </div>
            
        </div>
        <div className='Rating'>
        <h3>{price} </h3>
        <p>⭐⭐⭐</p>
        <strong>{rating}</strong>
        </div>
    </div>
  )
}

export default Popular