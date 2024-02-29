import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonStartFinish = ({onDataRecived}) => {
    const [isStarted, setIsStarted]=useState(false)
    const [message,setMessage]=useState('Empezar partida')
    const navigate = useNavigate()
const handleClick= ()=>{
  
if(isStarted === false){
    setMessage('Volver al menu')
    setIsStarted(prevValue => !prevValue)
  }else
   { navigate('/')}
}
useEffect(()=>{onDataRecived(isStarted)},[isStarted])



  return (
    <button onClick={handleClick}>{message}</button>
  )
}

export default ButtonStartFinish