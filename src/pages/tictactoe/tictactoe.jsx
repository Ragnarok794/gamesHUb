import React, { useState } from 'react'
import './tictactoe.css'
import ButtonStartFinish from '../../components/button/buttonStartFinish'
import TictactoeGame from '../../components/tictactoeGame/tictactoeGame'
const TicTacToe = () => {
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

        
        <ButtonStartFinish onDataRecived={handleDisplay}/>
         
      
    </div>
  )
}

export default TicTacToe