import React,{useState} from 'react'
import './SudokuPage.css'
import Sudokugame from '../../components/Sudoku/Sudokugame'
import ButtonStartAndBack from '../../components/buttonStartAndBack/buttonStartAndBack'
import PopupMessage from '../../components/Popup/PopupMessage'
const SudokuPage = () => {
  const [display , setDisplay]=useState(false)
  // const [visible1, setVisible1]=useState(false)
  // const [visible2, setVisible2]=useState(false)
  // const [name, setName]=useState('')
  const handleDisplay=(ev)=>{
  setDisplay(ev)}
// const win = (ev)=>{
// if(ev === 'Victory'){
//   setVisible1(true)}
// if(ev === 'Derrota'){
//   setVisible2(true)
//   setName('lose')
// }
// if (ev == ''){
//   setVisible1(false)
//   setVisible2(false)
// }




  return (
    <div className='Sudokupage'>
    {display === true && 
    <div className='Sudokugame'>
      <Sudokugame  /> 
      {/* onDataRecived={win}      */}
       </div>}
       {/* <PopupMessage message={'Victoria!!'} visible={visible1}/>
            <PopupMessage message={'Derrota!!'} name={name} visible={visible2}/> */}

    
    <ButtonStartAndBack onDataRecived={handleDisplay}/>
     
  
</div>)
}

export default SudokuPage