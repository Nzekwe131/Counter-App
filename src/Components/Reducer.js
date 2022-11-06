
export const ACTIONS={
    INCREMENT: 'INCREMENT',
    DECREMENT:"DECREMENT",
    RESET:"RESET",
    SETVALUE:'SETVALUE'
}
const Reducer =(state,action)=>{
switch(action.type){
    case ACTIONS.INCREMENT:
    return {count:state.count +1}

    case ACTIONS.DECREMENT:
    return {count:state.count -1}
   
    case ACTIONS.SETVALUE:
    return {count:action.payload}
  
    case ACTIONS.RESET:
    return {count:0}

    default:
        return  {state}
}
}

export default Reducer

