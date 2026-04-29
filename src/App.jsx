import React from 'react'
import Navbar from './components/navbar/Navbar'
import "./App.css"
import "./index.css"
import Intro from './components/Intro'
import Remembership from './components/Remembership'
import SecondPage from './components/SecondPage'
import {Routes, Route } from 'react-router-dom'

const App = () => {
  return (
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Intro />
            <Remembership />
          </div>
        } />
        <Route path="/featured" element={<SecondPage />} />
        <Route path="/deals" element={<SecondPage />} />
        <Route path="/points" element={<SecondPage />} />
        <Route path="/perks" element={<SecondPage />} />
      </Routes>
  )
}

export default App
