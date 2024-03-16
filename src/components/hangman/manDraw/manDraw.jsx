import React, { useEffect, useReducer} from 'react'
import './manDraw.css'
import reducerManDraw from '../../../reducer/Hangman/manDrawReducer/reducerManDraw'
import initialStatesManDraw from '../../../reducer/Hangman/manDrawReducer/initialStatesManDraw'
import actionsManDraw from '../../../reducer/Hangman/manDrawReducer/actionsManDraw'
const ManDraw = ({wrongLetters}) => {
    const [state, dispatch]=useReducer(reducerManDraw,initialStatesManDraw)
    useEffect(()=>{
        actionsManDraw(wrongLetters,dispatch)
    },[wrongLetters])
  


  return (
    <div className='manDraw'>
     <div className={`bodyDraw  ${state.defeat === true && 'Defeat'}`}>
        <img src="head.png" alt="head" className={`headpng ${state.visibleHead ? 'visible' : 'hidden'}`} />
        <img src="body.png" alt="body" className={`bodypng ${state.visibleBody ? 'visible' : 'hidden'}`} />
        <img src="arms.png" alt="arms" className={`armspng ${state.visibleArms ? 'visible' : 'hidden'}`}/>
        <img src="legs.png" alt="legs" className={`legspng ${state.visibleLegs ? 'visible' : 'hidden'}`} />
       
     </div> 
     <img src="floor.png" alt="floor" className={`floorpng ${state.visibleFloor ? 'visible' : 'hidden'}`} />
    </div>
  )
}

export default ManDraw