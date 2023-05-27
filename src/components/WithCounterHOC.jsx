import React from "react";

const UpdatedCompo=(OriginalComp)=>{
     class NewCompo extends React.Component{
        constructor(){
            super()
            this.state={count:0}
        }
    
        incCount=()=>{
            console.log("hello")
            this.setState(PrevState=>{
                return {count:PrevState.count+1}
            })
        }
        render()
        {
            return <OriginalComp count={this.state.count} incCount={this.incCount}/>
        }
     }
     return NewCompo
}

export default UpdatedCompo