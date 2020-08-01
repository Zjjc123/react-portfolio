import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { TweenMax, Power3 } from 'gsap';

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap';

import ProjectCard from "../components/Card.js";
import nodeJsImage from "../img/icons/nodejs.jpg";
import awsImage from "../img/icons/aws.jpg";
import bsStudioImage from "../img/icons/bsstudio.jpg";

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
                        <h1 id="homeTitle" ref={el => { nameTitle = el }}
                            className="display-1 font-weight-bolder" >Jason Zhang</h1>

                        <h4 id="homeTitle" ref={el => { profTitle = el }} className="display-4 font-weight-light">Programmer Cinematographer</h4>

                        <h3 id="homeTitle" ref={el => { schoolTitle = el }} className="lead font-weight-light">Eastlake 2021</h3>
                    </Col>
                </Row>
            </Container>
            <Controller id="titleBackground">
                <Scene
                    triggerHook="onLeave"
                    duration={1000}
                    indicators={true}
                    pin
                >
                    {(progress) => (
                        <div className="sticky">
                            <Timeline totalProgress={progress} paused>
                                <Timeline
                                    target={
                                        <div className="display-1 font-weight-bolder">
                                            <h2>This is a cool heading</h2>
                                        </div>
                                    }
                                >
                                    <Tween
                                        from={{ opacity: 0 }}
                                        to={{ opacity: 1 }}
                                    />
                                    <Tween
                                        to={{ x: '110%' }}
                                    />
                                </Timeline>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller>
            <div>
                <Col>
                    <ProjectCard
                        title="Covid Pro-Tips"
                        description="Responsive, interactive, and professional website hosted with a Node.js server running on an AWS Ubuntu EC2 instance fetching and displaying live Covid-19 data along interactive maps and datatables."
                        imgSrc={require("../img/projects/covid-pro-tips.png")}
                        links={[
                            { name: "Repo", link: "https://github.com/Zjjc123/Covid-Pro-Tips" },
                            { name: "Website", link: "https://www.webcovid-19.live" }
                        ]}
                        icons={[
                            { img: nodeJsImage },
                            { img: awsImage },
                            { img: bsStudioImage }
                        ]}
                    />
                </Col>
            </div>
        </div>
    )
}

export default Home