import React, { useReducer, useState } from "react";
import "./SudokuPage.css";
import Sudokugame from "../../components/Sudoku/Sudokugame";
import ButtonStartAndBack from "../../components/buttonStartAndBack/buttonStartAndBack";
import PopupMessage from "../../components/Popup/PopupMessage";
import reducerSudoku from "../../reducer/Sudoku/reducerSudoku";
import initialStateSudoku from "../../reducer/Sudoku/initialStateSudoku.js";
const SudokuPage = () => {
  const [state, dispatch] = useReducer(reducerSudoku, initialStateSudoku);
  const [display, setDisplay] = useState(false);

  const handleDisplay = (ev) => {
    setDisplay(ev);
  };

  return (
    <div className="Sudokupage">
      {display === true && (
        <div className="Sudokugame">
          <Sudokugame state={state} dispatch={dispatch} />
        </div>
      )}

      <PopupMessage
        message={state.message}
        name={state.defeat}
        visible={state.visible}
      />

      <ButtonStartAndBack onDataRecived={handleDisplay} />
    </div>
  );
};

export default SudokuPage;
