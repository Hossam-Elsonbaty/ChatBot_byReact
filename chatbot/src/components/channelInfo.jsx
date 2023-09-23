import React, {useState,useContext} from 'react';
import image1 from'../static/images/Illustration-PNG-Images.png';
import logo from'../static/images/botLogo.png';
import {NavLink, useParams,useNavigate} from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { AuthContext } from './AuthContext';
export default function ChannelInfo() {
  const [welcomeMessage, setWelcomeMessage] = useState(null)
  const [access_token, setAccess_token] = useState()
  const [verification_token, setVerification_token] = useState()
  const [facebook_page_id, setFacebook_page_id] = useState()
  const { username } = useContext(AuthContext);
  const appType =useParams()
  const navigate = useNavigate();
  console.log(appType.appType);
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/apps-api`,{
      app_type:appType.appType,
      user_fk:username.toString(),
      messenger:[{
        access_token,
        verification_token,
        facebook_page_id,
        welcomeMessage
      }]
    }).then((res)=>{
      console.log(res.request.status);
      res.request.status===201?navigate('/create-chatbot'):alert('error')
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
            <button style={{'display':'none'}} className='sign-in'>SIGN IN</button>
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
                  <InputText id="username" value={access_token} onChange={(e) => setAccess_token(e.target.value)} />
                  <label htmlFor="username">Access token</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={verification_token} onChange={(e) => setVerification_token(e.target.value)} />
                  <label htmlFor="username">Verify token</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText type='number' id="username" value={facebook_page_id} onChange={(e) => setFacebook_page_id(e.target.value)} />
                  <label htmlFor="username">Facebook page Id</label>
                </span>
              </div>
              <div className="card flex justify-content-center">
                <span className="p-float-label">
                  <InputText id="username" value={welcomeMessage} onChange={(e) => setWelcomeMessage(e.target.value)} />
                  <label htmlFor="username">Welcome Message</label>
                </span>
              </div>
              <button className='confirm' type='submit' onClick={handleSubmit}>Confirm</button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
