import React from 'react'

function ForgotPassword() {
  return (
    <div>
        <h3>Forgot Your Password?</h3>
        <p>It’s okay, these things happen. Please enter your email in the field below. We will send you an email to reset your password.</p>
        <form>
            <label>Email</label>
            <input type={'email'}></input>
            <input type={'submit'}></input>
        </form>
    </div>
  )
}

export default ForgotPassword