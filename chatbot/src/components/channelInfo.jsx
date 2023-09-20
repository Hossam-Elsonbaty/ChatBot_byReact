import React, {useState} from 'react';
import image1 from'../static/images/Illustration-PNG-Images.png';
import logo from'../static/images/botLogo.png';
import messenger from'../static/images/messenger.png';
import instagram from'../static/images/instagram.png';
import whatsapp from'../static/images/whatsapp.png';
import telegram from'../static/images/telegram.png';
import {NavLink} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
export default function ChannelInfo() {
  const [value, setValue] = useState()
  return (
    <>
      <div className='ChannelI-container'>
        <section className='left-section'>
          <img className='logo' src={logo} alt="" />
          <div className='col'>
            <img className='illstration' src={image1} alt="" />
            <h2>To get start, please fill this form.</h2>
            <span>Don’t worry, all data is secured.</span>
          </div>
        </section>
        <section className='right-section'>
          <header>
            <button className='sign-in'>SIGN IN</button>
          </header>
          <div className='channels'>
            <div className='form-header'>
              <div className='top'>
                <img className='logo' src={logo} alt="" />
                <span>QuadraBot</span>
              </div>
              <span className='label'>Please fill these fields</span>
            </div>
            <form action="">
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                  <label htmlFor="username">Access token</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                  <label htmlFor="username">Verify token</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText type='number' id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                  <label htmlFor="username">Facebook page Id</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                  <label htmlFor="username">Welcome Message</label>
                </span>
              </div>
              <button className='confirm'>Confirm</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
