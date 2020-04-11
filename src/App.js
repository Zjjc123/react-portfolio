import React from 'react';
import logo from './logo.svg';
import './App.css';

import {HashRouter, Route} from 'react-router-dom';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';

import Footer from './components/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar bg="light" expand="lg">
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
              <Nav.Link href="/#">Projects</Nav.Link>
              <Nav.Link href="/#/about">About</Nav.Link>
              <Nav.Link href="/#/gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path= {'/'} component={Projects} />
        <Route path= {'/about'} component={About} />
        <Route path= {'/gallery'} component={Gallery} />

        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
