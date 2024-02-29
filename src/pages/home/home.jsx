import React from 'react'
import './home.css'

import { NavLink } from 'react-router-dom'
const Home = () => {
  const routes = ['TicTacToe','Hangman','Sudoku']

  return (
    <div className='home'>
          {routes.map((route)=>
          <div className='games' key={route}>
              <NavLink to={route}>
            <div className='img_game'>
              <img src={`${route}.png`}/>  
            </div></NavLink>   
            <NavLink to={route}>
            <div className='buttons'>
                <button >{route}</button>
            </div>  
            </NavLink>
            {/* //Pongo dos NavLink a la misma ruta para que solo me diriga 
            //si pincho la imagen o el boton y no fuera de ellos. */}
          </div> 
          )}
       
    </div>
  )
}

export default Home