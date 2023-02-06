import React from 'react'
import { Link } from 'react-router-dom'
import './LoginWindow.css'
import ForgotPassword from './ForgotPassword'
import Popup from 'reactjs-popup'

export default function LoginWindow() {
  return (
    <div>
            <br></br><br></br>
            <center>
              <text className='Welcome'>Welcome Back!</text>
            </center>
            <br></br><br></br>
            <label className='Login-Label'>Email</label>
            <br></br>
            <center>
              <input type={'email'} className='Email' placeholder='Your email'></input>
            </center>
            <br></br><br></br>
            <label className='Login-Label'>Password</label>
            <br></br>
            <center>
              <input type={'password'} className='Password' placeholder='Your password'></input>
            </center>
            <br></br>

              <Popup className='Forgot-Password' trigger={<text className='Forgot-Password-Text'>I forgot my password</text>} position = "center center">
                <ForgotPassword></ForgotPassword>
              </Popup>

            <br></br><br></br><br></br>
            <Link to='./dashboard'>
              <button className='buttons'>Login</button>
            </Link> 

    </div>
    )
}

