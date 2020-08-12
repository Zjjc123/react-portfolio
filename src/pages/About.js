import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function About(props) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}>
      <Jumbotron id="about" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }} className="bg-transparent jumbotron-fluid">
        <Container fluid className="justify-content-center">
          <h1>Under Construction</h1>
        </Container>
      </Jumbotron>
    </motion.div>
  )
}

export default About;