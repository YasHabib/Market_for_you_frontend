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
      <img className='Logo' src={logo} alt="Logo" />
      <div className='Buttons'>
            <Popup className='Login-window' trigger={<button className='Login'>Login</button>} position = "center center">
                <LoginWindow></LoginWindow>
            </Popup>
             <Popup className='Register-window' trigger={<button className='Create-account'>Create Account</button>} position="center center">
                <RegistrationInputsPage1></RegistrationInputsPage1>
                <button>Next</button>
            </Popup>
      </div>
  </body>
  )
}

export default MainPage




//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />

//      <div>
//        <Popup className='Login-window' trigger={<button className='Login'>Login</button>} position = "center center">
//          <text style={{
//            color: "#9349DE"
//          }}>Welcome Back!</text>
//          <br></br>
//          <LoginWindow></LoginWindow>
//
//          <button style={{color: "green"}}>
//            Login
//          </button>

//        </Popup>

//        <Popup className='Register-window' trigger={<button className='Create_account'>Create Account</button>} position="center center">
//          <text style={{
//            color: "#9349DE"
//          }}>Welcome Back!</text>
//          <br></br>
//          <RegistrationInputsPage1></RegistrationInputsPage1>
//          <button>Next</button>
//        </Popup>
//      </div>
//    </header>
//   </div>  