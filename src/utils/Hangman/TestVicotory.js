

const testVicotory = (game, wrongLetter) => {
 let counterForVictory = 0


    game.forEach(letter => {
        if(letter !== '_'){
            counterForVictory ++
            
        }
    });
    if(counterForVictory === game.length){
        return 'Victory'
    }
    if(wrongLetter.length >= 5){
        return'Defeat'
    }

}

export default testVicotory