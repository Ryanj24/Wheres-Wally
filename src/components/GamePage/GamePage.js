import React from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'
import Dropdown from '../Dropdown/Dropdown'

const GamePage = () => {

  const handleClick = (e) => {

    const container = document.querySelector(".location-container")

    // Position of image div from top and left of document
    console.log(container.offsetTop)
    console.log(container.offsetLeft)
    
    console.log(e.clientX);
  }
  return (
    <>
      <Navbar />
      <div className='location-container'>
        <img src={Beach} alt="Beach scene" onClick={(e) => handleClick(e)}/>
      </div>
      <Dropdown />
    </>
  )
}

export default GamePage