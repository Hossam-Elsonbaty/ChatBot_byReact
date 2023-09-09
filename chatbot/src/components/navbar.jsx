import React from 'react'
import img from '../static/images/botLogo.png'
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
        <button className='login-btn'>Log in</button>
        <button className='sign-btn'>Sign up free</button>
      </div>
    </nav>
  )
}
