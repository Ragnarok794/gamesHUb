

export const showModal =( dispatch,ev)=>{
    if (ev === 'signUp'){
        dispatch({type: 'Show Form Register'})
    }
    if (ev === 'logIn'){
        dispatch({type: 'Show Form Log In'})
    }
}
