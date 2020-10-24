import React from "react";
import Container from "react-bootstrap/Container";

import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }

function Landing() {
    return (
        <motion.div>
            <Container fluid className="titleBackground">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={transition}>
                        <video className="background-video" loop autoPlay muted>
                            <source src={process.env.PUBLIC_URL + "/videos/landing.mp4"} type="video/mp4" />
                        </video>
                    </motion.div>
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
                        className="homeTitle2 not-selectable">CREATIVE</motion.h4>
                    <motion.h3 exit={{ x: "-150%" }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, ...transition }}
                        className="font-weight-light homeTitle3 not-selectable">EASTLAKE 2021</motion.h3>
                </div>
            </Container>
        </motion.div >
    )
}

export default Landing
