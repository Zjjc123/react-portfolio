import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { motion } from 'framer-motion';

import logo from '../logo.svg';

const transition = { duration: 0.7, ease: [0.6, 0.1, -0.05, 0.9] }

const NavBar = () => {
    return (
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
                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={transition}
                        className="navbar-text" href="/#">Home</motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={transition}
                        className="navbar-text" href="/#/projects">Projects</motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={transition}
                        className="navbar-text" href="/#/about">About</motion.a>
                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.2 }}
                        transition={transition}
                        className="navbar-text" href="/#/gallery">Gallery</motion.a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;