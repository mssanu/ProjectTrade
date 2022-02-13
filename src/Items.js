import { Avatar } from '@mui/material'
import React from 'react'
import './Items.css'
function Items({name}) {
  return (
    <div className='Ite'>
        <Avatar/>
        <h5>{name}</h5>
    </div>
  )
}

export default Items