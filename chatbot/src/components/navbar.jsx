import React from 'react';
import img from '../static/images/botLogo.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <div className='logo-container'>
        <img src={img} alt="" className='logo' />
        <span className='logo-name'>QuadraBot</span>
      </div>
      <div className='links-container'>
        
      </div>
      <div className='login-container'>
        <button className='login-btn'><NavLink to='/log-in'>LOGIN</NavLink></button>
        <button className='sign-btn'><NavLink to='/sign-up'>Sign up free</NavLink></button>
      </div>
    </nav>
  )
}
