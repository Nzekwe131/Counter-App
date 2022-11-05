import React from 'react'
import {Link} from 'react-router-dom';
import { useReducer } from 'react'
 import './Counter.css'


const ACTIONS={
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
        return state
}
}


// this is our custom hook

const Counter = () => {

    const Decrement =()=>{
        dispatch({type:ACTIONS.DECREMENT})
    }
    const Increment =()=>{
        dispatch({type:ACTIONS.INCREMENT})
    }

    const Reset =()=>{
        dispatch({type:ACTIONS.RESET})
    }

    const SetValue =(event)=>{
        event.preventDefault()
      dispatch({type:ACTIONS.SETVALUE,payload:Number(event.target.number.value)})
  
    }

    const [Initialstate,dispatch]=useReducer(Reducer,{count:0})
  return (
  <>
   
  <div className='container'>
  <Link to='/' className='link'>Home</Link>
      <button className='decrement-btn' onClick={Decrement}>-</button>
      <h1>{Initialstate.count}</h1>
      <button className='increment-btn' onClick={Increment}>+</button>
    </div>
    <div className='reset'>
    <button onClick={Reset}>Reset</button>
     <form onSubmit={SetValue}>
     <input
      placeholder='set value'
      type='number'
      name='number'
      />
    <button type='submit'>Add value</button>
     </form>
    </div>  
  </>
    
  )
}

export default Counter
 