import React, { useState,useEffect } from "react";

function HookUseEffectExp(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log("Updating")
        document.title=`You Clicked ${count} times`
    },[count])
    return(
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
            <button onClick={()=>setCount(count+2)}>Click- {count} Times</button>
        </div>
    )
}

export default HookUseEffectExp