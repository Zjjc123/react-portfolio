import React from "react"
import ProjectCard from "../components/Card.js";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid>
                <Row className="justify-content-center py-5">
                    <Col>
                        <h1 className="display-1 font-weight-bolder" >Jason Zhang</h1>
                        <h3 className="display-4 font-weight-light">My Projects</h3>
                        <h3 className="lead font-weight-light">Eastlake 2021</h3>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="justify-content-center py-5">
                    <Col>
                        <ProjectCard
                            title="Covid Pro-Tips"
                            description="Responsive, interactive, and professional website hosted with a Node.js server running on an AWS Ubuntu EC2 instance fetching and displaying live Covid-19 data along interactive maps and datatables."
                            imgSrc={require("../img/covid-pro-tips.png")}
                            buttons={[
                                { name: "Repo", link: "https://github.com/Zjjc123/Covid-Pro-Tips" },
                                { name: "Website", link: "https://www.webcovid-19.live" }
                            ]}
                        />
                    </Col>
                    <Col>
                        <ProjectCard
                            title="Unite NEAT"
                            description="Neural Evolution of Augmenting Topologies Implementation. Using Unity easy Graphical Implementations"
                            imgSrc={require("../img/unite-neat.png")}
                            buttons={[
                                { name: "Repo", link: "https://github.com/Zjjc123/UniteNEAT" },
                            ]}
                        />
                    </Col>
                </Row>
                
            </Container>
        </Jumbotron>
    )
}

export default Projects;