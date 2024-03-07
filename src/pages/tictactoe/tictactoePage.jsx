import React, { useEffect, useState } from 'react'
import './tictactoePage.css'
import ButtonStartAndBack from '../../components/button/buttonStartAndBack'
import TictactoeGame from '../../components/tictactoeGame/tictactoeGame'
import PopupMessage from '../../components/Popup/PopupMessage'
const TicTacToePage = () => {
const [display , setDisplay]=useState(false)
const [visible1, setVisible1]=useState(false)
const [visible2, setVisible2]=useState(false)
const [visibleTie, setVisibleTie]=useState(false)
const [name,setName]=useState('')
const player1 = '❌'
const player2 = '⭕'
const winner = (ev) =>{
  if(ev === player1){
setVisible1(true)
  }
  if(ev === player2){
    setVisible2(true)
  }
  if(ev === 'tie'){
    setVisibleTie(true)
    setName('tie')

  }
  if(ev === ''){
    setVisible1(false)
    setVisible2(false)
    setVisibleTie(false)
  }
}

const handleDisplay=(ev)=>{
  setDisplay(ev)
}

  return (
    <div className='tictactoe'>
        {display === true && 
        <div className='gameBoardTic'>
          <TictactoeGame onDataRecived={winner}/>
           </div>}
            <PopupMessage message={'Gana el jugador 1'} visible={visible1}/>
            <PopupMessage message={'Gana el jugador 2'} visible={visible2}/>
            <PopupMessage message={'Empate'}name={name} visible={visibleTie}/>
        
        <ButtonStartAndBack onDataRecived={handleDisplay}/>
         
      
    </div>
  )
}

export default TicTacToePage