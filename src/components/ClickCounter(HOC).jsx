import React, { Component } from 'react'
import UpdatedCompo from './WithCounterHOC'

export class ClickCounter extends React.Component {
    
  render() {
    
    const {count,incCount}=this.props
    return (
      <div>
        <button onClick={incCount}>Clicked {count} times </button>
      </div>
    )
  }
}

export default UpdatedCompo (ClickCounter)
