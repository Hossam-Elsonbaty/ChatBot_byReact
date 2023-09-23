import React from 'react';
import Bot from '../static/images/bot.png';
import 'primeicons/primeicons.css';
import {NavLink} from 'react-router-dom';
export default function Plans() {
  return (
    <>
      <div className='plans'>
        <div className='plan-cart'>
          <div className='top-section'>
            <div className='header'>
              <h2>Plan</h2>
            </div>
            <div className='image'>
              <img src={Bot} alt="" style={{'width':'100px'}}/>
            </div>
            <div className='price-container'>
              <div className='price'>
                <span>$</span>
                <span className='number'>59</span>
                <span>/mo</span>
              </div>
              <span className='span1'>billed annually</span>
              <span className='span2'>or <span style={{'fontWeight':'600'}}>$65</span> month to month</span>
              <button className='start-trail'>
                <NavLink to='/log-in'>Start your free trail</NavLink>
              </button>
            </div>
          </div>
          <div className='bottom-section'>
            <div className='details'>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                1 active chatbot
              </span>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                1,000 valid chats/mo
              </span>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                Unlimited number of stories
              </span>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                7-day training history
              </span>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                Basic reporting
              </span>
              <span>
                <i className="pi pi-check" style={{ fontSize: '1rem' }}></i>
                Data security
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
