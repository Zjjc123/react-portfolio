import React from "react"
import ProjectCard from "../components/Card.js";
import Jumbotron from "react-bootstrap/Jumbotron";

function Projects(props) {
    return (
        <Jumbotron>
        <div>
            <h1>Projects</h1>
            <ProjectCard
                title="Covid Pro-Tips"
                description = "Responsive, interactive, and professional website hosted with a Node.js server running on an AWS Ubuntu EC2 instance fetching and displaying live Covid-19 data along interactive maps and datatables."
                repoLink = "https://github.com/Zjjc123/Covid-Pro-Tips"
            />
        </div>
        </Jumbotron>
    )
}

export default Projects;