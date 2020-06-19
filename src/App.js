import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './views/About';
import Projects from './views/Projects';
import Creative from './views/Creative';
import BlogPost from './views/BlogPost'
import Typing from 'react-typing-animation'

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
                <Typing speed={30}>
                <h1>
                    hi! i'm sahil parikh. i'm a software engineer at <a href="https://www.yext.com" className="blog-list-link">yext</a>.
                </h1>
                <h1>
                  i'm currently based in new york city. <span role="img" aria-label="current-time-emoji">🌇</span>
                </h1>
                </Typing>
              </div>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/creative">
              <Creative />
            </Route>
            <Route exact path="/creative/:blogId" component={BlogPost} />
          </Switch>
        </Router>
      </Container>
    </DocumentTitle>
  );
}

export default App;
