import React from 'react';
import {Link} from 'react-router-dom';

const sidebar = (props)=>{
    return(
        <div className='sideBar'>
        <h1 className='logo'>Fresh</h1>
          <div className='subBar'>
          <Link to='/'>
            <div className='sideButton' onClick={()=>{props.home(true)}}>Home</div>
            <div className='sideButton' onClick={()=>{props.click('suit' , 'ALL')}}>Suit</div>
            <div className='sideButton' onClick={()=>{props.click('shirt', 'All')}}>Shirt</div>
            <div className='sideButton' onClick={()=>{props.click('pant', 'ALL')}}>Pants</div>
            <div className='sideButton' onClick={()=>{props.click('shoe', 'ALL')}}>Shoes</div>
            <div className='sideButton' onClick={()=>{props.click('watch', 'ALL')}}>Watches</div>
          </Link>
          <Link to='/Add'>
            <div className='sideButton'> Add Clothes</div>
          </Link>
          <Link to='/'>
            <div className='sideButton' onClick={()=>{props.laundClick('laundry', 'ALL')}}>Laundry</div>
          </Link>
          </div>

        </div>
    
    )
}

export default sidebar