import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Creative from './Creative';
import BlogPost from './BlogPost'
import Typing from 'react-typing-animation'


export default class Home extends React.Component {

  render() {
    return (
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
            <Route exact path="/">
              <div className="home-content">
                <Typing speed={40}>
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
        </Router>
      </Container>
    );
  }
}