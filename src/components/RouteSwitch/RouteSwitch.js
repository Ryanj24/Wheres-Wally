import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import StartPage from '../StartPage/StartPage'
import GameInstructions from '../GameInstructions/GameInstructions.js'
import GamePage from '../GamePage/GamePage'
import Leaderboard from '../Leaderboard/Leaderboard'


const RouteSwitch = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<StartPage />}/>
            <Route path='GameInstructions' element={<GameInstructions />}/>
            <Route path='GamePage' element={<GamePage />}/>
            <Route path='Leaderboard' element={<Leaderboard />}/>
        </Routes>
    </HashRouter>
  )
}

export default RouteSwitch