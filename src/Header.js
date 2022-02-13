import React, { useState } from 'react'
import './Header.css'
import Logo from './image/Logo.jpeg'
import AddAlarmIcon from '@mui/material/Avatar'
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import StorageIcon from "@material-ui/icons/Storage";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";


function Header() {
const  [sideBar,setSideBar]  = useState(false)
const showBar = ()=>{
  setSideBar(!sideBar);
}
  return (
    <div className="Header">
        <div className="Log">
            <img alt='' src={Logo} height="40px" width="40px"></img>
            <p>
            <p>TRADE BRAINS</p>
            <h2>ACADEMY</h2>
            </p>
        </div>
        <div >
          <input className='input' placeholder="search"></input>
        </div>
        
        <div className='left-menu'>
          <p>My learning</p>
          
          <p>Explore</p>
          <p>Courses</p>
          <p>Webinars</p>
          <p>Blog</p>
          <p>Contact</p>
          
          


        </div>
        <ShoppingCartIcon />
        <div className='Avatar'><AddAlarmIcon/></div>
        
        <div className="Sto">
        </div>
        <div className={sideBar?"Mobile":"Mobiles active"}>
        
        <p>My learning</p>
          <p>Explore</p>
          <p>Courses</p>
          <p>Webinars</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        
    </div>
  )
}

export default Header