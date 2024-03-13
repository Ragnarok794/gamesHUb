import React, { useEffect, useState , useReducer} from 'react'
import './hangmanGame.css'
import LetterInput from './LetterInput'
import ManDraw from './manDraw/manDraw'
import reducer from '../../reducer/Hangman/reducer'
import { initialStateGame } from '../../reducer/Hangman/initialStates'

const HangmanGame = ({onDataRecived}) => {

 
const [state, dispatch]=useReducer(reducer, initialStateGame)

const handleInput = (ev)=>{
  dispatch({type: 'CheckRigthAndBadLetters', payload:(ev)})
  dispatch({type: 'UpdateGame'})
  dispatch({type: 'testSolve'})
  
}
const handleClick = () => {
  dispatch({type: 'NewWord'})
  
}

  // if (randomWord){
  // const gameWord = transformWord(randomWord.word)
  // setAnswer(randomWord.word)
  // setClue(randomWord.clue)
  // setGame(gameWord.transformedLetters)}



// useEffect(() => {
//    if (correctLetter.length > 0) {
//     const result = updateGame(game, correctLetter)
//       setGame(result);
// }},[correctLetter])

// useEffect(()=>{
//   if(game){
//  const result= testVicotory(game, wrongLetters)
// onDataRecived(result)
// if(result === 'Victory'){
//   setIsAVictory(true)
// }
// }},[game])

useEffect(()=>{ 
  if(state.isAVictory){
  dispatch({type: 'Add a Victory'})}
  // if(isAVictory === true){
  // setVictoryCounter(prevVictoryCounter => prevVictoryCounter + 1)
  // console.log(victoryCounter)
  // setIsAVictory(false)}
 
},[state.isAVictory])
useEffect(()=>{ onDataRecived(state.data)},[state.data])



  return (
    <div> 
      <p>Numero de victorias: {state.victoryCounter} </p>
      <ManDraw wrongLetters={state.wrongLetters}/>
     
        <p>Pista: {state.clue}</p>
        <div className='_'>
        {state.game && state.game.map((letter,i)=>(
              <h1 key={i}>{letter}</h1>
        ))}
        </div>
          
       <p>Tienes un maximo de 5 letras erroneas</p>
        <p>Letras erroneas: {state.wrongLetters}</p>
        <p>¡Cuidado, discrimina letras con accento o diaresis!</p>
        <div className='input_button'>
        <LetterInput onDataReceived ={handleInput}/>
        <button onClick={handleClick}>Nueva palabra</button>
        </div>

    </div>
  )
}

export default HangmanGame