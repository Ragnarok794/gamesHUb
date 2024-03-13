import React, { useEffect} from 'react'
import './hangmanGame.css'
import LetterInput from './LetterInput'
import ManDraw from './manDraw/manDraw'
import {functionChecker,functionReset} from '../../reducer/Hangman/actions'
import updateGame from '../../utils/Hangman/UpdateGame'
import testVicotory from '../../utils/Hangman/TestVicotory'


const HangmanGame = ({state,dispatch}) => {


const handleInput = (ev)=>{
  functionChecker(state,dispatch,ev)
}
const handleClick = () => {
  functionReset(state,dispatch)
 
  
}
useEffect(()=>{
  const update = updateGame(state.game, state.correctLetters)
  dispatch({type: 'UpdateGame', payload: update})
 
   const tested = testVicotory(update, state.wrongLetters)

  if (tested === "Victory") {
    dispatch({ type: "Add a Victory" })}
  if (tested === 'Defeat'){
        dispatch({type: 'Add a Defeat'})
  }
},[state.correctLetters])
 
  return (
     <><div className='Counters'>
      <p>Victorias: {state.victoryCounter} </p>
      
      <p>Derrotas: {state.DefeatCounter}</p></div>
      <ManDraw wrongLetters={state.wrongLetters}/>
     
        <p>Pista: {state.clue}</p>
        <div className='_'>
        {state.game && state.game.map((letter,i)=>(
              <h1 key={i}>{letter}</h1>
        ))}
        </div>
          
       <p>Tienes un maximo de 5 letras erroneas</p>
        <p>Letras erroneas: {state.wrongLetters}</p>
        <p>¡Cuidado, discrimina letras con acento o diaresis!</p>
        <div className='input_button'>
        <LetterInput onDataReceived ={handleInput} isFinished={state.isFinished}/>
        <button onClick={handleClick}>Nueva palabra</button>
        </div>
</>
    
  )
}

export default HangmanGame