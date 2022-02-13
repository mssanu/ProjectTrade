import React from 'react'
import './Main.css'
import { Button, Container } from '@mui/material'
import Items from './Items'
import Activity from './Activity'
import Popular from './Popular'
function Main() {
  return (
    <div className='Main'>
      <Container className='Container'>
      <div className='Items'>
      <h4>Lorem ipsum</h4>
      <h2>Lorem ipsum is simply dummy text of the printing typesetting industry </h2>
      <Button> View Courses</Button>
      </div>
      </Container>
      <div className='Valure'>
        <Items name="No Values"/>
        <Items name="No Values"/>
        <Items name="No Values"/>
        <Items name="No Values"/>
        <Items name="No Values"/>
        <Items name="No Values"/>
      </div>
      <div className='Texts'>
        <div>
        <h3>Welcome back Kritesh</h3>
        <p>Lets Continue Learning</p>
        </div>
        <div>
          <h5>View All</h5>
        </div>
      </div>
      <div className='Activity'>
        <Activity values={"Undrastaniding Candle Sticks Learn TO Trade In Candle Sticks Pattern"} pvalues={"Module 2:Lorem Ipum Pies been the indusry's standard"}/>
        <Activity values={"Undrastaniding Candle Sticks Learn TO Trade In Candle Sticks Pattern"} pvalues={"Module 2:Lorem Ipum Pies been the indusry's standard"}/>
        <Activity values={"Undrastaniding Candle Sticks Learn TO Trade In Candle Sticks Pattern"} pvalues={"Module 2:Lorem Ipum Pies been the indusry's standard"}/>
        <Activity values={"Undrastaniding Candle Sticks Learn TO Trade In Candle Sticks Pattern"} pvalues={"Module 2:Lorem Ipum Pies been the indusry's standard"}/>
        
      </div>
      <div className='subHead'>
        <p>Check Course List</p>
        <h3>Popular Courses</h3>
        </div>
      <div className='Poplar'>
        <Popular Name={"Mohamad Mazhar"}
        rating={3.4}
        heading={"Undrastaniding CandleSticks-Learn to Trade CandleSticks Pattern"}
        price={"$13.5"}        
        />
        <Popular Name={"Mohamad Mazhar"}
        rating={3.4}
        price={"$13.5"}        
        heading={"Undrastaniding CandleSticks-Learn to Trade CandleSticks Pattern"}
        />
        <Popular Name={"Mohamad Mazhar"}
        rating={3.4}
        price={"$13.5"}        
        heading={"Undrastaniding CandleSticks-Learn to Trade CandleSticks Pattern"}
        />

      </div>

        {/* //text
        //button

        //container
        //container
        //container
        //container
        //container
        //container


        //Welcome Back Kritesh
        //lets continue learning
        //container
        //container
        //container
        //container
 */}


        
        

    </div>
  )
}

export default Main