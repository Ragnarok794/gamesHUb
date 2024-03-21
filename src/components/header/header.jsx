import React, { useEffect, useReducer, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './header.css'
import SignUpForm from '../Loger/SignUpForm/SignUpForm'
import reducerLoger from '../../reducer/Loger/reducerLoger'
import { initialStatesLoger } from '../../reducer/Loger/initialStates'
import { showModal } from '../../reducer/Loger/actionsLoger'
import  LoginForm  from '../Loger/LogIn/LoginForm.jsx'
import { useAuth } from '../../hooks/useAuth.jsx'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [state, dispatch]=useReducer(reducerLoger, initialStatesLoger)
    const location = useLocation()
    const defaultName = 'GamesHub'
    const[name,setName]=useState(defaultName)
 const {user, logout}=useAuth()
    const handleclick =(ev)=>{
      showModal(dispatch,ev)
dispatch({type: 'Show Form'})
    }
    useEffect(()=>{ 
        if(location.pathname !== '/'){
        setName(location.pathname.substring(1))}
        else {
            setName(defaultName)
        }
},[location])

  return (<>
    <div className='header_div'>
      <h1 className='h1'>Bienvenido a </h1>
      <h1>{name}</h1>
    </div>
    <div className='buttonsLog'>
     {!user && (<><button onClick={()=>handleclick('signUp')} > Registrarse</button>
     <button onClick={()=>handleclick('logIn')} > Inicia sesion</button></>)}
     {user && location.pathname !== '/Marcadores'&& <NavLink to={'Marcadores'}> <button   > Marcadores</button></NavLink>}
    { user && <NavLink to={'/'}><button onClick={()=>logout()} > Cerrar sesion</button> </NavLink>}
    </div>
    
   <SignUpForm state={state} dispatch={dispatch}/>
    <LoginForm state={state} dispatch={dispatch}/>
   
</>
  )
}

export default Header