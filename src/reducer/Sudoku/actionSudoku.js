import sudoku from "sudoku";

export const createBoard = (state, dispatch) => {
  if (!state.sudokuBoard) {
    const newBoard = sudoku.makepuzzle();
    const solution = sudoku.solvepuzzle(newBoard);
    const boardMatrix = [];
    const boardSolved = [];

    for (let i = 0; i < 9; i++) {
      boardMatrix.push(newBoard.slice(i * 9, (i + 1) * 9));
      boardSolved.push(solution.slice(i * 9, (i + 1) * 9));
    }
    dispatch({
      type: "Board",
      payload: { board: boardMatrix, puzzle: newBoard },
    });
    dispatch({
      type: "Solution to compare",
      payload: { boardSolved: boardSolved, solution: solution },
    });
  }
};
export const writeCell = (
  state,
  dispatch,
  rowIndex,
  colIndex,
  user,
  dispatchContext
) => {
  const board = [...state.sudokuBoard];
  const solved = [...state.boardSolved];
  let rowcorrect = 0;
  if (
    board[rowIndex][colIndex] === null ||
    board[rowIndex][colIndex] !== solved[rowIndex][colIndex]
  ) {
    board[rowIndex][colIndex] = state.selected;
    board[rowIndex][colIndex] === solved[rowIndex][colIndex]
      ? ""
      : dispatch({ type: "its Wrong" });
    dispatch({ type: "Update Board", payload: board });
    for (let i = 0; i < board.length; i++) {
      if (JSON.stringify(board[i]) === JSON.stringify(solved[i])) {
        rowcorrect++;
      }
      if (rowcorrect === 9) {
        dispatch({ type: "Victory" });
        if (user) {
          dispatchContext({ type: "Victory Sudoku" });
        }
      }
    }
  }
};
export const solved = (state, dispatch, user, dispatchContext) => {
  const board = [...state.sudokuBoard];
  const solved = [...state.boardSolved];
  let rowresolved = 0;

  const result = window.confirm(
    "¿Estás seguro de querer continuar, si no has completado el tablero perderas la partida?"
  );
  if (result) {
    board.forEach((element) => {
      if (element.includes(null)) {
        rowresolved + 1;
      }
    });

    if ((rowresolved = 9)) {
      dispatch({ type: "Defeat", payload: solved });
      if (user) {
        dispatchContext({ type: 'Defeat Sudoku' });
      }
    }
  }
};
