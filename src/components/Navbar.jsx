import React from 'react'
import './styles/Navbar.css'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    

<nav className="navbar navbar-expand-lg bg-danger">
<div className="container-fluid">
<img src={Logo} className="logo"/>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link to="/" className='link'>Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/agents" className='link'>Agentes</Link>
      </li>
      <li className="nav-item">
      <Link to="/weapons"className='link'>Armas</Link>
      </li>
      <li className="nav-item">
      <Link to="/maps"className='link'>Mapas</Link>
      </li>
    </ul>
  </div>
</div>
</nav>
  )
}

export default Navbar