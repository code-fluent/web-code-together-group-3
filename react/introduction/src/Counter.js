import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + this.props.step,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - this.props.step,
    });
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.decrement}>-</button>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
