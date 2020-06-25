import React from "react";
import "./App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import DocumentTitle from "react-document-title";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import About from "./views/About";
import Projects from "./views/Projects";
import Creative from "./views/Creative";
import BlogPost from "./views/BlogPost";
import Typing from "react-typing-animation";
import ColorWrapper from "./components/ColorWrapper";

const NYC_OFFSET = -4;

class App extends React.Component {
  
  calcTime = () => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*NYC_OFFSET));
    return nd.getHours();
  }

  getEmoji = () => {
    const hour = this.calcTime();
    if(hour >= 20 || hour < 6) {
      return (
        <span role="img" aria-label="current-time-emoji">
          🌃
        </span>
      );
    }
    if(hour >= 6 && hour <= 11) {
      return (
        <span role="img" aria-label="current-time-emoji">
          🌆
        </span>
      );
    }
    if(hour >= 12 && hour <= 18) {
      return (
        <span role="img" aria-label="current-time-emoji">
          🏙
        </span>
      );
    }
    if(hour >= 18 && hour <= 19) {
      return (
        <span role="img" aria-label="current-time-emoji">
          🌇
        </span>
      );
    }
    if(hour >= 18 && hour <= 19) {
      return (
        <span role="img" aria-label="current-time-emoji">
          🌃
        </span>
      );
    }
  }

  render() {
    const emoji = this.getEmoji();
    return (
      <DocumentTitle title="sahil parikh">
        <ColorWrapper>
          <Container fluid>
            <Router>
              <Navbar bg="clear" expand="sm" collapseOnSelect={true}>
                <IndexLinkContainer
                  to="/"
                  activeClassName="nav-brand-active-color"
                >
                  <Navbar.Brand href="/" className="nav-brand-active-color">
                    sahil parikh
                  </Navbar.Brand>
                </IndexLinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <IndexLinkContainer
                      to="/"
                      activeClassName="nav-link-active-color"
                    >
                      <Nav.Link href="/">home</Nav.Link>
                    </IndexLinkContainer>
                    <LinkContainer
                      to="/about"
                      activeClassName="nav-link-active-color"
                    >
                      <Nav.Link href="/about">about</Nav.Link>
                    </LinkContainer>
                    <LinkContainer
                      to="/projects"
                      activeClassName="nav-link-active-color"
                    >
                      <Nav.Link href="/projects">projects</Nav.Link>
                    </LinkContainer>
                    <LinkContainer
                      to="/creative"
                      activeClassName="nav-link-active-color"
                    >
                      <Nav.Link href="/creative">creative</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <Switch>
                <Route exact path="/">
                  <div className="home-content">
                    <Typing speed={40}>
                      <h1>
                        hi! i'm sahil parikh. i'm a software engineer at{" "}
                        <a
                          href="https://www.yext.com"
                          className="blog-list-link"
                        >
                          yext
                        </a>
                        .
                      </h1>
                      <h1>i'm currently based in new york city. {emoji}</h1>
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
        </ColorWrapper>
      </DocumentTitle>
    );
  }
}

export default App;
