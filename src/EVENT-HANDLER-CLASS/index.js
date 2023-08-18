import React, { Component } from 'react'

export default class EVENT_HANDLER_CLASS extends Component {

    handleClick = () =>{
        console.log('Clicked');
    }

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue : ' '
      }
    }
    
 
    handleOnChange = (e) =>{
        this.setState({
            changedValue : e.target.value
        })
        
    }

  render() {
    return (
      <div>
        <input type='text' onChange={this.handleOnChange}></input>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
