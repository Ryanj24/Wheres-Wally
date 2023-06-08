import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Submit.css'

const Submit = ({ minutes, seconds }) => {

  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addToLeaderboard();
    navigate("/Leaderboard");
  }

  const addToLeaderboard = async () => {
    try {
      await addDoc(collection(getFirestore(), "leaderboard"), {
        name: playerName,
        minutes: minutes,
        seconds: seconds
      })
    }
    catch(error) {
      console.error("Failed to add to leaderboard")
    }
  }
  return (
    <>
        <h1>Game Over!</h1>
        
        <h3>Your final time was</h3>

        <h1>{minutes}:{seconds <= 9 ? `0${seconds}` : seconds}</h1>

        <div className='leaderboard-submission'>
            <p>Add your time to the leaderboard!</p>
            <form id='submitForm' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Enter your name..." onChange={(e) => handleChange(e)}/>
                <input type="submit" value="Enter"/>
            </form>
        </div>

    </>
  )
}

export default Submit