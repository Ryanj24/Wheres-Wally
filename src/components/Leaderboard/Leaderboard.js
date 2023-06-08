import React, { useEffect, useState } from 'react'
import './Leaderboard.css'
import background from '../../assets/bg.jpg'
import Logo from '../../assets/logo.png'
import Entry from './Entry'
import { collection, getDoc, getDocs, setIndexConfiguration } from 'firebase/firestore'
import { db } from '../../config/firebase'

const Leaderboard = () => {

  const [entries, setEntries] = useState([]);
  const [counter, setCounter] = useState(0);

  const styles = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  }

  useEffect(() => {
    const getEntries = async () => {

      const data = await getDocs(collection(db, "leaderboard"));

      setEntries(data.docs.map(doc => ({...doc.data()})));
    }

    getEntries();
  }, [])
  return (
    <div className='leaderboard-container' style={styles}>
      <div className='leaderboard'>
          <header>
            <img src={Logo} alt="Where's Wally Logo"/>
            <h1>Leaderboard</h1>
          </header>
          <div className='leaderboard-entries'>
            {entries.sort((a, b) => ((a.minutes*60 + a.seconds) - (b.minutes*60 + b.seconds))).map((entry, index) => 
              <Entry 
              key={index + 1}
              index={index + 1}
              name={entry.name}
              minutes={entry.minutes}
              seconds={entry.seconds}
              />
            )}
          </div>
      </div>
    </div>
  )
}

export default Leaderboard