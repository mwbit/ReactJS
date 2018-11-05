
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
  str: string,
  num?: number,
  arr : Array<number>
}

type TestState = {
  message : string
}

class Test extends Component<Props, TestState> {

  state = {
    message : 'Welcome flow'
  }

  static defaultProps = {
    str: 'Test Default'
   }

  render() {
    return (
      <div>
        <h1>{this.props.str}</h1>
        <h1>{this.props.num}</h1>
        <h1>{this.props.arr.map(val => val)}</h1>
        <h1>{this.state.message}</h1>
      </div>
    )
  }
}

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <Test
          str={'Testando Flow'}
          num = {1}
          arr = {[1,2,3,4,5,6]}
        />
      </div>
    )
  }
}

export default App;
