import React from 'react'
import Logo from './image/Logo.jpeg'
import './Footer.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
  return (
    <div className='Footer'>
        <div className='Footer-1'>
        <div className='Log'>
        <img alt='' src={Logo} height="40px" width="40px"></img>
            <p>
            <p>TRADE BRAINS</p>
            <h2>ACADEMY</h2>
            </p>
            </div>
            <p>
                <h4>Universal Financial Education</h4>
                <p>Run by a samall group of ordinary people with extraordinary resolve</p>
                <p>Lorem losum,Bangalore KA</p>
            </p>
        
        </div>
        <div className='Footer-Child'>
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>Courses</p>
        <p>Webiners</p>
        <p>Blog</p>
        </div>
        <div className='Footer-Child'>
        <h3>Other Links</h3>
        <p>Contact</p>
        <p>FAQ</p>
        <p>Cart</p>
        <p>Become A instructor</p>
        </div>
        <div className='Footer-Child'>
        <h3>Explore</h3>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>
        <div className='Social-medias'>
            <LinkedInIcon/>
            <TwitterIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
        </div>

    </div>
  )
}

export default Footer