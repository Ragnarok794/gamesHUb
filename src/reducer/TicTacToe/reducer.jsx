

const reducer = (state, action) => {
  switch (action.type){
    case 'Change Turn':
      return {...state,
       turn: state.turn === '❌' ? '⭕' : '❌'
      }
    case 'WIN_X':
      return {...state,
        isAWinner: true,
        victorysX: state.victorysX +1,
        visible1:true
        }
    case 'WIN_O':
      return {...state,
        isAWinner: true,
         victorysO: state.victorysO +1,
         visible2:true
      }
    case 'TIE':
      return {...state,
        isAWinner: true,
        tie: state.tie +1,
        visibleTie: true,
        }

    case 'reset_game':
        return {...state,
            game: [
                [null, null, null],
                [null, null, null],
                [null, null, null],
              ],
            turn: '❌',
            isAWinner:false,
            visible1: false,
            visible2: false,
            visibleTie: false
                }
              
    default: return state;
}  
}

export default reducer
