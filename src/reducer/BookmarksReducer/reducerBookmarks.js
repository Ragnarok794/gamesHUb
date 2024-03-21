
const reducerBookmarks = (state,action) => {
  switch(action.type){
case 'WinX':
    return {...state, victoriesTictacToeX: state.victoriesTictacToeX+1}
    case 'WinO':
        return {...state, victoriesTictacToeO: state.victoriesTictacToeO+1}
    case 'Tie':
        return{...state, tieTicTac: state.tieTicTac+1}
    case "Add a Victory":
        return {...state,victoriesHangman: state.victoriesHangman+1}
    case 'Add a Defeat':
    return {...state,defeatHangman: state.defeatHangman+1 }
    case 'Victory Sudoku':
        return {...state, victoriesSudoku: state.victoriesSudoku+1}

    case 'Defeat Sudoku':
        return {...state, defeatSudoku: state.defeatSudoku+1}
  default: return {...state}  }
  }


export default reducerBookmarks