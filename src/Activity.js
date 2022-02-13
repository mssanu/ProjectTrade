import React from 'react'
import './Activity.css'
import img from './image/trading.jpg'

function Activity({values,pvalues}) {
  return (
    <div className='Acti'>
        <div>
            <img width="200px" height="100px" alt='' src={img}></img>
        </div>
        <p>
            <h4>{values}</h4>
            <p>{pvalues}</p>
        </p>

    </div>
  )
}

export default Activity