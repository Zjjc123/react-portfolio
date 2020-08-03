import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { TweenMax, Power3 } from 'gsap';

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap';

import { Image } from 'react-bootstrap'

const videoImages = require.context('../../public/images/c2', true);

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

    const handleVideo = (element, p) => {
        p *= 70

        let zeros = ""

        if (p < 10)
            zeros = "0"

        const name = "./Test" + zeros + Math.floor(p) + ".jpg"

        if (element != null) {
            element.src = videoImages(name)
        }
    }

    return (
        <div>
            <Container fluid className="titleBackground">
                <Col className="justify-content-center heading">

                    <h1 ref={el => { nameTitle = el }}
                        className="homeTitle1" >JASON ZHANG</h1>

                    <h4 ref={el => { profTitle = el }} className="homeTitle2">Creative</h4>

                    <h3 ref={el => { schoolTitle = el }} className="font-weight-light homeTitle3">Eastlake 2021</h3>

                </Col>
            </Container>
            <Controller>
                <Scene triggerHook="onLeave"
                    duration={3000}
                    pin>
                    {(progress) => {
                        return (
                            <div className="block">
                                <Timeline totalProgress={progress} paused>
                                    <Timeline
                                        target={
                                            <div class="centered">PHOTOGRAPHY</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                        <Tween
                                            to={{ opacity: 0 }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered">CINEMATOGRAPHY</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                        <Tween
                                            to={{ opacity: 0 }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered">PROGRAMMING</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                        <Tween
                                            to={{ opacity: 0 }}
                                        />
                                    </Timeline>
                                </Timeline>
                                <Image ref={el => handleVideo(el, progress)} className="video" />
                            </div>
                        )
                    }}
                </Scene>
            </Controller>
            <Controller>
                <Scene
                    triggerHook="onLeave"
                    duration={1000}
                    pin
                >
                    {(progress) => (
                        <div className="sticky">
                            <Timeline totalProgress={progress} paused>
                                <Timeline
                                    target={
                                        <div>
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

            <div className="section" />
            <div className="section" />
            <div className="section" />
        </div>
    )
}

export default Home