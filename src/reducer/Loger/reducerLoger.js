
const reducerLoger = (state, action) => {
    switch(action.type){
        case 'Show Form Register': 
        return {...state,signUpvisible:true, logInVisible:false}
        case 'Show Form Log In':
            return {...state, logInVisible:true }
        case  'Close Form':
            return {...state, signUpvisible:false, logInVisible:false}
        default:return {...state}
    }
 
}

export default reducerLoger