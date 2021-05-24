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
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}
