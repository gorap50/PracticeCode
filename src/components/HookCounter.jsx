import React, { useState } from "react";

function HookExp(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count+2)}>Click- {count}</button>
        </div>
    )
}

export default HookExp