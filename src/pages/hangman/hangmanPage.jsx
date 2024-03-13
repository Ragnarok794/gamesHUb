import React,{useReducer, useState} from 'react'
import './hangmanPage.css'
import HangmanGame from '../../components/hangman/hangmanGame'
import ButtonStartAndBack from '../../components/buttonStartAndBack/buttonStartAndBack'
import PopupMessage from '../../components/Popup/PopupMessage'
import reducer from '../../reducer/Hangman/reducer'
import { initialStateGame } from '../../reducer/Hangman/initialStates'
const HangmanPage = () => {
  const [state,dispatch]=useReducer(reducer,initialStateGame)
  const [display , setDisplay]=useState(false)
  const handleDisplay=(ev)=>{
  setDisplay(ev)}





  return (
    <div className='Hangman'>
    {display === true && 
    <div className='gameHangman'>
      <HangmanGame state={state} dispatch={dispatch} />      
       </div>}
       <PopupMessage message={'Victoria!!'} visible={state.visibleWin}/>
            <PopupMessage message={'Derrota!!'} name={'Defeat'} visible={state.visibleDefeat}/>

    
    <ButtonStartAndBack onDataRecived={handleDisplay}/>
     
  
</div>)
}

export default HangmanPage