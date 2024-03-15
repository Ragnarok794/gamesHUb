import React from 'react'
import sudoku from 'sudoku';

export const createBoard =(state,dispatch)=>{
    if(!state.sudokuBoard){
        const newBoard = sudoku.makepuzzle();
        const solution = sudoku.solvepuzzle(newBoard)
        const boardMatrix = [];
        const boardSolved = [];
        
    for (let i = 0; i < 9; i++) {
      boardMatrix.push(newBoard.slice(i * 9, (i + 1) * 9));
      boardSolved.push(solution.slice(i * 9, (i + 1) * 9))
    }
    dispatch({type: 'Board', payload:{board: boardMatrix, puzzle: newBoard}})
    dispatch({type: 'Solution to compare', payload:{boardSolved:boardSolved,solution: solution}})
}
}
export const writeCell =(state,dispatch,rowIndex,colIndex)=>{
  const Board = [...state.sudokuBoard];
  const Solved = [...state.boardSolved]
  if(Board[rowIndex][colIndex] === null || Board[rowIndex][colIndex] !==Solved[rowIndex][colIndex]){
   Board[rowIndex][colIndex]= state.selected 
   dispatch({type:'Update Board', payload: Board})
  ;}
  Board[rowIndex][colIndex] ===Solved[rowIndex][colIndex]? '': dispatch({type: 'its Wrong'})
    
  
}
export const solved =(state,dispatch)=>{
  
  console.log(state.solution)
  console.log(state.puzzle)
  console.log(state.sudokuBoard)
}
// const win = (ev)=>{
// if(ev === 'Victory'){
//   setVisible1(true)}
// if(ev === 'Derrota'){
//   setVisible2(true)
//   setName('lose')
// }
// if (ev == ''){
//   setVisible1(false)
//   setVisible2(false)
// }