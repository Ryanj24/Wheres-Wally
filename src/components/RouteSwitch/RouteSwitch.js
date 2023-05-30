import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import StartPage from '../StartPage/StartPage'
import GameInstructions from '../GameInstructions/GameInstructions.js'



const RouteSwitch = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path='/' element={<StartPage />}/>
            <Route path='GameInstructions' element={<GameInstructions />}/>
        </Routes>
    </HashRouter>
  )
}

export default RouteSwitch