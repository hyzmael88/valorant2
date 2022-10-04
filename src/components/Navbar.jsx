import React from 'react'
import './styles/Navbar.css'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <ul>
            <img src={Logo} className="logo"/>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/agents" className='link'>Agentes</Link></li>
            <li><Link to="/weapons"className='link'>Armas</Link></li>
            <li><Link to="/maps"className='link'>Mapas</Link></li>
        </ul>
    </div>
  )
}

export default Navbar