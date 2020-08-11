import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';

import Home from "./pages/Home.js"
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';

import Footer from './components/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL} >
          <div className="App">
            <Navbar className="navbar" expand="lg">
              <Navbar.Brand href="/">
                <img
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
              </Navbar.Brand>
              <Navbar.Brand className="navbar-text" href="/">Jason Zhang</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link className="navbar-text" href="/#">Home</Nav.Link>
                  <Nav.Link className="navbar-text" href="/#/projects">Projects</Nav.Link>
                  <Nav.Link className="navbar-text" href="/#/about">About</Nav.Link>
                  <Nav.Link className="navbar-text" href="/#/gallery">Gallery</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route exact path={'/'} component={Home} />
            <Route path={'/projects'} component={Projects} />
            <Route path={'/about'} component={About} />
            <Route path={'/gallery'} component={Gallery} />

            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
