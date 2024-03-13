import React, { useEffect, useReducer} from 'react'
import './tictactoeGame.css'
import reducer from '../../reducer/TicTacToe/reducer';
import {initialStateGame} from '../../reducer/TicTacToe/initialStates';
 export   const player1 = '❌'
 export  const player2 = '⭕'

const TictactoeGame = ({onDataRecived}) => {
  
const [state, dispatch]= useReducer(reducer, initialStateGame);

const handleClick =(rowIndex,colIndex,cell)=>{
  dispatch({type: 'game', payload:{row: rowIndex, col: colIndex, cell: cell}})}
    useEffect(()=>{onDataRecived(state.result)},[state.result])
  

  return (
    <><div className='containter_tictac'>
    <p>Jugador 1: {player1} Victorias: {state.victorysX} </p> <p>Jugador 2: {player2} Victorias: {state.victorysO}</p>
    <p>Empates: {state.tie}</p>
    
    <h3>Es el turno del jugador: {state.turn}</h3>
     </div>
     
    <table>
        <tbody>
        {state.game.map((row, rowIndex)=>(
        <tr key={rowIndex}>
          {  row.map((cell,colIndex)=>(
                <td key={colIndex}>
            
                    <button onClick={()=>{handleClick(rowIndex,colIndex,cell)}} value={cell}>{cell}</button>
                </td>))}  
        </tr>
        ))}
     </tbody>
    </table>
    
    <button onClick={()=>{
      dispatch({type: 'reset_game'})
       onDataRecived('')
       }}>Reiniciar juego</button>
    </>
  )
}

export default TictactoeGame