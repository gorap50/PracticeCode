import {React,useContext} from "react";
import { UserContext,UserContext2 } from "../App";

function ComponentF(){
    const contxt1=useContext(UserContext)
    const contxt2=useContext(UserContext2)
    return(
        <div>
            {/* <UserContext.Consumer>
                {
                    user=>{
                        return(
                            <UserContext2.Consumer>
                                {channel=>{return <div>User Context Value {user},User Context 2 Value is {channel}</div>}}
                                </UserContext2.Consumer>
                        )
                        
                    }
                }
            </UserContext.Consumer>  */}
 {contxt1} and {contxt2}
        </div>
    )
}

export default ComponentF 