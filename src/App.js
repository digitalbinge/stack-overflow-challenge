import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import stackOverflowData from './data';
import { Container, Row, Col } from 'reactstrap';
import NavBar from './components/navbar'
import QuestionList from './components/list'


class App extends Component {
  render() {
    return (
      <Container>
      <NavBar />
      <QuestionList />
        <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
