import React, { Component } from 'react'
import UpdatedCompo from './WithCounterHOC'

export class HoverCount extends Component {
   
  render() {
    const {count,incCount}=this.props
    return (
      <div>
        
        <h2 onMouseOver={incCount}>Hoverd {count}  times</h2>
      </div>
    )
  }
}

export default UpdatedCompo(HoverCount)
