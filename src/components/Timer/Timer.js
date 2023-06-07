import React from 'react'
import './Timer.css'

const Timer = ({ minutes, seconds, gameOver }) => {

  const formatSeconds = (seconds) => {
    if (seconds <= 9) {
      return `0${seconds}`
    } else {
      return seconds
    }
  }

  const formatMinutes = (minutes) => {
    if (minutes <= 9) {
      return `0${minutes}`
    } else {
      return minutes
    }
  }
  return (
    <>
    <h2>{formatMinutes(minutes)}:{formatSeconds(seconds)}</h2>
    </>
  )
}

export default Timer