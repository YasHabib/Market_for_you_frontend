import React from 'react';
import './MainPage.css'
import logo from '../assets/MainPage/logo.svg'
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import LoginWindow from '../components/LoginWindow';
import RegistrationInputsPage1 from '../components/RegistrationInputs';

function MainPage() {
  return (
  <body className='FullPage'>
      <img className='MainLogo' src={logo} alt="Logo" />
      <div className='Buttons'>
            <Popup className='Login-window' trigger={<button className='Login'>Login</button>} position = "center center">
                <LoginWindow></LoginWindow>
            </Popup>
             <Popup className='Register-window' trigger={<button className='Create-account'>Create Account</button>} position="center center">
                <RegistrationInputsPage1></RegistrationInputsPage1>
            </Popup>
      </div>
  </body>
  )
}

export default MainPage

