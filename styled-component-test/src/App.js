import React, { Component } from 'react';
import { Title, Wrapper, Button } from './styles';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Project Title</Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </Wrapper>
    );
  }
}

export default App;
