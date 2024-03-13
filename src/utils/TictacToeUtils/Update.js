export const update = (updatedGame, turn, rowIndex, colIndex) => {

    
    for (let i = 0; i < updatedGame.length; i++) {
      if (rowIndex === i) {
        for (let j = 0; j < updatedGame[i].length; j++) {
          if (j === colIndex && updatedGame[i][j] === null) {
            updatedGame[i][j] = turn;
          }
        }
      }
    }
  
    return updatedGame;
  };