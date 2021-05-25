import React from "react";
// eslint-disable-next-line
import Divider from "../Components/Divider";

export default function Projects() {
  return (
    <div id="projects" className="container">
      <h3>Projects</h3>
      <br />
      <div className="projects">
        <div className="project">
          <h4 className="project-title">Pathfinding Visualizer</h4>
          <div className="project-body">
            <div className="project-img-container">
              <img
                className="projectImg"
                src="smallPathfindingV2.jpg"
                alt="Screenshot of the pathfinding visualization application being described. Shows a solved maze completed by the application."
              ></img>
            </div>

            <div className="project-text">
              <p>
                This project is a web application created in React that allows a
                user to interact with a grid to visualize a number of different
                pathfinding algorithms. The user is able to draw walls, create
                different types of mazes, and select an algorithm to search the
                grid from start to finish.
              </p>
              <a className="project-btn" href="/pathfinding-visualizer">
                View Visualizer Demo
              </a>
            </div>
          </div>
        </div>
        <br />
        <Divider />
        <br />

        <div className="project">
          <h4 className="project-title">Klimbs</h4>
          <div className="project-body">
            <div className="project-img-container">
              <img
                className="projectImg"
                src="Klimbs-home.png"
                alt="Screenshot of the pathfinding visualization application being described. Shows a solved maze completed by the application."
              ></img>
            </div>
            <div className="project-text">
              <p>
                This application was a 3 person final project for a
                web-development course. The project is a social media platform
                centered around rock climbers and hikers that allow users to
                share photos and descriptions of places they have gone hiking or
                climbing, as well as interacting with other people's posts! The
                project was written using HTML, CSS, Bootstrap, Express and
                MongoDB. I contributed the initial idea, designs and website
                layouts, as well as assisted with back-end setup and database
                integration.
              </p>
              <a
                className="project-btn"
                href="https://github.com/ljm1400/cs326-final-Dalet"
              >
                View Klimbs Repository
              </a>
            </div>
          </div>
        </div>
        <Divider />
        <br />
        <div className="project">
          <h4 className="project-title">Final Survey</h4>
          <div className="project-body">
            <div className="project-text">
              <p>
                This is a prototype application created with React and Express
                for a Survey Web Application microservice. The application is
                aimed to allow managers to send their employees anonymous
                surveys such that they can get feedback without knowing the
                identities of those that submitted answers. We worked in a team
                of 10 students, each tasked with developing different aspects of
                the application. I contributed to both front-end design and
                logic as well as back-end endpoints and database integration.
              </p>
            </div>
            <div className="project-btn-align">
              <a
                className="project-btn"
                href="https://github.com/ljm1400/cs320-f19-finalsurvey"
              >
                View Final Survey Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
