import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className="border-bottom" bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              src= {logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Brand href="/">Jason Zhang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Projects</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Projects} />
        <Route path="/About" component={About} />
        <Route path="/Gallery" component={Gallery} />
      </div>
    </BrowserRouter>
  );
}

export default App;
