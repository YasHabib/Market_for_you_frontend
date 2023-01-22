import React from 'react'
import './HomePage.css'

export default function Dashboard() {
  return (
    <body>
        <header className='Header'>
          <h1>Header</h1>
        </header>
        <div className='Wrapper'>
          <div className='DealsForYou'>
            <h1>DealsForYou</h1>
          </div>
          <span className='CategoryBlock'>
            <h1>Category 1</h1>
          </span>
          <span className='CategoryBlockSide'>
              <h1>Category 2</h1>
          </span>
          <div className='MoreDealsForYou'>
              <h1>More DealsForYou</h1>
          </div>
          <span className='CategoryBlock'>
              <h1>Category 3</h1>
          </span>
          <span className='CategoryBlockSide'>
              <h1>Category 4</h1>
          </span>
          <div className='AppStoreLink'>
          </div>
        </div>
        <footer>
          <h1>footer</h1>
        </footer>
    </body>

  )
}
