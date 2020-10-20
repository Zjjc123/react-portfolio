import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";

import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap';

import { Image as BImage } from 'react-bootstrap'

import { BrowserView, MobileView, isMobile } from 'react-device-detect'

import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }

const numFrames = 139

function About() {
    useEffect(() => {
        for (var i = 0; i < numFrames; i++) {
            const img = new Image()

            let zeros = ""

            if (i < 10)
                zeros = "00"
            else if (i < 100)
                zeros = "0"

            if (!isMobile)
                img.src = process.env.PUBLIC_URL + "/images/desktop/video/" + zeros + i + ".jpg"
            else
                img.src = process.env.PUBLIC_URL + "/images/mobile/video/" + zeros + i + ".jpg"
        }

    }, [])

    const handleVideo = (element, p, mobile) => {
        p *= numFrames

        let zeros = ""

        if (p < 10)
            zeros = "00"
        else if (p < 100)
            zeros = "0"


        const name = "/video" + zeros + Math.floor(p) + ".jpg"

        if (element != null) {
            if (!mobile)
                element.src = process.env.PUBLIC_URL + "/images/desktop/" + name;
            else
                element.src = process.env.PUBLIC_URL + "/images/mobile/" + name;
        }
    }

    return (
        <motion.div>
            <Container fluid className="titleBackground">
                <BrowserView>
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={transition}>
                        <video className="background-video" loop autoPlay muted>
                            <source src={process.env.PUBLIC_URL + "/videos/landing.mp4"} type="video/mp4" />
                        </video>
                    </motion.div>
                </BrowserView>
                <div className="heading">
                    <motion.h1
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ x: "-150%" }}
                        transition={transition}
                        className="homeTitle1 not-selectable" >JASON ZHANG</motion.h1>
                    <motion.h4 exit={{ x: "-150%" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, ...transition }}
                        className="homeTitle2 not-selectable">Creative</motion.h4>
                    <motion.h3 exit={{ x: "-150%" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, ...transition }}
                        className="font-weight-light homeTitle3 not-selectable">Eastlake 2021</motion.h3>
                </div>
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
                                            <div class="centered not-selectable">PHOTOGRAPHY</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0, xPercent: 50, yPercent: "-60" }}
                                            to={{ opacity: 1, xPercent: 50, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, xPercent: 50, yPercent: "-20" }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered not-selectable">CINEMATOGRAPHY</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0, xPercent: 50, yPercent: "-60" }}
                                            to={{ opacity: 1, xPercent: 50, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, xPercent: 50, yPercent: "-20" }}
                                        />
                                    </Timeline>
                                    <Timeline
                                        target={
                                            <div class="centered not-selectable">PROGRAMMING</div>
                                        }
                                    >
                                        <Tween
                                            from={{ opacity: 0, xPercent: 50, yPercent: "-60" }}
                                            to={{ opacity: 1, xPercent: 50, yPercent: "-40" }}
                                        />
                                        <Tween
                                            to={{ opacity: 0, xPercent: 50, yPercent: "-20" }}
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
        </motion.div >
    )
}

export default About