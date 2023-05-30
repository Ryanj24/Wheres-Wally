import React from 'react'
import './GameInstructions.css'
import { useNavigate } from 'react-router-dom'
import bg from '../../assets/bg.jpg'

const GameInstructions = () => {

  const navigate = useNavigate();

  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
  }
  return (
    <div className='container' style={styles}>
      <div className='instructions-container'>
        
        <h1>Game Instructions</h1>
        
        <span className='game-desc'>
        
        <p>Welcome to Where's Wally?</p>

        <p>When the game begins, your task is simple! Find each of the following characters in each scene as quickly as possible!</p>

        <p>Good Luck!</p>
        </span>
      </div>
      <button onClick={() => navigate('/GamePage')}>Let's Go!</button>
    </div>
  )
}

export default GameInstructions