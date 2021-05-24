import React from "react";

export default function Home() {
  return (
    <div id="home" className="home-container">
      <div className="home-text-container">
        <h1>Hello, I'm</h1>
        <h2>Louis Martin</h2>
        <h3>Full Stack Web Developer</h3>
        <a href="#projects">View Projects</a>
      </div>
      <br />
      <br />
      <br />
      <div className="break"></div>
      <div className="icon-container">
        <a href="https://www.linkedin.com/in/louismartin20/">
          <div className="linkedin"></div>
        </a>
        <a href="https://github.com/ljm1400?tab=repositories">
          <img
            className="git-logo"
            src="github-logo.png"
            alt="Github Logo leading to my github page"
          ></img>
        </a>
      </div>
    </div>
  );
}
