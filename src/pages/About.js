import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Col from "react-bootstrap/Col"

function About(props) {
  return (
    <Jumbotron id="about" className="jumbotron-fluid">
      <Container fluid>

        <h1 id="aboutText" className="display-1 font-weight-bolder py-1">Jason Zhang</h1>
        <h3 id="aboutText" className="display-4 font-weight-lighter">Eastlake 2021</h3>
        <Col id = "nopadding" md = {12} lg = {7}>
          <p id="aboutText" className="display-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus quam ut mauris lobortis, sed pretium felis efficitur. Suspendisse potenti. Quisque et euismod est, nec porta turpis. In ullamcorper est erat, nec scelerisque est rhoncus a. Nam lobortis dapibus tincidunt. Maecenas hendrerit lacus tellus. Phasellus eu molestie ipsum. Maecenas scelerisque dignissim sapien, at elementum dui iaculis sed. Nulla et diam sit amet libero facilisis placerat. Curabitur nunc enim, lacinia vitae nisl eget, pretium convallis justo. Ut varius eleifend rhoncus. Integer volutpat dui dignissim risus vulputate tempus.

          Suspendisse potenti. Morbi cursus, leo eget porta sollicitudin, quam ante condimentum metus, non porta nulla nunc sit amet nulla. Sed eget dolor est. Mauris eu ligula nec dui placerat aliquet. Sed et quam mollis, aliquam nibh at, tincidunt urna. Pellentesque fringilla finibus libero nec semper. Donec sagittis nulla vitae vehicula feugiat. Vivamus in arcu nibh. Nulla id luctus neque, at pretium enim. Aliquam ullamcorper orci non ipsum condimentum elementum. Maecenas eleifend scelerisque tincidunt. Curabitur vel maximus risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam eget mi ut porta. Mauris vel placerat nibh, eu aliquet mauris.

          Praesent eu volutpat est. Suspendisse ligula nisl, mollis eget luctus gravida, tincidunt et mi. Aliquam eu elit suscipit, eleifend eros a, pellentesque velit. Cras ultrices elementum sapien, eget porttitor enim tempus tempor. Sed lacinia egestas sapien imperdiet placerat. Cras diam nunc, viverra eu porttitor sit amet, pharetra nec nunc. Nunc sed condimentum turpis. Sed ut nisl quis tellus dignissim convallis vitae ut magna. Suspendisse sit amet tempus purus, ut egestas tortor. In ac metus mi. Maecenas sit amet eleifend ligula. Cras quam sapien, sollicitudin quis maximus et, laoreet at metus. Suspendisse potenti. Fusce in feugiat ligula. Pellentesque libero mi, vehicula ut commodo a, rutrum eu nisl.</p>
        </Col>
      </Container>


    </Jumbotron>
  )
}

export default About;