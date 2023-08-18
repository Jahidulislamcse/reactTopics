import React, { Component } from 'react'
// import css from './index.css'

export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
         message : "Hello"
      }
    }
    
    increment =()=>{
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement =()=>{
        this.setState({
            count : this.state.count - 1
        })
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button className='button' onClick={this.increment}> + </button>
        <button className='button' onClick={this.decrement} disabled={count===0? true : false}> - </button>
      </div>
    )
  }
}
