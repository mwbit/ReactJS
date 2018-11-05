
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  str: string,
};

class Test extends Component<Props> {
  render() {
    return (
      <div>
        <h1>{this.props.str}</h1>
      </div>
    )
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test str={'Testando Flow'} />
      </div>
    )
  }
}

export default App;
