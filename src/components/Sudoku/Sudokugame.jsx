import React, { useState, useEffect } from 'react';
import sudoku from 'sudoku';
import './Sudokugame.css';

const Sudokugame = () => {
  const [sudokuBoard, setSudokuBoard] = useState(null);
const [trigg,setTrigg]=useState(false)
const [selected,setSelected]=useState(null)
  
useEffect(() => {
  if(!sudokuBoard){
    const newBoard = sudoku.makepuzzle();
    const boardMatrix = [];
for (let i = 0; i < 9; i++) {
  boardMatrix.push(newBoard.slice(i * 9, (i + 1) * 9));
}
 setSudokuBoard([...boardMatrix]);

 } console.log('me renderizo')},[trigg]);

  const handleNumberSelect=(i)=>{
setSelected(i)
  }
  const handleCell=(rowIndex,colIndex)=>{

    const newBoard = [...sudokuBoard];

    if(newBoard[rowIndex][colIndex] === null){
     newBoard[rowIndex][colIndex]= selected 
     setSudokuBoard(newBoard);}
  }


  return (<>
    <div className='table-container'>
    <table>
      <tbody>
        {sudokuBoard && sudokuBoard.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex} onClick={()=>handleCell(rowIndex,colIndex,)}>{cell === '.' ? '' : cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <br/>
    <div className='numbers'>
    {Array.from({length : 10}).map((_,i)=>(
      <div key={i} onClick={()=>handleNumberSelect(i)} className={`number ${selected === i ? 'selected': ''}`}><h5>{i}</h5></div>
    ))}
    </div></div>
    <button onClick={()=>{setSudokuBoard(''); setTrigg(prevtrigg => !prevtrigg)}}>Nueva partida</button>
    </>
  )
};

export default Sudokugame;
