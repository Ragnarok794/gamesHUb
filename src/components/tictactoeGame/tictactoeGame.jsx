import React, { useEffect, useReducer } from "react";
import "./tictactoeGame.css";
import { functionChecker } from "../../reducer/TicTacToe/actions.js";
import { useAuth } from "../../hooks/useAuth";
import { useBookmarks } from "../../hooks/useBookmarkContext";

export const player1 = "❌";
export const player2 = "⭕";

const TictactoeGame = ({ state, dispatch }) => {
  const { user } = useAuth();
  const {stateContext, dispatchContext } = useBookmarks();

  const handleClick = (row, col, cell) => {
    functionChecker(state, dispatch, row, col, cell, user, dispatchContext);
  };
  useEffect(() => {
    dispatch({ type: "reset_game" });
  }, []);

  return (
    <>
      <div className="containter_tictac">
        
          <>
            <p>
              Jugador 1: {player1} Victorias:{user? stateContext.victoriesTictacToeX: state.victorysX}{" "}
            </p>{" "}
            <p>
              Jugador 2: {player2} Victorias: { user?  stateContext.victoriesTictacToeO : state.victorysO}
            </p>
          </>
     

        <p>Empates: {state.tie}</p>

        <h3>Es el turno del jugador: {state.turn}</h3>
      </div>

      <table className="tableTicTac">
        <tbody>
          {state.game.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <button
                    onClick={() => {
                      handleClick(rowIndex, colIndex, cell);
                    }}
                    value={cell}
                  >
                    {cell}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => {
          dispatch({ type: "reset_game" });
        }}
      >
        Reiniciar juego
      </button>
    </>
  );
};

export default TictactoeGame;
