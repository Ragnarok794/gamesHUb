import { words } from "../../utils/Hangman/Words"
import { chooseRandomWord } from "../../utils/Hangman/ChooseRandomWord"
import { transformWord } from "../../utils/Hangman/TransformWord"
const random = chooseRandomWord(words)
const game = transformWord(random.word)
export const initialStateGame ={
clue:random.clue,
game:game.transformedLetters,
wrongLetters:[],
correctLetters:[],
randomWord:random,
isAVictory:false,
victoryCounter:0,
data: ''
}    
