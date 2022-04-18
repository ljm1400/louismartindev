import React from "react";
import "./home.css"

export default function Home() {
  return (
    <div id="home" className="home-container">
     <div className="wheel">
            <div className="center-image">
                <div>
                    <h2>Louis Martin Software Engineer</h2>
                </div>
                <img src="logo.svg" alt=""/>
            </div>
            <ul>
                <li>
                  <img src="about.svg" alt=""/>
                  <a href="#about">About</a>
                </li>
                <li>
                  <img src="projects.svg" alt=""/>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <img src="education.svg" alt=""/>
                  <a href="#education">Education</a>
                </li>
                <li>
                  <img src="contact.svg" alt=""/>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <img src="interests.svg" alt=""/>
                  <a href="#interests">Interests</a>
                </li>
            </ul>
        </div>
    </div>
  );
}
