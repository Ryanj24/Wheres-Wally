import React from 'react'
import './StartPage.css'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {

    const navigate = useNavigate();

  return (
    <div className='main-container'>
        <h1>Where's Wally?</h1>
        <button onClick={() => navigate('/GameInstructions')}>Start Game</button>
    </div>
  )
}

export default StartPage