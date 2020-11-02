import React from "react";
import ProjectCard from "../components/Projects/Card.js";

function Projects() {
    return (
        <div className="page">
            <div className='container'>
                <div className='projects'>
                    <ProjectCard
                        title="Covid Pro-Tips"
                        description="Responsive, interactive, and professional website hosted with a Node.js server running on an AWS Ubuntu EC2 instance fetching and displaying live Covid-19 data along interactive maps and datatables."
                        imgSrc={"/images/projects/covid-pro-tips.jpg"}
                        links={[
                            { name: "Repo", link: "https://github.com/Zjjc123/Covid-Pro-Tips" },
                            { name: "Website", link: "https://www.webcovid-19.live" }
                        ]}
                    />
                    <ProjectCard
                        title="Unite NEAT"
                        description="Neural Evolution of Augmenting Topologies Implementation. Using Unity easy Graphical Implementations"
                        imgSrc={"/images/projects/unite-neat.jpg"}
                        links={[
                            { name: "Repo", link: "https://github.com/Zjjc123/UniteNEAT" },
                        ]}
                    />
                    <ProjectCard
                        title="Vitality"
                        description="Mobile Fitness App built on Android Studio that provides a variety of health-related functionalities like heart rate monitoring and fitness counters. Complete with a minimalistic UI, profile settings, and pinned notifications."
                        imgSrc={"/images/projects/vitality.jpg"}
                        links={[
                            { name: "Repo", link: "https://github.com/Zjjc123/Vitality" },
                        ]}
                    />
                </div>
            </div>
        </div>

    )
}

export default Projects;