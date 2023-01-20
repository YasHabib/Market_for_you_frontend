import React from 'react'

function RegistrationInputsPage1() {
  return (
     <div>
       <table>
         <tbody>
           <td>
             <tr><text>First Name</text></tr>
             <tr><input className='FirstNameInput' placeholder='Your first name'></input></tr>
             <tr><text>Last Name</text></tr>
             <tr><input className='LastNameInput' placeholder='Your last name'></input></tr>
             <tr><text>Email</text></tr>
             <tr><input className='EmailInput' placeholder='Your email'></input></tr>
             <tr><text>Phone</text></tr>
             <tr><input className='PhoneInput'></input></tr>
           </td>
           <td>
            <tr><text>Street Address</text></tr>
            <tr><input className='RegistrationInputs' placeholder='Default pickup address'></input></tr>
            <tr>City</tr>
            <tr><select className='CityInputs'>
                  <option value="Brooks">Brooks</option>
                  <option value="Calgary">Calgary</option>
                  <option value="Comrose">Camrose</option>
              </select>
            </tr>
           </td>
         </tbody>
       </table>
    </div>
  )
}

export default RegistrationInputsPage1;