import React, { useState } from 'react'
import './tictactoePage.css'
import ButtonStartAndBack from '../../components/button/buttonStartAndBack'
import TictactoeGame from '../../components/tictactoeGame/tictactoeGame'
const TicTacToePage = () => {
const [display , setDisplay]=useState(false)

const handleDisplay=(ev)=>{
  setDisplay(ev)
}

  return (
    <div className='tictactoe'>
        {display === true && 
        <div className='gameBoardTic'>
          <TictactoeGame/>
           </div>}

        
        <ButtonStartAndBack onDataRecived={handleDisplay}/>
         
      
    </div>
  )
}

export default TicTacToePage