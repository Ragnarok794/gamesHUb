
import { player1,player2 } from "../../components/tictactoeGame/tictactoeGame";
import {initialStateGame, initialStatePage} from "./initialStates";
import { update } from "../../utils/TictacToeUtils/Update";
import { testResult } from "../../utils/TictacToeUtils/TestResult";
const reducer = (state, action) => {
  switch (action.type){
    case 'game':
        if (!state.isAWinner && action.payload.cell === null){
            const newTurn = state.turn === player1 ? player2 : player1
            const copyGame = [...state.game]  
         const updated = update(copyGame,state.turn,action.payload.row,action.payload.col)      
            const newResult = testResult(updated,player1,player2)
           
         if(state.result === player1){
        return {...state,
        isAWinner: true,
        victorysX: state.victorysX +1
        }}
        if(state.result === player2){
        return {...state,
        isAWinner: true,
         victorysO: state.victorysO +1
        }}
        if(state.result === 'tie'){
        return {...state,
        isAWinner: true,
        tie: state.tie +1
        }}
        return {...state, 
            turn: newTurn,
            game:updated,
            result: newResult
        }
       
    } 
    return{...state}     
    case 'reset_game':
        return {...state,
            game: [
                [null, null, null],
                [null, null, null],
                [null, null, null],
              ],
            turn: player1,
            isAWinner:false
        }
    case 'ShowWinner':
        if(action.payload === player1){
            return{...state,
                visible1:true}
              }
        if(action.payload === player2){
                return{...state,
                    visible2:true}
                  }
        if(action.payload === 'tie'){
                 return{...state,
                    visibleTie:true,
                    name: 'tie'
                    }
                      }
              
         if(action.payload === ''){
                return{...state, 
                visible1: initialStatePage.visible1,
                visible2: initialStatePage.visible2,
                visible3: initialStatePage.visibleTie
                }
              }
    default: return state;
}  
}

export default reducer
