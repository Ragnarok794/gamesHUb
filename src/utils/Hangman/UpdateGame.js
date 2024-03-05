const updateGame = (game, correctLetter) => {
    const updatedGame = [...game]; // Crear una copia del estado game
    
    correctLetter.forEach((innerArray) => {
      innerArray.forEach((innerArrayObj) => {
        const { letter, index } = innerArrayObj;
        updatedGame[index] = letter;
      });
    });
  
    return updatedGame;
  };
  
  export default updateGame;