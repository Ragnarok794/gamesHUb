import {update} from '../../utils/TictacToeUtils/Update.js'
import {testResult} from '../../utils/TictacToeUtils/TestResult.js'
import {player1,player2} from '../../components/tictactoeGame/tictactoeGame.jsx'


export const functionChecker = (state,dispacth, row, col, cell,user,dispacthContext) =>{
    if (!state.isAWinner && cell === null){
        dispacth({type: 'Change Turn'})
        const copyGame = [...state.game]  
     const updated = update(copyGame,state.turn,row,col)      
        const newResult = testResult(updated,player1,player2)
     if(newResult === '❌'){
        dispacth({type:'WIN_X'})
        if(user){
            dispacthContext({type:'WinX'})}

        }
    
    if(newResult === '⭕'){
        dispacth({type:'WIN_O'})
        if(user){
            dispacthContext({type:'WinO'})

        }
    
    }
    if(newResult === 'tie'){
        dispacth({type: 'TIE'})
        if(user){
            dispacthContext({type:'Tie'})

        }
    }
    return {...state, 
        game:updated,
        result: newResult
    }
}}