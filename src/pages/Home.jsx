import { useContext, useEffect } from 'react'
import AppLevelContext from '../context/AppLevelContext'
import AgentList from '../components/AgentList'

import Jugabilidad from '../assets/img/jugabilidad.png'
import Agentes from '../assets/img/agentes.png'
import Heaven from '../assets/img/haven.png'


import "./styles/Home.css";

function Home() {
    
  return (
        <div className="contenedor-Home">
            
            
            <div className="seccion1">
                <div className="encabezado">
                        <p>Un juego de disparos táctico 5v5 basado en personajes</p>
                        <h1>Valorant</h1>
                        <button type="button" className="btn btn-danger enlace">Jugar</button>
                </div>
            </div> 
       
            <div className="seccion2 ">
                   <div className="texto1">
                        <h2 className='mt-4'>Somos Valorant</h2>
                        <h3>Desafía los límites</h3>
                        <p>Combina tu estilo y experiencia en un escenario global y competitivo. 
                        Tienes 13 rondas para atacar y defender tu lado con armas precisas y habilidades tácticas. 
                        Además, al contar con una sola vida por ronda, tendrás que pensar más rápido que tu oponente si quieres sobrevivir. 
                        Enfréntate a enemigos en los modos competitivo y normal, así como en Deathmatch y Spike Rush.</p>
                        <button type="button" className="btn btn-danger enlace">Jugabilidad</button>
                    </div> 

                    <div className="foto1">
                        <img src={Jugabilidad} className="img-fluid" alt=""/>
                    </div>
            </div>

             <div className="seccion3">
                <div className="foto2">
                    <img src={Agentes} alt=""/>
                </div>

                <div className="texto2">
                    <h2>Tus Agentes</h2>
                    <h3>La creatividad es tu mejor arma</h3>
                    <p>Más allá de las armas y las balas, podrás elegir a un agente dotado de habilidades versátiles, 
                        veloces y letales con las que crearás oportunidades para sobresalir. Ningún agente se jugará igual, 
                        ni ningún momento memorable se verá igual.</p>
                        <button type="button" className="btn btn-danger enlace">Ver Agentes</button>
                </div>       
            </div>
        
            <div className="seccion4">
                <div className="texto3">
                    <h2>Tus Mapas</h2>
                    <h3>Pelea alrededor del mundo</h3>
                    <p>Cada mapa es un campo de batalla para demostrar tu pensamiento creativo. Están diseñados especialmente 
                        para estrategias de equipo, jugadas espectaculares y momentos para remontar. Haz la jugada que otros imitarán en el futuro.</p>
                        <button type="button" className="btn btn-danger enlace">Ver Mapas</button>

                    </div>

                <div className="foto3">
                    <img src={Heaven} alt=""/>
                </div>
            </div>

             <footer id='home'>
                <div className="autor" id='autor-home'>
                    <p>Riot games, inc, riot games, VALORANT, and any associated logos are trademarks, service marks, and/or registered trademarks of riot games, inc.</p>
                </div> 
            </footer>
            </div>
  )
}

export default Home