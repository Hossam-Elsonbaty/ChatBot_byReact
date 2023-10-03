import React,{useState,useContext} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';
export default function Dashboard() {
  const { auth } = useContext(AuthContext);
  const handleUserSetting = (e)=> {
    console.log(e.target);
    e.target.classList.toggle('active');
  }
  console.log(auth);
  return (
    <>
      <main className='dashboard-container'>
        <nav className='side-nav'>
          <ul>
            <li>
              <NavLink to='/dashboard'>
                <i className='pi pi-home'></i>
              </NavLink>
            </li>
            <li>
              <NavLink to='create-bot/1'>
                <i className='pi pi-inbox'></i>
              </NavLink>
            </li>
            <li>
              <NavLink to='create-bot/0'>
                <i className='pi pi-facebook'></i>
              </NavLink>
            </li>
            <li>
              <NavLink to='create-bot/2'>
                <i className='pi pi-whatsapp'></i>
              </NavLink>
            </li>
            <li>
              <NavLink to='create-bot/3'>
                <i className='pi pi-telegram'></i>
              </NavLink>
            </li>
            <li>
              <NavLink to='create-bot/4'>
                <i className='pi pi-instagram'></i>
              </NavLink>
            </li>
            <li className='user-setting' onClick={(e)=>handleUserSetting(e)}>
              <i className='pi pi-user'></i>
            </li>
          </ul>
        </nav>
        <div className='main-content'>
          <Outlet/>
        </div>
      </main>
    </>
  )
}
