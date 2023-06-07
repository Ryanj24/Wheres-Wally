import React from 'react'
import './Entry.css'

const Entry = ({ index, name, minutes, seconds }) => {
  return (
    <div className='entry-container'>
        <div className='playerRank'><h1>{index}</h1></div>
        <div className='playerName'><h1>{name}</h1></div>
        <div className='playerTime'><h1>{minutes}:{seconds}</h1></div>
    </div>
  )
}

export default Entry