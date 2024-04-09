import React, { useEffect } from "react";

import "./Sudokugame.css";
import {
  createBoard,
  solved,
  writeCell,
} from "../../reducer/Sudoku/actionSudoku";
import { useAuth } from "../../hooks/useAuth";
import { useBookmarks } from "../../hooks/useBookmarkContext.jsx";
const Sudokugame = ({ state, dispatch }) => {
  const { user } = useAuth();
  const { stateContext, dispatchContext } = useBookmarks();

  useEffect(() => {
    createBoard(state, dispatch);
  }, [state.trigg]);

  const handleClick = () => {
    dispatch({ type: "New Game" });
  };

  const handleNumberSelect = (i) => {
    dispatch({ type: "Number Selected", payload: i });
  };
  const handleCell = (rowIndex, colIndex) => {
    writeCell(state, dispatch, rowIndex, colIndex, user, dispatchContext);
  };

  return (
    <>
      <div className="table-container">
        {user ? (
          <>
            {" "}
            <p>Victorias: {stateContext.victoriesSudoku}</p>
            <p>Rendiciones: {stateContext.defeatSudoku}</p>
          </>
        ) : (
          <>
            {" "}
            <p>Victorias: {state.victoryCounter}</p>
            <p>Rendiciones: {state.surrenderCounter}</p>
          </>
        )}

        <p>Fallos: {state.failscounter}</p>
        <table>
          <tbody>
            {state.sudokuBoard &&
              state.sudokuBoard.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => handleCell(rowIndex, colIndex)}
                      className={
                        state.sudokuBoard[rowIndex][colIndex] !== null &&
                        state.sudokuBoard[rowIndex][colIndex] ===
                          state.boardSolved[rowIndex][colIndex]
                          ? "correct"
                          : "wrong"
                      }
                    >
                      {cell === "." ? "" : cell}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
        <br />
        <div className="numbers">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              onClick={() => handleNumberSelect(i)}
              className={`number ${state.selected === i ? "selected" : ""}`}
            >
              <h5>{i}</h5>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleClick}>Nueva partida</button>
      <button
        onClick={() => {
          solved(state, dispatch, user, dispatchContext);
        }}
      >
        Resolver
      </button>
    </>
  );
};

export default Sudokugame;
