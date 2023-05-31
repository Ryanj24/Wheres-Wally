import React, { useState } from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'
import Dropdown from '../Dropdown/Dropdown'

const GamePage = () => {

  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  const handleClick = (e) => {

    const container = document.querySelector(".location-container")

    /* Position of image div from top and left of document
    console.log(container.offsetTop)
    console.log(container.offsetLeft)
    
    console.log(e.clientX);*/

    setShowMenu(prev => true);
    setXPos(e.clientX);
    setYPos(e.clientY);

    
  }
  return (
    <>
      {showMenu ? (
        <>
        <Navbar />
        <div className='location-container'>
          <img src={Beach} alt="Beach scene" onClick={(e) => handleClick(e)}/>
        </div>
        <Dropdown xPos = {xPos} yPos = {yPos}/>
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