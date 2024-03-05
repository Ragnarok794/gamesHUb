import React, { useEffect, useState ,useCallback} from 'react'
import './hangmanGame.css'
import { words } from '../../utils/Hangman/Words'
import { chooseRandomWord } from '../../utils/Hangman/ChooseRandomWord'
import { transformWord } from '../../utils/Hangman/TransformWord'
import LetterInput from './LetterInput'
import { tester } from '../../utils/Hangman/Tester'
import updateGame from '../../utils/Hangman/UpdateGame'
import testVicotory from '../../utils/Hangman/TestVicotory'


const HangmanGame = () => {

 const [answer ,setAnswer]=useState('')
 const [clue, setClue]=useState('')
 const [game,setGame]=useState('')
 const [randomWord, setRandomWord]=useState(()=>chooseRandomWord(words))
const [wrongLetter, setWrongLetter]=useState('')
const [correctLetter, setCorrectLetter]=useState('')
 

const handleInput = (ev)=>{
  const result = tester(ev,randomWord.word,game)
 setCorrectLetter(prevcorrectLetters => [...prevcorrectLetters, result.correctLetter])
 if(result.wrongLetter !== ''){
 setWrongLetter([...wrongLetter,result.wrongLetter])}
}


useEffect(()=>{
  if (randomWord){
  const gameWord = transformWord(randomWord.word)
  setAnswer(randomWord.word)
  setClue(randomWord.clue)
  setGame(gameWord.transformedLetters)}
},[randomWord])

const handleClick = () => {
  setRandomWord(()=>chooseRandomWord(words))
  setCorrectLetter([])
  setWrongLetter([])
};

useEffect(() => {
   if (correctLetter.length > 0) {
    const result = updateGame(game, correctLetter)
      setGame(result);


}},[correctLetter])
useEffect(()=>{
  if(game){
  testVicotory(game, wrongLetter)
console.log(game)
}})




  return (
    <div>
        <p>Pista: {clue}</p>
        <div className='_'>
        {game && game.map((letter,i)=>(
              <h1 key={i}>{letter}</h1>
        ))}
        </div>
        
        
        
       <p>Tienes un maximo de 5 letras erroneas</p>
        <p>Letras erroneas: {wrongLetter}</p>
        <p>¡Cuidado, discripimina letras con accento o diaresis!</p>
        <div className='input_button'>
        <LetterInput onDataReceived ={handleInput}/>
        <button onClick={handleClick}>Nueva palabra</button>
        </div>

    </div>
  )
}

export default HangmanGame