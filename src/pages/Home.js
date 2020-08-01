import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {TweenMax, Power3} from 'gsap';

function Home(props) {
    let nameTitle = useRef()
    let profTitle = useRef()
    let schoolTitle = useRef()

    useEffect(() => {
        TweenMax.to(
            nameTitle,
            2.0,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut
            }
        )
        TweenMax.to(
            profTitle,
            2.0,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: 0.3
            }
        )
        TweenMax.to(
            schoolTitle,
            2.0,
            {
                opacity: 1,
                y: -30,
                ease: Power3.easeOut,
                delay: 0.3
            }
        )
    }, [])

    return (
        <div>
            <Container fluid id="titleBackground">
                <Row className="justify-content-right" >
                    <Col>
                        <h1 id = "homeTitle" ref={el => {nameTitle = el}}
                        className="display-1 font-weight-bolder" >Jason Zhang</h1>

                        <h4 id = "homeTitle" ref={el => {profTitle = el}}className="display-4 font-weight-light">Programmer Cinematographer</h4>

                        <h3 id = "homeTitle" ref={el => {schoolTitle = el}}className="lead font-weight-light">Eastlake 2021</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home