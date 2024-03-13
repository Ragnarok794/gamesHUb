
import { tester } from '../../utils/Hangman/Tester'
import { transformWord } from '../../utils/Hangman/TransformWord'
import { chooseRandomWord } from '../../utils/Hangman/ChooseRandomWord'
import { words } from '../../utils/Hangman/Words'
import updateGame from '../../utils/Hangman/UpdateGame'
import testVicotory from '../../utils/Hangman/TestVicotory'
const reducer = (state,action) => {
 switch(action.type){
    case 'CheckRigthAndBadLetters':
        const result = tester(action.payload,state.randomWord.word, state.wrongLetters)
        if(result.wrongLetter !== null){
            return {...state,wrongLetters:[...state.wrongLetters,result.wrongLetter]}
        }
        return {...state, correctLetters:[...state.correctLetters, result.correctLetter]}
    case 'NewWord':
        const random = chooseRandomWord(words)
       
        const gameWord = transformWord(random.word)

        return {...state,
        correctLetters: [],
        wrongLetters: [],
        data: '',
        randomWord: random.word,
        clue: random.clue,
        game:gameWord.transformedLetters
        }      
    case 'UpdateGame':
        const update = updateGame(state.game, state.correctLetters)
        return{...state, game: update}
    case 'testSolve':
        const tested = testVicotory(state.game,state.wrongLetters)
        console.log(tested)
        if(tested === 'Victory'){
            return {...state,
                                        isAVictory:true,
                                        data: tested        
                                    }}
        return {...state,data:tested}
    case 'Add a Victory':
        return {...state,
        victoryCounter:state.victoryCounter +1,
        isAVictory:false
        }
        default: return {...state}
}    
        
}



export default reducer