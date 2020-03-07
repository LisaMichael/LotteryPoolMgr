import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Grid from "./components/Grid";
import Col from "./components/Col";
import Pbcard from './components/Pbcard/Pbcard';


class App extends Component {
  // Setting this.state.petro values
  state = {
    // pb,
    // clickedpb,
    status: "Click an image to begin!",
  };

  render() {

    return (
      <div>
        <Header>
        </Header>
        <row>
          <Col size="md-4">
            <Pbcard></Pbcard>
          </Col>
          <Col size="md-4">
            testt
          </Col>
          <Col size="md-4">
            testt
          </Col>
        </row>
      </div>
    );
  }
}
export default App;
