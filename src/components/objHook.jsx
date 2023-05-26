import React, { useState } from "react";

function ObjHookExp(){
    const [name,setName]=useState({firstname:"",lastname:""})
    return(
        <div>
            <input type="text" value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})} />

            <input type="text" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})} />

            <h2>Your First Name is: {name.firstname}</h2>
            <h2>Your First Name is: {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </div>
    )
}

export default ObjHookExp