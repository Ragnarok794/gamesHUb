import React from 'react'

const reducerSudoku = (state,action) => {
 switch(action.type){
    case 'Board':
        return{...state, sudokuBoard: action.payload.board,puzzle:action.payload.puzzle}
    case 'New Game':
        return{...state,sudokuBoard: '',trigg: !state.trigg}
    case 'Number Selected':
        return{...state, selected: action.payload}
    case 'Update Board':
        return{...state, sudokuBoard:action.payload}
    case 'Solution to compare':
        return{...state, boardSolved: action.payload.boardSolved,solution:action.payload.solution}
    case 'its Rigth': 
    return {...state,newData: 'rigth'}
    case 'its Wrong':
        return {...state, newData: 'wrong'}
    default: return {...state}
 }
}

export default reducerSudoku