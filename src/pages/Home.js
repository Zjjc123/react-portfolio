import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import { TweenMax, Power3 } from 'gsap';

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap';

import { Image as BImage } from 'react-bootstrap'

import { BrowserView, MobileView, isMobile } from 'react-device-detect'

const videoImages = require.context('../../public/images/desktop', true);
const mobileImages = require.context('../../public/images/mobile', true);

const numFrames = 139

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

        for (var i = 0; i < numFrames; i++) {
            const img = new Image()

            let zeros = ""

            if (i < 10)
                zeros = "00"
            else if (i < 100)
                zeros = "0"

            if (!isMobile)
                img.src = videoImages("./video" + zeros + i + ".jpg")
            else
                img.src = mobileImages("./video" + zeros + i + ".jpg")

            console.log("loaded: ", "./video" + zeros + i + ".jpg")
        }

    }, [])

    const handleVideo = (element, p, mobile) => {
        p *= numFrames

        let zeros = ""

        if (p < 10)
            zeros = "00"
        else if (p < 100)
            zeros = "0"


        const name = "./video" + zeros + Math.floor(p) + ".jpg"

        if (element != null) {
            if (!mobile)
                element.src = videoImages(name)
            else
                element.src = mobileImages(name)
        }
    }

    return (
        <div>
            <Container fluid className="titleBackground">
                <div className="bar-1" />
                <Col className="heading">
                    <h1 ref={el => { nameTitle = el }}
                        className="homeTitle1" >JASON ZHANG</h1>

                    <h4 ref={el => { profTitle = el }} className="homeTitle2">Creative</h4>
                </Col>
                <Col className="heading2">
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
                                            from={{ opacity: 0, yPercent: "-60" }}
                                            to={{ opacity: 1, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, yPercent: "-20" }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered">CINEMATOGRAPHY</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0, yPercent: "-60" }}
                                            to={{ opacity: 1, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, yPercent: "-20" }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered">PROGRAMMING</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0, yPercent: "-60" }}
                                            to={{ opacity: 1, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, yPercent: "-20" }}
                                        />
                                    </Timeline>
                                </Timeline>
                                <BrowserView>
                                    <BImage ref={el => handleVideo(el, progress, false)} className="video" />
                                </BrowserView>
                                <MobileView>
                                    <BImage ref={el => handleVideo(el, progress, true)} className="video" />
                                </MobileView>
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