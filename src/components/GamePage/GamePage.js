import React, { useState } from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'
import Dropdown from '../Dropdown/Dropdown'

const GamePage = () => {


  const [characters, setCharacters] = useState([
    {name: "Waldo", pos: [1189, 432], found: false},
    {name: "Wenda", pos: [1485, 472], found: false},
    {name: "Whitebeard", pos: [518, 403], found: false},
    {name: "Odlaw", pos: [209, 406], found: false},
  ])

  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleClick = (e) => {

    /*
    const container = document.querySelector(".location-container")

    Position of image div from top and left of document
    console.log(container.offsetTop)
    console.log(container.offsetLeft)*/

    setShowMenu(prev => true);
    setXPos(e.clientX - e.target.getBoundingClientRect().left);
    setYPos(e.clientY - e.target.getBoundingClientRect().top);

    /*
    console.log(`X: ${e.clientX - e.target.getBoundingClientRect().left}`);
    console.log(`Y: ${e.clientY - e.target.getBoundingClientRect().top}`);*/

    
  }
  return (
    <>
      {showMenu ? (
        <>
          <Navbar />
          <div className='location-container' style={{position: "relative"}}>
            <img src={Beach} alt="Beach scene" onClick={(e) => handleClick(e)}/>
            <Dropdown 
            xPos = {xPos}
            yPos = {yPos}
            setShowMenu = {setShowMenu}
            characters = {characters}
            setCharacters = {setCharacters}
          />
          </div>
        </>
      ) : (
        <>
        <Navbar />
        <div className='location-container'>
          <img src={Beach} alt="Beach scene" onClick={(e) => handleClick(e)}/>
        </div>
        </>
      )}
    </>
  )
}

export default GamePage