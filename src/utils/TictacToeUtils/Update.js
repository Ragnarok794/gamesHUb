

export const update=(updatedGame,turn,rowIndex,colIndex) =>{ 
    
    
    return (updatedGame.map((row, i)=>{
    if(rowIndex === i){
        row.map((cell, j)=>{
            if(j === colIndex && cell === null){
                return updatedGame[i].splice(j,1,turn)
            }else{
                return cell
            }
        })
    }
    else{return row;}
}))}