import React, { Component } from 'react'

export class ClickCounter2 extends Component {

    constructor(){
        super()
        this.state={count:0}
    }

    incCount=()=>{
       
        this.setState(PrevState=>{
            return {count:PrevState.count+1}
        })
    }

  render() {
    const {count}=this.state
    return (
      <div>
        <button onClick={this.incCount}>Clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounter2
