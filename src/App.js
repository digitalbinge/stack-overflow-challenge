import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import stackOverflowData from './data';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            Build Me!
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
