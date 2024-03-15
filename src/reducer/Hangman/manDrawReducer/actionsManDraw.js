

const actionsManDraw = (wrongLetters,dispatch) => {
  
        if(wrongLetters.length === 1){
            dispatch({type: 'Head'})
        }
        if(wrongLetters.length === 2){
            dispatch({type: 'Body'})
        }
        if(wrongLetters.length === 3){
            dispatch({type: 'Arms'})
        }
        if(wrongLetters.length === 4){
            dispatch({type: 'Legs'})
        }
        if(wrongLetters.length === 5){
            dispatch({type: 'Floor'})
            
        }
        if(wrongLetters.length === 0){
            
            dispatch({type: 'initial'})
         
        }
 
}

export default actionsManDraw