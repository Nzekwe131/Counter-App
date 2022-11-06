import React from 'react'
import {Link} from 'react-router-dom';
import { useReducer } from 'react'
 import './Counter.css'
import Reducer from './Reducer';
import { ACTIONS } from './Reducer';



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
<div >
<Link to='/' className='link'>Home</Link>
</div>
<div className='container'>

<div className='value-sec'>
<button className='decrement-btn' onClick={Decrement}>-</button>
    <h1>{Initialstate.count}</h1>
    <button className='increment-btn' onClick={Increment}>+</button>
</div>
  
  </div>
  <div className='reset'>
  <button onClick={Reset} >Reset</button>
  </div> 

  <div className='input-section'>
  <form  onSubmit={SetValue} >

   <input
    placeholder='set value'
    type='number'
    name='number'
    />
  <button
   type='submit'
   >Add value</button>
   </form>
  </div> 
</>
  )
}

export default Counter
 




