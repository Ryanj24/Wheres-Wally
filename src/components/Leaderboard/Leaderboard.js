import React from 'react'
import './Leaderboard.css'
import background from '../../assets/bg.jpg'
import Logo from '../../assets/logo.png'
import Entry from './Entry'

const Leaderboard = () => {

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  }
  return (
    <div className='leaderboard-container' style={styles}>
      <div className='leaderboard'>
          <header>
            <img src={Logo} alt="Where's Wally Logo"/>
            <h1>Leaderboard</h1>
          </header>
          <div className='leaderboard-entries'>
            
          </div>
      </div>
    </div>
  )
}

export default Leaderboard