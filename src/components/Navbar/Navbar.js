import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Waldo from '../../assets/Waldo.jpg'
import Wenda from '../../assets/Wenda.jpg'
import Wizard from '../../assets/Wizard.jpg'
import Odlaw from '../../assets/Odlaw.jpg'

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