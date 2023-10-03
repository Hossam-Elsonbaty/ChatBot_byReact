import React,{useState,useContext} from 'react';
import {NavLink,useNavigate} from 'react-router-dom';
import { Skeleton } from 'primereact/skeleton';
import icon from'../static/images/help-desk.png';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import axios from 'axios';
import { AuthContext } from './AuthContext';
export default function CreateBot() {
  const [welcomeMessage, setWelcomeMessage] = useState(null)
  const [appName, setAppName] = useState()
  const [access_token, setAccess_token] = useState()
  const [verification_token, setVerification_token] = useState()
  const [facebook_page_id, setFacebook_page_id] = useState()
  const { auth } = useContext(AuthContext);
  const [isBots,setIsBots] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)myData\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  console.log(cookieValue);
  const handleSubmit = (e)=>{
    e.preventDefault();
    setVisible(false)
    axios.post(`http://127.0.0.1:8000/messenger/bot-api/create`,{
      // user_fk:cookieValue,
      user_fk:auth.userId,
      app_name:appName,
      access_token,
      verification_token,
      facebook_page_id,
      welcomeMessage
    }).then((response)=>{
      console.log(response);
      response.request.status===201?navigate(`/create-chatbot/${response.data.id}`):alert('error')
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
      <Dialog header="Please fill these fields" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
        <form action="">
          <div className="card flex justify-content-center">
            <span className="p-float-label">
              <InputText id="username" value={appName} onChange={(e) => setAppName(e.target.value)} />
              <label htmlFor="username">App name</label>
            </span>
          </div>
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
      </Dialog>
      <main className='create-bot-container'>
        <div className='header'><h2>FaceBook</h2></div>
        <div className='content'>
          {isBots.length>0?
          isBots.map((bot)=>{
            return(
              <div className='col'>
                <div className='create-bot'>
                  <i className='pi pi-plus'></i>
                  <span>Create bot</span>
                </div>
                <div className='added-bot' key={bot.id}>
                </div>
              </div>
            )
          })
          :
          <div className='col'>
            <div className='create-bot' onClick={() => setVisible(true)}>
                <i className='pi pi-plus'></i>
                <span>Create bot</span>
              {/* <NavLink to={`/create-chatbot/${appType.appType}`}>
                <i className='pi pi-plus'></i>
                <span>Create bot</span>
              </NavLink> */}
            </div>
            <div className='added-bot' >
              <div>
                <img src={icon} alt="" />
                <button><i className='pi pi-ellipsis-h'></i></button>
              </div>
              <h4>Customer service bot</h4>
              <span>Answer popular customer questions 24/7.</span>
            </div>
            <div className="create-bot-skelton">
              <Skeleton className="mb-2"></Skeleton>
              <Skeleton width="10rem" className="mb-2"></Skeleton>
              <Skeleton width="5rem" className="mb-2"></Skeleton>
              <Skeleton height="2rem" className="mb-2"></Skeleton>
              <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div className="create-bot-skelton">
              <Skeleton className="mb-2"></Skeleton>
              <Skeleton width="10rem" className="mb-2"></Skeleton>
              <Skeleton width="5rem" className="mb-2"></Skeleton>
              <Skeleton height="2rem" className="mb-2"></Skeleton>
              <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
            <div className="create-bot-skelton">
              <Skeleton className="mb-2"></Skeleton>
              <Skeleton width="10rem" className="mb-2"></Skeleton>
              <Skeleton width="5rem" className="mb-2"></Skeleton>
              <Skeleton height="2rem" className="mb-2"></Skeleton>
              <Skeleton width="10rem" height="4rem"></Skeleton>
            </div>
          </div>
          }
        </div>
      </main>
    </>
  )
}
