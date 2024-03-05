import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './header.css'

const Header = () => {
    const location = useLocation()
    const defaultName = 'GamesHub'
    const[name,setName]=useState(defaultName)
 
    useEffect(()=>{ 
        if(location.pathname !== '/'){
        setName(location.pathname.substring(1))}
        else {
            setName(defaultName)
        }
},[location])
  return (
    <div className='header_div'>
      <h1 className='h1'>Bienvenido a </h1>
      <h1>{name}</h1>
    </div>

  )
}

export default Header