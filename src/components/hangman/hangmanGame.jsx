import React, { useEffect, useState ,useCallback} from 'react'
import './hangmanGame.css'
import { words } from '../../utils/Hangman/Words'
import { chooseRandomWord } from '../../utils/Hangman/ChooseRandomWord'
import { transformWord } from '../../utils/Hangman/TransformWord'
import LetterInput from './LetterInput'
import { tester } from '../../utils/Hangman/Tester'
import updateGame from '../../utils/Hangman/UpdateGame'
import testVicotory from '../../utils/Hangman/TestVicotory'
import ManDraw from './manDraw/manDraw'


const HangmanGame = ({onDataRecived}) => {

 const [answer ,setAnswer]=useState('')
 const [clue, setClue]=useState('')
 const [game,setGame]=useState('')
 const [randomWord, setRandomWord]=useState(()=>chooseRandomWord(words))
const [wrongLetters, setWrongLetters]=useState('')
const [correctLetter, setCorrectLetter]=useState('')
const [isAVictory,setIsAVictory]=useState(false)
const [victoryCounter,setVictoryCounter]=useState(0)

const handleInput = (ev)=>{
  const result = tester(ev,randomWord.word, wrongLetters)
 setCorrectLetter(prevcorrectLetters => [...prevcorrectLetters, result.correctLetter])
 console.log(result)
 if(result.wrongLetter !== null){
 setWrongLetters([...wrongLetters,result.wrongLetter])}
}

const handleClick = () => {
  setRandomWord(()=>chooseRandomWord(words))
  setCorrectLetter([])
  setWrongLetters([])
  onDataRecived('')
  
}
useEffect(()=>{
  if (randomWord){
  const gameWord = transformWord(randomWord.word)
  setAnswer(randomWord.word)
  setClue(randomWord.clue)
  setGame(gameWord.transformedLetters)}
},[randomWord])


useEffect(() => {
   if (correctLetter.length > 0) {
    const result = updateGame(game, correctLetter)
      setGame(result);
}},[correctLetter])

useEffect(()=>{
  if(game){
 const result= testVicotory(game, wrongLetters)
onDataRecived(result)
if(result === 'Victory'){
  setIsAVictory(true)
}
}},[game])
useEffect(()=>{ 
  if(isAVictory === true){
  setVictoryCounter(prevVictoryCounter => prevVictoryCounter + 1)
  console.log(victoryCounter)
  setIsAVictory(false)}
  
},[isAVictory])




  return (
    <div> 
      <p>Numero de victorias: {victoryCounter} </p>
      <ManDraw wrongLetters={wrongLetters}/>
     
        <p>Pista: {clue}</p>
        <div className='_'>
        {game && game.map((letter,i)=>(
              <h1 key={i}>{letter}</h1>
        ))}
        </div>
          
       <p>Tienes un maximo de 5 letras erroneas</p>
        <p>Letras erroneas: {wrongLetters}</p>
        <p>¡Cuidado, discrimina letras con accento o diaresis!</p>
        <div className='input_button'>
        <LetterInput onDataReceived ={handleInput}/>
        <button onClick={handleClick}>Nueva palabra</button>
        </div>

    </div>
  )
}

export default HangmanGame