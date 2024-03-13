import React, {  useReducer, useState } from 'react'
import './tictactoePage.css'
import ButtonStartAndBack from '../../components/buttonStartAndBack/buttonStartAndBack'
import TictactoeGame from '../../components/tictactoeGame/tictactoeGame'
import PopupMessage from '../../components/Popup/PopupMessage'
import reducer from '../../reducer/TicTacToe/reducer'
import { initialStateTIC } from '../../reducer/TicTacToe/initialStates'
const TicTacToePage = () => {
const [state, dispatch]=useReducer(reducer,initialStateTIC)
const [display, setDisplay]=useState(false)


const handleDisplay=(ev)=>{
  setDisplay(ev)
}

  return (
    <div className='tictactoe'>
        {display === true && 
        <div className='gameBoardTic'>
          <TictactoeGame  state={state} dispatch={dispatch}/>
           </div>}
            <PopupMessage message={'Gana el jugador 1'} visible={state.visible1}/>
            <PopupMessage message={'Gana el jugador 2'} visible={state.visible2}/>
            <PopupMessage message={'Empate'}name={'tie'} visible={state.visibleTie}/>
        
        <ButtonStartAndBack onDataRecived={handleDisplay}/>
         
      
    </div>
  )
}

export default TicTacToePage