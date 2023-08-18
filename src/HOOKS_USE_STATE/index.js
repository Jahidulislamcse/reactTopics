import React, { Component } from "react";

export default class HOOKS_USE_STATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  hookHandle = () => {
    console.log('clicked')
    this.setState({
      
      count : this.state.count + 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.hookHandle}>Increment</button>
      </div>
    );
  }
}
