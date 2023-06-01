import React from 'react'
import './Dropdown.css'
import Waldo from '../../assets/Waldo.jpg'
import Wenda from '../../assets/Wenda.jpg'
import Wizard from '../../assets/Wizard.jpg'
import Odlaw from '../../assets/Odlaw.jpg'

const Dropdown = ({ xPos, yPos, setShowMenu }) => {

  const handleSelection = (e) => {
    console.log(e.target.value)
    setShowMenu(false);
  }

  return (
    <div className='dropdown-menu' style={{
      position: "absolute",
      left: `${xPos}px`,
      top: `${yPos}px`,
    }}>
        <h3>Who did you find?</h3>
        <ul>
            <li><button onClick={(e) => handleSelection(e)} value="Waldo"><img src={Waldo} alt="Waldo"/>Waldo</button></li>
            <li><button onClick={(e) => handleSelection(e)} value="Wenda"><img src={Wenda} alt="Wenda"/>Wenda</button></li>
            <li><button onClick={(e) => handleSelection(e)} value="Whitebeard"><img src={Wizard} alt="Whitebeard"/>Whitebeard</button></li>
            <li><button onClick={(e) => handleSelection(e)} value="Odlaw"><img src={Odlaw} alt="Odlaw"/>Odlaw</button></li>
        </ul>
    </div>
  )
}

export default Dropdown