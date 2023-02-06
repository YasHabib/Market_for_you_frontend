import React from 'react'
import './RegistrationInputs.css'

function RegistrationInputsPage1() {
  return (
     <div className='Registration-Popup'>
        <br></br><br></br>
        <text className='Welcome' style={{color: "#9349DE"}}>Welcome to Market For You!</text>
        <br></br>
        <p className='Paragraph'>It’s nice to meet you. At MKTFY you are able to buy, sell and donate awesome stuff to a community of awesome people. Please fill out the form below to get started.</p>
         <br></br>
      <form className='Login-Form'>
        <table>
          <tbody>
            <td className='Registraton-Column-One'>
              <tr><text>First Name</text></tr>
              <tr><input type={'text'} className='FirstNameInput' placeholder='Your first name'></input></tr>
              <tr><text>Last Name</text></tr>
              <tr><input type={'text'} className='LastNameInput' placeholder='Your last name'></input></tr>
              <tr><text>Email</text></tr>
              <tr><input type={'email'} className='EmailInput' placeholder='Your email'></input></tr>
              <tr><text>Phone</text></tr>
              <tr><input type={"tel"} className='PhoneInput' placeholder='Your phone number'></input></tr>
            </td>
            <td className='Registration-Column-Two'>
              <tr><label>Street Address</label></tr>
              <tr><input className='RegistrationInputs' placeholder='Default pickup address'></input></tr>
              <tr>City</tr>
              <tr><select className='CityInputs'>
                    <option value="Brooks">Brooks</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Comrose">Camorse</option>
                </select>
                <br></br>
                <button className='Registration-Next'>Next</button>
              </tr>
            </td>
          </tbody>
        </table>
       </form>
    </div>
  )
}

export default RegistrationInputsPage1;