import React from 'react'
import './Submit.css'

const Submit = ({ minutes, seconds }) => {
  return (
    <>
        <h1>Game Over!</h1>
        
        <h3>Your final time was</h3>

        <h1>{minutes}:{seconds <= 9 ? `0${seconds}` : seconds}</h1>

        <div className='leaderboard-submission'>
            <p>Enter your name below to add your time to the leaderboard</p>
            <form id='submitForm'>
                <input type="text" placeholder="Name..." />
                <input type="submit" value="Enter"/>
            </form>
        </div>

    </>
  )
}

export default Submit