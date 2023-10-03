import React, {useState,useContext,useRef, useEffect} from 'react';
import image1 from'../static/images/Illustration-PNG-Images.png';
import logo from'../static/images/botLogo.png';
import {NavLink , useNavigate} from 'react-router-dom';
import axios from'axios';
import { InputText } from "primereact/inputtext";
import { AuthContext } from './AuthContext';
export default function Login() {
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(()=>{
    setErrMsg('')
  },[email, pwd])
  const handleLogin = async (e) =>{
    e.preventDefault();
    await axios.post(`http://127.0.0.1:8000/users/login-api`,{
      email,
      password:pwd
    }).then((response)=>{
      const userId  = response?.data?.id;
      setAuth({email, pwd, userId})
      setSuccess(true);
      setEmail('')
      setPwd('')
      console.log(auth);
      navigate(`/dashboard/${response?.data?.id}`)
    }).catch((error)=>{
      if(!error?.response){
        setErrMsg('No Server Response');
      }else if (error.response?.status === 404){
        setErrMsg('This Email Is Not Registered');
      }else if (error.response?.status === 400){
        setErrMsg('Incorrect Password');
      }else{
        setErrMsg('Login Failed')
      }
      errRef.current.focus();
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
              <span className='label'>Please Fill these fields to login</span>
              <span ref={errRef} className={errMsg?"errmsg":"offscreen"}>{errMsg}</span>
            </div>
            <form onSubmit={(e)=>handleLogin(e)}>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" type='email' 
                    value={email} onChange={(e) => setEmail(e.target.value)} 
                    autoComplete='off'
                    required
                  />
                  <label htmlFor="username">Business email</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText type='password' id="username" required
                    value={pwd} onChange={(e) => setPwd(e.target.value)} />
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
