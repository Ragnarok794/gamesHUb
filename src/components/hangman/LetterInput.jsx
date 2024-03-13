import React, { useState } from 'react';
import './LetterInput.css'
const LetterInput = ({onDataReceived, isFinished}) => {
  const [inputValue, setInputValue] = useState('');

const handleOnChange =(ev)=>{
setInputValue(ev.target.value)
}

  const handleKeyPress =(ev)=>{
    if(ev.key === 'Enter'&& !isFinished ){
        setInputValue('')   
    const value = event.target.value;
    
    // Expresión regular para validar solo letras
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ]*$/;
    // Verifica si el valor del input contiene solo letras
    if (regex.test(value) && value !== '') {
        onDataReceived(value)
        
    }
    }
     }
  

  return (
    <div className='letterInput'>
    <input
      type="text"
      value={inputValue}
      onChange={handleOnChange}
      onKeyPress={handleKeyPress}
      placeholder="Ingrese solo letras"
      maxLength={1}
    /></div>
  );
};

export default LetterInput;
