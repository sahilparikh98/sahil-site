import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './views/About';
import Projects from './views/Projects';

function App() {
  return (
    <DocumentTitle title="sahil parikh">
      <Container fluid>
        <Navbar bg="clear" expand="lg">
          <Navbar.Brand href="/">sahil parikh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="/about">about</Nav.Link>
              <Nav.Link href="/projects">projects</Nav.Link>
              <Nav.Link href="/creative">creative</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/">
              <div className="home-content">
                <h1>
                  hi! i'm sahil parikh. i'm currently an engineer at yext.
                </h1>
              </div>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </Router>
      </Container>
    </DocumentTitle>
  );
}

export default App;
