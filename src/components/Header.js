import React from 'react'
import './Header.css'
import logo from '../assets/MainPage/logo.svg'

function Header() {
  return (
    <header>
        <img className='Logo' src={logo} alt="Logo" />
        <div className='SearchAndCity'>
          <input type={'search'} className='Search' placeholder='Search on MKTFY'></input>
          <select className='CitySelector'>
                    <option value="Brooks">Brooks</option>
                    <option value="Calgary">Calgary</option>
                    <option value="Comrose">Camorse</option>
          </select>
        </div>

    </header>
  )
}

export default Header