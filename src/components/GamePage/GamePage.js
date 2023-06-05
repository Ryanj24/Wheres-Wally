import React, { useEffect, useState } from 'react'
import './GamePage.css'
import Navbar from '../Navbar/Navbar.js'
import Beach from '../../assets/Beach.jpg'
import Space from '../../assets/Space.jpg'
import Dropdown from '../Dropdown/Dropdown'
import { db } from '../../config/firebase'
import { getDocs, collection, doc } from 'firebase/firestore'


const GamePage = () => {

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    const getCharacters = async () => {
      const data = await getDocs(collection(db, 'characters'));
      
      const responseData = data.docs.map(doc => ({...doc.data()}))
      console.log(responseData);
    }

    getCharacters();
  }, []);
  
  /*
  const [characters, setCharacters] = useState([
    {name: "Waldo", pos: [1189, 432], found: false},
    {name: "Wenda", pos: [1485, 472], found: false},
    {name: "Whitebeard", pos: [518, 403], found: false},
    {name: "Odlaw", pos: [209, 406], found: false},
  ])*/

  const [showMenu, setShowMenu] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [level, setLevel] = useState(Beach);

  const handleClick = (e) => {
    setShowMenu(prev => true);
    setXPos(e.clientX - e.target.getBoundingClientRect().left);
    setYPos(e.clientY - e.target.getBoundingClientRect().top);
  }

  useEffect(() => {
    if (characters.filter(character => character.found === false).length === 0) {
      setLevel(Space);
      setCharacters([
        {name: "Waldo", pos: [1189, 432], found: false},
        {name: "Wenda", pos: [1485, 472], found: false},
        {name: "Whitebeard", pos: [518, 403], found: false},
        {name: "Odlaw", pos: [209, 406], found: false},
      ])

      // Select all the character images from the navbar
      const navImages = document.querySelectorAll('.nav-images');
      navImages.forEach(image => image.style.opacity = 1);
    }
  })

  return (
    <>
      {showMenu ? (
        <>
          <Navbar />
          <div className='location-container' style={{position: "relative"}}>
            <img id="game-bg" src={Space} alt="Beach scene" onClick={(e) => handleClick(e)}/>
            <Dropdown 
            xPos = {xPos}
            yPos = {yPos}
            setShowMenu = {setShowMenu}
            characters = {characters}
            setCharacters = {setCharacters}
            setLevel = {setLevel}
          />
          </div>
        </>
      ) : (
        <>
        <Navbar />
        <div className='location-container'>
          <img src={Space} alt="Beach scene" onClick={(e) => handleClick(e)}/>
        </div>
        </>
      )}
    </>
  )
}

export default GamePage