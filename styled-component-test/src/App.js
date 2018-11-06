import React, { Component } from 'react';
import { Title, Wrapper, Button, TomatoButton } from './styles';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>Project Title</Title>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <TomatoButton>TomatoButton</TomatoButton>
      </Wrapper>
    );
  }
}

export default App;
