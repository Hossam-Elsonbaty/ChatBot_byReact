import React, {useState} from 'react';
import image1 from'../static/images/Illustration-PNG-Images.png';
import logo from'../static/images/botLogo.png';
import {NavLink, useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
export default function SignUp() {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSinUp = (e)=> {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/users/register-api`,{
      full_name:fullName,
      email,
      password
    }).then((res)=>{
      console.log(res.request.status);
      res.request.status===201?navigate('/log-in'):alert('error')
    }).catch((error)=>{
      console.log(error)
    })
  }
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
            <button className='sign-in'><NavLink to='/log-in'>LOGIN</NavLink></button>
          </header>
          <div className='channels'>
            <div className='form-header'>
              <div className='top'>
                <img className='logo' src={logo} alt="" />
                <span>QuadraBot</span>
              </div>
              <span className='label'>Create your free account</span>
            </div>
            <form action="">
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  <label htmlFor="username">Full name</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  <label htmlFor="username">Business email</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText type='password' id="username" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <label htmlFor="username">Password</label>
                </span>
              </div>
              <button className='confirm' onClick={handleSinUp}>Create account</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
