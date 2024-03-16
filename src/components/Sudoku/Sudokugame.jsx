import React, { useEffect } from 'react';

import './Sudokugame.css';
import { createBoard, solved, writeCell } from '../../reducer/Sudoku/actionSudoku.jsx';

const Sudokugame = ({state,dispatch}) => {


useEffect(()=>{
  createBoard(state,dispatch)
},[state.trigg])
const handleClick= () => {
  dispatch({type: 'New Game'})
  }
  const handleNumberSelect=(i)=>{
    dispatch({type:'Number Selected', payload:(i)})

  }
const handleCell=(rowIndex,colIndex)=>{
writeCell(state,dispatch,rowIndex,colIndex)
  }


  return (<>
    <div className='table-container'>
      <p>Fallos: {state.failscounter}</p>
    <table>
      <tbody>
        {state.sudokuBoard && state.sudokuBoard.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} 
              onClick={()=>handleCell(rowIndex,colIndex,)}
              className={state.sudokuBoard[rowIndex][colIndex] !== null && state.sudokuBoard[rowIndex][colIndex]=== state.boardSolved[rowIndex][colIndex] ? 'correct' : 'wrong'}
              >{cell === '.' ? '' : cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <br/>
    <div className='numbers'>
    {Array.from({length : 9}).map((_,i)=>(
      <div key={i} onClick={()=>handleNumberSelect(i)} className={`number ${state.selected === i ? 'selected': ''}`}><h5 >{i}</h5></div>
    ))}
    </div></div>
    <button onClick={handleClick}>Nueva partida</button>
    <button onClick={()=>{ solved(state,dispatch)}}>solved</button>
    </>
  )
};

export default Sudokugame;
