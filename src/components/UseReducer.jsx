import React, { useState,useReducer } from "react";

const initialState=0
const reducer=(state,action)=>{
    switch(action)
    {
        case 'Increament':
            return state+1;
        case 'Decreament':
            return state-1
        case 'Reset':
            return initialState
        default:
            return state
    }
}

function UseReducer(){
    
   const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
            <h1> Count:- {count}</h1>
            <button onClick={()=>dispatch('Increament')}>Increament</button>
            <button onClick={()=>dispatch('Decreament')}>Decreament</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
        </div>
    )
}

export default UseReducer