import React from 'react'
import { useReducer } from 'react';


const initialState = 0;
const reducer = (state , action)=>{

    if (action.type === "INCREMENT") {
        return state + 1
    } else if (action.type === "DECREMENT"){
        return state - 1
    } else if (action.type === state){
        return state
    }
    
    else{
        return state = 0 

    }

}


function Reducer() {
    const [state , dispatch] = useReducer(reducer , initialState);  
  
   
    return (
    <div>

        <div className='d-flex mx-3'>
        <button className='btn btn-danger ' onClick={()=>{dispatch({type: "DECREMENT"})}}>DEC</button>
        <h2 className='mx-3'>{state}</h2>
        <button className='btn btn-success ' onClick={()=>{dispatch({type: "INCREMENT"})}}>INC</button>
        </div>

 
        
      
    </div>
  )
}

export default Reducer
