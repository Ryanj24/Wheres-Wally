import React from 'react'
import './Dropdown.css'
import Waldo from '../../assets/Waldo.jpg'
import Wenda from '../../assets/Wenda.jpg'
import Wizard from '../../assets/Wizard.jpg'
import Odlaw from '../../assets/Odlaw.jpg'

const Dropdown = ({ xPos, yPos, setShowMenu, characters, setCharacters }) => {

  const handleSelection = (e) => {

    let selectedCharacter = e.target.value;
    const chars = [...characters];

    let result = chars.filter(character => character.name === selectedCharacter);
    //console.log(result);

    console.log(typeof(result[0].pos));
    console.log([xPos, yPos]);

    



    setShowMenu(false);
  }

  return (
    <div className='dropdown-menu' style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
      /*
      left: `${xPos}px`,
      top: `${yPos}px`,*/
    }}>
        <h3>Which character did you find?</h3>
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