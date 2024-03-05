

const testVicotory = (game, wrongLetter) => {
 let counterForVictory = 0
console.log(game)

    game.forEach(letter => {
        if(letter !== '_'){
            counterForVictory ++
            console.log(counterForVictory)
        }
    });
    if(counterForVictory === game.length){
        alert('Victoria')
    }
    if(wrongLetter.length === 5){
        alert('Derrota')
    }

}

export default testVicotory