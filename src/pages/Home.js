import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Background from "../img/jumbotronSquare.jpg";
import { Controller, Scene } from "react-scrollmagic";

function Home(props) {
    return (
        <Controller>
            <Scene>
                <Row className="justify-content-center py-5" xs={2} sm={2} md={4} lg={4} xl={5}>
                    <Image src={Background} roundedCircle fluid />
                </Row>
                <Container fluid>
                    <Row className="justify-content-center" >
                        <Col>
                            <h1 className="display-1 font-weight-bolder" >Jason Zhang</h1>
                            <h3 className="display-4 font-weight-light">My Projects</h3>
                            <h3 className="lead font-weight-light">Eastlake 2021</h3>
                        </Col>
                    </Row>
                </Container>
            </Scene>
        </Controller>
    )
}

export default Home