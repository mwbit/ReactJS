import React, { Component } from "react";
import { Button, Header, Menu, Segment, Sidebar } from "semantic-ui-react";

export default class SideBar extends Component {
  state = { visible: false, dimmed: false };

  handleClick = visible => this.setState({ visible: !visible });

  render() {
    const { visible, dimmed } = this.state;
    console.log(visible);
    return (
      <div>
        <div>
          <Button.Group>
            <Button onClick={() => this.handleClick(visible)}>sidebar</Button>
          </Button.Group>
        </div>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            direction="left"
            icon="labeled"
            inverted
            vertical
            visible={visible}
            width="thin"
          />

          <Sidebar.Pusher dimmed={dimmed && visible}>
            <Segment basic>
              <Header as="h1">Text h1</Header>
              <Header as="h2">Text h2</Header>
              <Header as="h3">Text h3</Header>
              <Header as="h4">Text h4</Header>
              <Header as="h5">Text h5</Header>
              <Header as="h6">Text h6</Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
