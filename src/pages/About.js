import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

import Col from "react-bootstrap/Col"

function About(props) {
  return (
    <Jumbotron id="about" className="jumbotron-fluid">
      <Container fluid>

        <h1 id="aboutText" className="display-1 font-weight-bolder py-1">Jason Zhang</h1>
        <h3 id="aboutText" className="display-4 font-weight-lighter">Eastlake 2021</h3>
        <Col id = "nopadding" md = {12} lg = {7}>
          <p id="aboutText" style = {{
            fontSize: "25px"
          }}>Jason Zhang is a current high school senior attending Eastlake High School. He is an experienced software developer and an aspiring filmmaker and photographer. 

          Through his journey as a student, he struggled to find a balance between doing what he was interested in and what could get him the most clout on a prestigious application. Years of shifting back and forth made him realize that some things just weren't important to him. He decided that whatever kept himself excited at night, whatever he yearned to work on the next morning, whatever he had the most thrill doing, was what he wanted to focus on. 
          
          Jason's interest in programming was ignited at an early age with exposures to computers, precisely an old Windows XP system. He wanted to learn how things worked, but not just how things worked. Every electronic he got his hands on was a toy. He looked for features and fascinated over the endless possibilities. He saw them not as a tool but a journey that contained endless undiscovered rewards. Soon he began to implement his ideas in the form of programming. Going from simple scratch programs to robotic systems, fully-fledged full-stack website, and implementing machine learning algorithms, he never really looked back. But he knows the joy for pushing through every bug, fixing every error, and the feeling something that just... Worked.
          
          Now he is setting his eyes on the beginning of new projects, dipping his toes into research, and just having a blast grinding on projects with friends. Although he realizes the reality that he lacked eye-catching projects, lacked leadership organizing diversity, and expanding participation in STEM, he knows it is still worth it. Jason still looks for ways to begin contributing his skills and knowledge to valid causes, but only because he truly believes in them.
          
          The idea of recording what he felt about the world through his own lens was a more recent endeavor. But once he picked up a camera at the beginning of high school, Jason hasn't stopped capturing his visions. Filmmaking and photography started as a way for him to record down history, to preserve happy memories. But more importantly at the time, an excuse to seek them. As he began experiencing the power of the moving frames, he realized what he had earned. It was a way to tell his story. Jason found the aspect of storytelling fascinating. It wasn't just a simple string of words or choruses, it was the whole theater production. Specifically, just under the control of one single person. Through his camera and editing, Jason is able to bring attention to good causes, record joyful moments, but also explore the borders of human understanding, philosophy, and ideologies. 
          
          Jason is proficient in Adobe Premiere Pro, Adobe After Effects, and Adobe Photoshop. He has complete many projects with aspects of Compositing, 3D Tracking and Animation, Transitions, Sound Design, Motion Graphics, Color Grading, and more. He is still looking to expand his knowledge and provide captivating content for the world.
          </p>
        </Col>
      </Container>


    </Jumbotron>
  )
}

export default About;