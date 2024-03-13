import {update} from '../../utils/TictacToeUtils/Update'
import {testResult} from '../../utils/TictacToeUtils/TestResult'
import { player1,player2 } from '../../components/tictactoeGame/tictactoeGame'
export const functionChecker = (state,dispacth, row, col, cell) =>{
    if (!state.isAWinner && cell === null){
        dispacth({type: 'Change Turn'})
        const copyGame = [...state.game]  
     const updated = update(copyGame,state.turn,row,col)      
        const newResult = testResult(updated,player1,player2)
     if(newResult === player1){
        dispacth({type:'WIN_X'})
    }
    if(newResult === player2){
        dispacth({type:'WIN_O'})
    }
    if(newResult === 'tie'){
        dispacth({type: 'TIE'})
    }
    return {...state, 
        game:updated,
        result: newResult
    }
}}