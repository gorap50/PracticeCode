import {React,useContext} from "react";
import ComponentF from "./ComponentF";
import { UserContext,UserContext2 } from "../App";

function ComponentE(){
    const contxt1=useContext(UserContext)
    const contxt2=useContext(UserContext2)
    
    return(
        <div>
            {/* {contxt1} and {contxt2} */}
              <ComponentF/>
        </div>
    )
}

export default ComponentE