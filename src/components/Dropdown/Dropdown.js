import React from 'react'
import './Dropdown.css'
import Waldo from '../../assets/Waldo.png'
import Wenda from '../../assets/Wenda.png'
import Wizard from '../../assets/Wizard.png'
import Odlaw from '../../assets/Odlaw.png'

const Dropdown = ({ xPos, yPos, setShowMenu, characters, setCharacters, level }) => {


  const handleSelection = (e) => {

    // Select all the character images from the navbar
    const navImages = document.querySelectorAll('.nav-images');

    // Find the index of the selected character from the dropdown list
    const index = [...e.target.parentElement.parentElement.children].indexOf(e.target.parentElement);

    // Filter characters array to the selected character from the dropdown list
    let result = characters.filter(obj => obj.name === e.target.value);

    
    if (foundCharacter(level, result, xPos, yPos)) {
      navImages[index].style.opacity = 0.3;
      characters[index].found = true;
      setCharacters(characters);
    }

    
    setShowMenu(false);
  }


  const foundCharacter = (level, result, xPos, yPos) => {
    if (level.includes("Beach")) {
      if (xPos >= result[0].beachXPosition - 10 && xPos <= result[0].beachXPosition + 10 && yPos >= result[0].beachYPosition - 30 && yPos <= result[0].beachYPosition + 30) {
        return true
      } else {
        return false
      }
    } else {
      if (xPos >= result[0].spaceXPosition - 10 && xPos <= result[0].spaceXPosition + 10 && yPos >= result[0].spaceYPosition - 30 && yPos <= result[0].spaceYPosition + 30) {
        return true
      } else {
        return false
      }
    }
  }


  return (
    <div className='dropdown-menu' style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }}>
        <h3>Which character did you find?</h3>
        <ul>
            <li><img src={Waldo} alt="Waldo"/><button onClick={(e) => handleSelection(e)} value="Waldo">Waldo</button></li>
            <li><img src={Wenda} alt="Wenda"/><button onClick={(e) => handleSelection(e)} value="Wenda">Wenda</button></li>
            <li><img src={Wizard} alt="Whitebeard"/><button onClick={(e) => handleSelection(e)} value="Whitebeard">Whitebeard</button></li>
            <li><img src={Odlaw} alt="Odlaw"/><button onClick={(e) => handleSelection(e)} value="Odlaw">Odlaw</button></li>
        </ul>
    </div>
  )
}

export default Dropdown