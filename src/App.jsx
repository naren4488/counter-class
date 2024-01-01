import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = (e) => {
    if (e.target.value === 'inc') {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    } else {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button value='inc' onClick={this.handleClick}>
          Increment
        </button>
        <button value='dec' onClick={this.handleClick}>
          Decrement
        </button>
      </>
    );
  }
}

export default App;
