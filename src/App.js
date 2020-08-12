import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch, useLocation } from 'react-router-dom';

import Home from "./pages/Home.js"
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Gallery from './pages/Gallery.js';

import Footer from './components/Footer.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { AnimatePresence } from 'framer-motion'

const App = () => {
  let location = useLocation()

  return (
    <div>
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
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/projects'} component={Projects}/>
              <Route exact path={'/about'} component={About}/>
              <Route exact path={'/gallery'} component={Gallery}/>
            </Switch>
          </AnimatePresence>
          <Footer />
        </div>
    </div>
  );
}

export default App;
