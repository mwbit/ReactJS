import React, { Component } from "react";
import ApolloClient from "apollo-boost";
//import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/withHooks/Launches";
import Launch from "./components/withHooks/Launch";

import "./App.css";
import logo from "./logo.png";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img
              src={logo}
              alt="spaceX"
              style={{ with: 300, display: "block", margin: "auto" }}
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
