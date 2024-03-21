import React from "react";
import { NavLink } from "react-router-dom";
import { useBookmarks } from "../hooks/useBookmarkContext";
import "./bookmarks.css";
const Bookmarks = () => {
  const { stateContext } = useBookmarks();
  return (
    <div className="bookmarkContainer">
      <div className="bookmarkTableContainer">
        <table className="tableBookmark">
          <thead>
            <tr className="head">
              <td></td>
              {stateContext.games.map((game) => (
                <td key={game}>{game}</td>
              ))}
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="victories">
              <td>Victorias</td>
              <td>
                <table className="Table2">
                  <tbody>
                    <tr>
                      <td>❌</td>
                      <td>{stateContext.victoriesTictacToeX}</td>
                    </tr>
                    <tr>
                      <td>⭕</td>
                      <td>{stateContext.victoriesTictacToeO}</td>
                    </tr>
                    <tr>
                      <td>Empates</td>
                      <td>{stateContext.tieTicTac}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>{stateContext.victoriesHangman}</td>
              <td>{stateContext.victoriesSudoku}</td>
            </tr>
            <tr className="defeats">
              <td>Derrotas</td>
              <td></td>
              <td>{stateContext.defeatHangman}</td>
              <td>{stateContext.defeatSudoku}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <NavLink to={"/"}>
          <button>Volver al menu</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Bookmarks;
