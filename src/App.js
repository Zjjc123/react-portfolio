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
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/Projects">Projects</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={About} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Gallery" component={Gallery} />
      </div>
    </BrowserRouter>
  );
}

export default App;
