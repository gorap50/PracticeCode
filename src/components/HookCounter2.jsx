import React, { useState } from "react";

function HookExp2(){
    const initCount=0
    const [count,setCount]=useState(initCount)

    const IncOf5=()=>{
        for(let i=0;i<5;i++)
        {
            setCount(prevCount=>prevCount+1)
        }
    }

    return(
        <div>
            <h1>Count: {count}</h1><br />
            <button onClick={()=>{setCount(count+1)}}>Increament</button>
            <button onClick={()=>{setCount(count-1)}}>Decreament</button>
            <button onClick={()=>{setCount(initCount)}}>Reset</button>
            <button onClick={IncOf5}>Increament of Five</button>
        </div>
    )
}

export default HookExp2