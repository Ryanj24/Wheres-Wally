import React from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'

const GamePage = () => {
  return (
    <>
      <Navbar />
      <div className='location-container'>
        <img src={Space} alt="Beach scene"/>
      </div>
    </>
  )
}

export default GamePage