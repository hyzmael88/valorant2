
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import AppLevelContext from './context/AppLevelContext'
import {useContext, useEffect} from 'react'

function App() {
  
  const {fetchAgents, agents} = useContext(AppLevelContext)

  useEffect(()=>{
    fetchAgents()
  }, [])

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <Routes>
        <Route path='/' element={<Home agents = {agents} />}/>
        <Route path='/weapons' element={<Weapons/>}/>
        <Route path='/maps' element={<Maps/>}/>
      </Routes>

      <Footer/>
    
    </div>
  )
}

export default App
