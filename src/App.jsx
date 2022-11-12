import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import NavBar from './components/NavBar'
import About from './page/About'
import Skills from './page/Skills'
import Article from './page/Article'

function App() {
 
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/article' element={<Article/>} />
        </Routes>
      </>
    )
}

export default App
