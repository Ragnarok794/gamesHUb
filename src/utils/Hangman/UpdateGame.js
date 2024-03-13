const updateGame = (game, correctLetters) => {
    const updatedGame = [...game]; // Crear una copia del estado game
    
    correctLetters.forEach((innerArray) => {
      innerArray.forEach((innerArrayObj) => {
        const { letter, index } = innerArrayObj;
        updatedGame[index] = letter;
      });
    });
  
    return updatedGame;
  };
  
  export default updateGame;