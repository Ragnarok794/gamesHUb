import React, { useEffect, useState } from 'react'
import './manDraw.css'
const ManDraw = ({wrongLetters}) => {
    const [visibleHead,setVisibleHead]=useState(false)
    const [visibleBody,setVisibleBody]=useState(false)
    const [visibleArms, setVisibleArms]=useState(false)
    const [visibleLegs, setVisibleLegs]=useState(false)
    const [visibleFloor,setVisibleFloor]=useState(false)
    const [lose, setLose]=useState(false)
    useEffect(()=>{ 
        if(wrongLetters.length === 1){
setVisibleHead(true)
        }
        if(wrongLetters.length === 2){
            setVisibleBody(true)
        }
        if(wrongLetters.length === 3){
            setVisibleArms(true)
        }
        if(wrongLetters.length === 4){
            setVisibleLegs(true)
        }
        if(wrongLetters.length === 5){
            setLose(true)
            setVisibleFloor(true)
        }
        if(wrongLetters.length === 0){
            setVisibleArms(false)
            setVisibleBody(false)
            setVisibleFloor(false)
            setLose(false)
            setVisibleHead(false)
            setVisibleLegs(false)
        }
    },[wrongLetters])

  return (
    <div className='manDraw'>
     <div className={`bodyDraw  ${lose === true && 'lose'}`}>
        <img src="/public/head.png" alt="head" className={`headpng ${visibleHead ? 'visible' : 'hidden'}`} />
        <img src="/public/body.png" alt="body" className={`bodypng ${visibleBody ? 'visible' : 'hidden'}`} />
        <img src="/public/arms.png" alt="arms" className={`armspng ${visibleArms ? 'visible' : 'hidden'}`}/>
        <img src="/public/legs.png" alt="legs" className={`legspng ${visibleLegs ? 'visible' : 'hidden'}`} />
       
     </div> 
     <img src="/public/floor.png" alt="floor" className={`floorpng ${visibleFloor ? 'visible' : 'hidden'}`} />
    </div>
  )
}

export default ManDraw