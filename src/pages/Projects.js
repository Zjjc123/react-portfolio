import React from "react";

import ProjectCard from "../components/Projects/Card.js";

import nodeJsImage from "../img/icons/nodejs.jpg";
import awsImage from "../img/icons/aws.jpg";
import bsStudioImage from "../img/icons/bsstudio.jpg";

import unityImage from "../img/icons/unity.jpg";
import csImage from "../img/icons/cs.jpg";

import asImage from "../img/icons/androidstudio.jpg";
import javaImage from "../img/icons/java.jpg";

function Projects() {
    return (
        <div className="page">
            <div className='container'>
                <div className='row'>
                    <h1 className="project-title">PROJECTS</h1>
                </div>
                <div className='row'>
                    <div className='col'>
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
                    </div>
                    <div className='col'>
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
                    </div>
                    <div className='col'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;