const reducerSudoku = (state, action) => {
  switch (action.type) {
    case "Board":
      return {
        ...state,
        sudokuBoard: action.payload.board,
        puzzle: action.payload.puzzle,
      };
    case "New Game":
      return {
        ...state,
        sudokuBoard: "",
        trigg: !state.trigg,
        visible: false,
        defeat: "",
      };
    case "Number Selected":
      return { ...state, selected: action.payload };
    case "Update Board":
      return { ...state, sudokuBoard: action.payload };
    case "Solution to compare":
      return {
        ...state,
        boardSolved: action.payload.boardSolved,
        solution: action.payload.solution,
      };
    case "its Wrong":
      return { ...state, failscounter: state.failscounter + 1 };
    default:
      return { ...state };
    case "Victory":
      return {
        ...state,
        message: "Victoria!!",
        visible: true,
        victoryCounter: state.victoryCounter+1,
      };
    case "Defeat":
      return {
        ...state,
        sudokuBoard: action.payload,
        message: "Derrota!!",
        defeat: "Defeat",
        visible: true,
        surrenderCounter: state.surrenderCounter +1,
      };
  }
};

export default reducerSudoku;
