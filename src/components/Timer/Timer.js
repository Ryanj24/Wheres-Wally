import React from 'react'
import './Timer.css'

const Timer = ({ minutes, seconds, gameOver }) => {
  return (
    <h2>{minutes}:{seconds}</h2>
  )
}

export default Timer