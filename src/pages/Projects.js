import React from "react";
import ProjectCard from "../components/Card.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { motion } from "framer-motion"

import nodeJsImage from "../img/icons/nodejs.jpg";
import awsImage from "../img/icons/aws.jpg";
import bsStudioImage from "../img/icons/bsstudio.jpg";

import unityImage from "../img/icons/unity.jpg";
import csImage from "../img/icons/cs.jpg";

import asImage from "../img/icons/androidstudio.jpg";
import javaImage from "../img/icons/java.jpg";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }

function Projects(props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}>
            <Jumbotron className="bg-transparent jumbotron-fluid p-0">
                <h1 className="project-title">Projects</h1>
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
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
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProjectCard
                            title="Unite NEAT"
                            description="Neural Evolution of Augmenting Topologies Implementation. Using Unity easy Graphical Implementations"
                            imgSrc={require("../img/projects/unite-neat.png")}
                            links={[
                                { name: "Repo", link: "https://github.com/Zjjc123/UniteNEAT" },
                            ]}
                            icons={[
                                { img: unityImage },
                                { img: csImage },
                            ]}
                        />
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProjectCard
                            title="Vitality"
                            description="Mobile Fitness App built on Android Studio that provides a variety of health-related functionalities like heart rate monitoring and fitness counters. Complete with a minimalistic UI, profile settings, and pinned notifications."
                            imgSrc={require("../img/projects/vitality.jpg")}
                            links={[
                                { name: "Repo", link: "https://github.com/Zjjc123/Vitality" },
                            ]}
                            icons={[
                                { img: asImage },
                                { img: javaImage }
                            ]}
                        />
                    </Col>
                </Row>
            </Jumbotron>
        </motion.div>
    )
}

export default Projects;