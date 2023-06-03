import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Waldo from '../../assets/Waldo.png'
import Wenda from '../../assets/Wenda.png'
import Wizard from '../../assets/Wizard.png'
import Odlaw from '../../assets/Odlaw.png'

const Navbar = () => {
  return (
    <header className='nav-container'>
      <img src={Logo} alt="Where's Wally Logo"/>
      <div className='characters'>
        <img src={Waldo} alt="Waldo" className='nav-images'/>
        <img src={Wenda} alt="Wenda" className='nav-images'/>
        <img src={Wizard} alt="Wizard Whitebeard" className='nav-images'/>
        <img src={Odlaw} alt="Odlaw" className='nav-images'/>
      </div>
      <div className='timer'>
        <h1>Time:</h1>
        <h2>00:00</h2>
      </div>
    </header>
  )
}

export default Navbar