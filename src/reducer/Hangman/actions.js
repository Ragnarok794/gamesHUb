import { tester } from "../../utils/Hangman/Tester";
import { transformWord } from "../../utils/Hangman/TransformWord";
import { chooseRandomWord } from "../../utils/Hangman/ChooseRandomWord";
import { words } from "../../utils/Hangman/Words";


export const functionChecker = (state, dispatch, ev) => {
  console.log(state)
  const result = tester(ev, state.randomWord, state.wrongLetters);
  dispatch({ type: "GetCorrectLetters" ,payload: result.correctLetter });
  if (result.wrongLetter !== null) {
    dispatch({ type: "GetWrongLetters" ,payload: result.wrongLetter});
  }
}
export const functionReset =(state,dispatch)=>{

  const random = chooseRandomWord(words)   
  const gameWord = transformWord(random.word)
 dispatch({type: 'NewWord', payload:{random: random, gameWord:gameWord}})
}

