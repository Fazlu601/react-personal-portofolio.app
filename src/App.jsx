import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import AOS from 'aos';
import Home from './page/Home'
import NavBar from './components/NavBar'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
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
