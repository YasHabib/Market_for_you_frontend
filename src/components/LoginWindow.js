import React from 'react'
import { Link } from 'react-router-dom'
import './LoginWindow.css'

export default function LoginWindow() {
  return (
    <div>
            <text className='Welcome'>Welcome Back!</text>
            <br></br><br></br>
            <text>Email</text>
            <br></br><br></br>
            <input className='Email' placeholder='Your email'></input>
            <br></br><br></br>
            <text>Password</text>
            <br></br><br></br>
            <input className='Password' placeholder='Your password'></input>
            <br></br><br></br>
            
            <Link to='./dashboard'>
              <button>Login</button>
            </Link>            
    </div>
    )
}

