import initialStatesManDraw from "./initialStatesManDraw"
const reducerManDraw = (state,action) => {
 switch (action.type){
    case 'Head':
       return {...state, visibleHead:true}
    case 'Body':
        return {...state, visibleBody: true}
    case 'Arms':
        return{...state, visibleArms:true}
    case 'Legs':
        return{...state, visibleLegs:true}
    case 'Floor':
        return{...state, visibleFloor: true, defeat:true}
    case 'initial':
        return{...initialStatesManDraw}


    default: return {...state}}
   
  
}

export default reducerManDraw