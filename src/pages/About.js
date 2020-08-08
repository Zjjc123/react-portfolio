import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

function About(props) {
  return (
    <Jumbotron id="about" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} className="bg-transparent jumbotron-fluid">
      <Container fluid className="justify-content-center">
        <h1>Under Construction</h1>
      </Container>
    </Jumbotron>
  )
}

export default About;