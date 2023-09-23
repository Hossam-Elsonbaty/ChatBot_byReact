import React, {useState,useContext} from 'react';
import image1 from'../static/images/Illustration-PNG-Images.png';
import logo from'../static/images/botLogo.png';
import {NavLink , useNavigate} from 'react-router-dom';
import axios from'axios';
import { InputText } from "primereact/inputtext";
import { AuthContext } from './AuthContext';
export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setUsername } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogin = (e) =>{
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/users/login-api`,{
      email,
      password
    }).then((res)=>{
      console.log(res.data);
      setUsername(res.data.id);
      res.request.status===202?navigate('/create-channel'):alert('error')
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
            <button className='sign-in'><NavLink to='/sign-up'>Sign up free</NavLink></button>
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
              <button type='submit' className='confirm' onClick={handleLogin}>Log in</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
