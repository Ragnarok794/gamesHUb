

export const testResult =(updatedGame,player1,player2)=>{
    let colX = 0
    let colO = 0
    let rowX = 0
    let rowO = 0   
    let counterforTie = 18
    
    let winner = ''

    //   Testea las filas y columnas
    for(let i = 0; i < 3; i++){
       
        for (let j = 0; j < 3; j++){
           let col = updatedGame[j][i];
           let row = updatedGame[i][j]
        if (col === player1){
            colX ++
        counterforTie --
        }
        if(row === player1){
            rowX++
            counterforTie --
        }    
        if (col === player2){
            counterforTie --
            colO ++}
        if (row === player2){
            rowO ++
            counterforTie --
        }   
        }
        if(colX === 3 || rowX === 3){
           
            
            
            return winner = player1
            }
        if(colO === 3 || rowO === 3){
               
                
                return winner = player2
            } 
             colX = 0
             colO = 0
             rowX = 0
             rowO = 0  
           
        }
        // Teste las diagonales
        if (
            (updatedGame[0][0] === player1 && updatedGame[1][1] === player1 && updatedGame[2][2] === player1) ||
            (updatedGame[0][2] === player1 && updatedGame[1][1] === player1 && updatedGame[2][0] === player1)
        ) {
           
            return winner = player1
        } else if (
            (updatedGame[0][0] === player2 && updatedGame[1][1] === player2 && updatedGame[2][2] === player2) ||
            (updatedGame[0][2] === player2 && updatedGame[1][1] === player2 && updatedGame[2][0] === player2)
        ) {
           
            return winner = player2
        }

        if(!winner && counterforTie <= 0){
           
            return winner = 'tie'
            
        } 
        return winner
       }
    

    

