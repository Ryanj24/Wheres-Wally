import React, { useEffect, useState } from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'
import Dropdown from '../Dropdown/Dropdown'
import Submit from '../Leaderboard/Submit'
import { db } from '../../config/firebase'
import { getDocs, collection } from 'firebase/firestore'


const GamePage = () => {

  const [characters, setCharacters] = useState([]);

  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [level, setLevel] = useState(Beach);

  const [gameOver, setGameOver] = useState(false);



  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(collection(db, 'characters'));
      
      const responseData = data.docs.map(doc => ({...doc.data()}))

      setCharacters(responseData);
    }

    getCharacters();
  }, []);


  useEffect(() => {
    if (level.includes("Beach") && characters.length !== 0 && characters.filter(character => character.found === false).length === 0) {
      setLevel(Space);

      resetCharacters();
      // Select all the character images from the navbar
      const navImages = document.querySelectorAll('.nav-images');
      navImages.forEach(image => image.style.opacity = 1);
    } else if (level.includes("Space") && characters.filter(character => character.found === false).length === 0) {
      setGameOver(true);
    }
  })

  useEffect(() => {
    if (gameOver) {
      document.querySelector('.submit-score-container').classList.add("active");
    }
  }, [gameOver])
  

  const handleClick = (e) => {
    setShowMenu(prev => true);
    setXPos(e.clientX - e.target.getBoundingClientRect().left);
    setYPos(e.clientY - e.target.getBoundingClientRect().top);
  }

  const resetCharacters = () => {
    
    const charactersCopy = characters.map(character => ({...character, found: false}));

    setCharacters(charactersCopy);

  }

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  return (
    <>
      {showMenu ? (
        <>
          <Navbar 
            gameOver={gameOver}
            minutes={minutes}
            setMinutes={setMinutes}
            seconds={seconds}
            setSeconds={setSeconds}
          />
          <div className='location-container' style={{position: "relative"}}>
            <img id="game-bg" src={level} alt="Beach scene" onClick={(e) => handleClick(e)}/>
            <Dropdown 
            xPos = {xPos}
            yPos = {yPos}
            setShowMenu = {setShowMenu}
            characters = {characters}
            setCharacters = {setCharacters}
            level = {level}
            setLevel = {setLevel}
          />
          </div>
        </>
      ) : (
        <>
        <Navbar 
        gameOver={gameOver}
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        />
        <div className='location-container'>
          <img src={level} alt="Beach scene" onClick={(e) => handleClick(e)}/>
        </div>
        <div className='submit-score-container'>
          <div className='submit-score-modal'>
              <Submit 
              minutes={minutes}
              seconds={seconds}/>
          </div>
        </div>
        </>
      )}
    </>
  )
}

export default GamePage