import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import NavBar from './components/NavBar'

function App() {
    return (
      <main>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </main>
    )
}

export default App
