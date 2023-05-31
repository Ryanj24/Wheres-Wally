import React from 'react'
import './StartPage.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import bg from '../../assets/bg.jpg'

const StartPage = () => {

    const navigate = useNavigate();

    const styles = {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
    }
  return (
    <div className='main-container' style={styles}>
        <img src={Logo} alt="Where's Wally Logo"/>
        <button onClick={() => navigate('/GameInstructions')}>START GAME</button>
    </div>
  )
}

export default StartPage