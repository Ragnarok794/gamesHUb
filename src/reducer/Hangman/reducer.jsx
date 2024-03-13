
const reducer = (state,action) => {
 switch(action.type){
    case 'GetCorrectLetters':
        return {...state, correctLetters:[...state.correctLetters, action.payload]}
    case 'GetWrongLetters':
            return {...state,wrongLetters:[...state.wrongLetters,action.payload]}
    case 'UpdateGame':
       
        return{...state, game: action.payload}
    case 'Add a Victory':
        return {...state,
        victoryCounter:state.victoryCounter +1,
        isFinished:true,
        visibleWin: true
        }
    case 'Add a Defeat':
        return {...state,
            DefeatCounter: state.DefeatCounter +1,
            isFinished:true,
            visibleDefeat: true
        
        } 
        case 'NewWord':
        return {...state,
        correctLetters: [],
        wrongLetters: [],
        randomWord: action.payload.random.word,
        clue: action.payload.random.clue,
        game: action.payload.gameWord.transformedLetters,
        isFinished:false,
        visibleWin:false,
        visibleDefeat:false
        }   
        default: return {...state}
}    
        
}



export default reducer