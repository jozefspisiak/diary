import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Jumbotron, 
  Form, FormControl, FormGroup, Checkbox, Button } from 'react-bootstrap';
import { Router } from 'react-router'
import routes from './routes';


class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Jumbotron>
              <h2>
                6 Minutes Diary
              </h2>
              <p>
                Use Sign in button to access your diary
              </p>
            </Jumbotron>
            <Form horizontal>
              <FormGroup>
                <Col smOffset={3} sm={2}>
                  Email address
                </Col>
                <Col sm={4}>
                  <FormControl type="email" id="exampleInputEmail1" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={3} sm={2}>
                  Password
                </Col>
                <Col sm={4}>
                  <FormControl type="password"  id="exampleInputPassword1" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={5} sm={4}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={5} sm={4}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Grid>
      
    );
  }
}

export default App;
