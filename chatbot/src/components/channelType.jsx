import React from 'react';
import image1 from'../static/images/d99e156ba0b07feefbabef871eda0f23.png';
import logo from'../static/images/botLogo.png';
import messenger from'../static/images/messenger.png';
import instagram from'../static/images/instagram.png';
import whatsapp from'../static/images/whatsapp.png';
import telegram from'../static/images/telegram.png';
import {NavLink} from 'react-router-dom';

export default function ChannelType() {
  return (
    <>
      <div className='ChannelT-container'>
        <section className='left-section'>
          <img className='logo' src={logo} alt="" />
          <div className='col'>
            <img className='illstration' src={image1} alt="" />
            <h2>What channel would you like to start with?</h2>
            <span>Don’t worry, you can connect other channels later.</span>
          </div>
        </section>
        <section className='right-section'>
          <header>
            <button className='sign-in'>SIGN IN</button>
          </header>
          <div className='channels'>
            <div className='col'>
              <NavLink to=''>
                <img className='social-logo' src={instagram} alt="" />
                <div className='content'>
                  <h3>Instagram</h3>
                  <span>Supercharge your social media marketing with Instagram Automation.</span>
                </div>
              </NavLink>
            </div>
            <div className='col'>
              <NavLink to='/create-channel/create-bot/0'>
                <img className='social-logo' src={messenger} alt="" />
                <div className='content'>
                  <h3>Facebook Messenger</h3>
                  <span>Create Facebook Messenger automation to keep customers happy.</span>
                </div>
              </NavLink>
            </div>
            <div className='col'>
              <NavLink to=''>
                <img className='social-logo' src={whatsapp} alt="" />
                <div className='content'>
                  <h3>WhatsApp</h3>
                  <span>Choose the most popular mobile messaging app in the world and reach 2 billion users.</span>
                </div>
              </NavLink>
            </div>
            <div className='col'>
              <NavLink to=''>
                <img className='social-logo' src={telegram} alt="" />
                <div className='content'>
                  <h3>Telegram</h3>
                  <span>Power up your business with Telegram automation.</span>
                </div>
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
