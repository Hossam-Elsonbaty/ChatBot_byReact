import React,{useState,useEffect} from 'react';
export default function Footer() {
  const [value, setValue] = useState('');
  return (
    <>
      <footer>
        <div className='footer-top'>
          <div className='right'>
            <form action="">
              <h1>Contact Us</h1>
              <div className="content">
              </div>
            </form>
          </div>
          <div className='left'>
            <img src="" alt="" />
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='right'></div>
          <div className='left'> </div>
        </div>
      </footer>
    </>
  )
}
