import React from "react";
import ProjectCard from "../components/Card.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Background from "../img/jumbotronSquare.jpg";

import nodeJsImage from "../img/icons/nodejs.jpg";
import awsImage from "../img/icons/aws.jpg";
import bsStudioImage from "../img/icons/bsstudio.jpg";

import unityImage from "../img/icons/unity.jpg";
import csImage from "../img/icons/cs.jpg";

import asImage from "../img/icons/androidstudio.jpg";
import javaImage from "../img/icons/java.jpg";

function Projects(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Row className = "justify-content-center py-5" xs = {2} sm = {2} md = {4} lg = {4} xl = {5}>
                <Image src={Background} roundedCircle fluid/>
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
            <Container fluid className = "py-5">
                <Row>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProjectCard
                            title="Covid Pro-Tips"
                            description="Responsive, interactive, and professional website hosted with a Node.js server running on an AWS Ubuntu EC2 instance fetching and displaying live Covid-19 data along interactive maps and datatables."
                            imgSrc={require("../img/covid-pro-tips.png")}
                            links={[
                                { name: "Repo", link: "https://github.com/Zjjc123/Covid-Pro-Tips" },
                                { name: "Website", link: "https://www.webcovid-19.live" }
                            ]}
                            icons = {[
                                {img : nodeJsImage},
                                {img : awsImage},
                                {img : bsStudioImage}
                            ]}
                        />
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProjectCard
                            title="Unite NEAT"
                            description="Neural Evolution of Augmenting Topologies Implementation. Using Unity easy Graphical Implementations"
                            imgSrc={require("../img/unite-neat.png")}
                            links={[
                                { name: "Repo", link: "https://github.com/Zjjc123/UniteNEAT" },
                            ]}
                            icons = {[
                                {img : unityImage},
                                {img : csImage},
                            ]}
                        />
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: 'center' }}>
                        <ProjectCard
                            title="Vitality"
                            description="Mobile Fitness App built on Android Studio that provides a variety of health-related functionalities like heart rate monitoring and fitness counters. Complete with a minimalistic UI, profile settings, and pinned notifications."
                            imgSrc={require("../img/vitality.jpg")}
                            links={[
                                { name: "Repo", link: "https://github.com/Zjjc123/Vitality" },
                            ]}
                            icons = {[
                                {img : asImage},
                                {img : javaImage}
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Projects;