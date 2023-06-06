import React, {useEffect, useRef, useState } from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'
import Waldo from '../../assets/Waldo.png'
import Wenda from '../../assets/Wenda.png'
import Wizard from '../../assets/Wizard.png'
import Odlaw from '../../assets/Odlaw.png'
import Timer from '../Timer/Timer'

const Navbar = ({ gameOver }) => {

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerID = useRef();

  const startTimer = () => {
    timerID.current = setInterval(() => {
    setSeconds(prev => prev + 1);
    }, 1000)
  }

  const stopTimer = () => {
    clearInterval(timerID.current);
    timerID.current = 0;
  }

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerID.current);
  }, [])

  useEffect(() => {

    if (gameOver) {
      stopTimer();
    }

  }, [gameOver])

  return (
    <header className='nav-container'>
      <img src={Logo} alt="Where's Wally Logo"/>
      <div className='characters'>
        <img src={Waldo} alt="Waldo" className='nav-images'/>
        <img src={Wenda} alt="Wenda" className='nav-images'/>
        <img src={Wizard} alt="Wizard Whitebeard" className='nav-images'/>
        <img src={Odlaw} alt="Odlaw" className='nav-images'/>
      </div>
      <div className='timer'>
        <h1>Time:</h1>
        <Timer 
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </header>
  )
}

export default Navbar