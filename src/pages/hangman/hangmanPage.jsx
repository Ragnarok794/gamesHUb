import React,{useState} from 'react'
import './hangmanPage.css'
import HangmanGame from '../../components/hangman/hangmanGame'
import ButtonStartAndBack from '../../components/button/buttonStartAndBack'

const HangmanPage = () => {
  const [display , setDisplay]=useState(false)

const handleDisplay=(ev)=>{
  setDisplay(ev)
}
  return (
    <div className='Hangman'>
    {display === true && 
    <div className='gameHangman'>
      <HangmanGame/>      
       </div>}

    
    <ButtonStartAndBack onDataRecived={handleDisplay}/>
     
  
</div>)
}

export default HangmanPage