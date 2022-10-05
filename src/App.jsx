
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import AppLevelContext from './context/AppLevelContext'
import {useContext, useEffect} from 'react'
import Agents from './pages/Agents'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home  />}/>
        <Route path='/agents' element={<Agents />}/>
        <Route path='/weapons' element={<Weapons/>}/>
        <Route path='/maps' element={<Maps/>}/>
      </Routes>

      <Footer/>
    
    </div>
  )
}

export default App
