import React,{useState,useEffect} from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import image from '../static/images/preview-removebg.png'
import 'primeicons/primeicons.css';
export default function Footer() {
  const [value, setValue] = useState('');
  return (
    <>
      <footer>
        <div className='footer-top'>
          <div className='left'>
            <img src={image} alt="sss" />
          </div>
          <div className='right'>
            <form action="">
              <div className='form-header'>
                <h1>Contact Us</h1>
                <button className='send'>Send</button>
              </div>
              <div className="content">
                <div className='col'>
                  <div className="card flex justify-content-center">
                    <InputText placeholder='Your Name' value={value} onChange={(e) => setValue(e.target.value)} />
                  </div>
                  <div className="card flex justify-content-center">
                    <InputText placeholder='Your mail' value={value} type='e-mail' onChange={(e) => setValue(e.target.value)} />
                  </div>
                </div>
                <div className="card flex justify-content-center">
                  <InputTextarea placeholder='Your message' value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='copy-right'>Copyright <a href='#'>QuadraCode.</a> All Rights Reserved</div>
          <div className='social'>
            <ul>
              <li>Follow US</li>
              <li>
                <a href="#">
                  <i className='pi pi-whatsapp'></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='pi pi-telegram'></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='pi pi-facebook'></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className='pi pi-google'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  ) 
}
