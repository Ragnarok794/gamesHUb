import React, { useState } from 'react'
import './tictactoeGame.css'
import { update } from '../../utils/TictacToeUtils/Update';
import { testResult } from '../../utils/TictacToeUtils/TestResult';
const TictactoeGame = () => {
    const gamedefault= [
        [null, null, null],
        [null, null, null],
        [null, null, null],
        ];
        const [game,setGame]=useState(gamedefault)
        const player1 = '❌'
        const player2 = '⭕'
        const [turn, setTurn]=useState(player1)
        const [isAWinner, setIsAWinner]=useState(false)
        const [victorysX , setVictorysX]=useState(0)
        const [victorysO , setVictorysO]=useState(0)
        const [tie , setTie]=useState(0)

    const handleClick =(rowIndex,colIndex,cell)=>{
        if(isAWinner === false){
        if (cell === null){
          turn === player1? setTurn(player2): setTurn(player1)}
       const updatedGame = [...game]     
        
     update(updatedGame,turn,rowIndex,colIndex,)
    const result =  testResult(updatedGame,player1,player2)

    if (result === player1){
      setIsAWinner(true)
      let counterVicotry = victorysX +1
      setVictorysX(counterVicotry)}

    if (result === player2){
        setIsAWinner(true)
        let counterVicotry = victorysO +1
        setVictorysO(counterVicotry)}

    if (result === 'tie'){
          setIsAWinner(true)
          let counterTies = tie +1
          setTie(counterTies)}
}
    }
  

  return (
    <><div className='containter_tictac'>
    <p>Jugador 1: {player1} Victorias: {victorysX} </p> <p>Jugador 2: {player2} Victorias: {victorysO}</p>
    <p>Empates: {tie}</p>
    
    <h3>Es el turno del jugador: {turn}</h3>
     </div>
     
    <table>
        <tbody>
        {game.map((row, rowIndex)=>(
        <tr key={rowIndex}>
          {  row.map((cell,colIndex)=>(
                <td key={colIndex}>
            
                    <button onClick={()=>handleClick(rowIndex,colIndex,cell)} value={cell}>{cell}</button>
                </td>))}  
        </tr>
        ))}
     </tbody>
    </table>
    
    <button onClick={()=>{
      setGame(gamedefault); 
      setTurn(player1);
       setIsAWinner(false)
       }}>Finalizar juego</button>
    </>
  )
}

export default TictactoeGame