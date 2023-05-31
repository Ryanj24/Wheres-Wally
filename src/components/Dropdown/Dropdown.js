import React from 'react'
import './Dropdown.css'
import Waldo from '../../assets/Waldo.jpg'
import Wenda from '../../assets/Wenda.jpg'
import Wizard from '../../assets/Wizard.jpg'
import Odlaw from '../../assets/Odlaw.jpg'

const Dropdown = () => {

  return (
    <div className='dropdown-menu'>
        <h3>Who did you find?</h3>
        <ul>
            <li><button><img src={Waldo} alt="Waldo"/>Waldo</button></li>
            <li><button><img src={Wenda} alt="Wenda"/>Wenda</button></li>
            <li><button><img src={Wizard} alt="Whitebeard"/>Whitebeard</button></li>
            <li><button><img src={Odlaw} alt="Odlaw"/>Odlaw</button></li>
        </ul>
    </div>
  )
}

export default Dropdown