import React from 'react';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';

function App() {
  return (
    <Container fluid>
      <Navbar bg="clear" expand="lg">
        <Navbar.Brand href="#home">sahil parikh</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#link">about</Nav.Link>
            <Nav.Link href="#link">projects</Nav.Link>
            <Nav.Link href="#link">creative</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="main-content">
        <h1>hi! i'm sahil parikh. i'm currently an engineer at yext.</h1>
      </div>
    </Container>
  );
}

export default App;
