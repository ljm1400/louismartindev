import React from "react";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-logo">
        <a className="logo" href="#home">
          <img
            className="logo-img"
            src="logo.svg"
            alt="Logo for Louis Martin - Web Developer"
          ></img>
        </a>
      </div>
      <div className="main-nav">
        <div className="nav-link">
          <a href="#projects">Projects</a>
        </div>
        <div className="nav-link">
          <a href="#about">About</a>
        </div>
        <div className="nav-link">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}
