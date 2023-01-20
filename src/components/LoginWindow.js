import React from 'react'

export default function LoginWindow() {
  return (
    <div>
            <text>Email</text>
            <input className='Email' placeholder='Your email'></input>
            <text>Password</text>
            <input className='Password' placeholder='Your password'></input>
            <button>Login</button>
    </div>
    )
}

