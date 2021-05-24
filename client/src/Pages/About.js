import React from "react";

export default function About() {
  return (
    <div className="container" id="about">
      <h3>About Myself</h3>
      <section className="section">
        <div className="about-img-container ">
          <div className="row about-img-padding">
            <img
              className="about-img"
              src="react-logo.png"
              alt="Logo for React.js"
            ></img>
            <img
              className="about-img"
              src="express-logo.png"
              alt="Logo for Express.js"
            ></img>
          </div>
          <div className="row about-img-padding">
            <img
              className="about-img"
              src="html-logo.png"
              alt="Logo for HTML5"
            ></img>
            <img
              className="about-img"
              src="css-logo.png"
              alt="Logo for CSS3"
            ></img>
          </div>
          <div className="row about-img-padding">
            <img
              className="about-img "
              src="mongo-logo.png"
              alt="Logo for MongoDB"
            ></img>
          </div>
        </div>
        <div className="col">
          <p>
            My name is Louis Martin, a full-stack Web Developer with a
            Bachelor's of Science in Computer Science from the University of
            Massachusetts, Amherst. I have been programming for about 6 years
            now and I mainly do full stack web development using React.js,
            Express.js, as well as general javascript, HTML, and CSS.
          </p>

          <p>
            I am always working on picking up new technologies and improving my
            design and development skills. While my main focus is web
            development, I also have experience with Python and Java developing
            small-scale applications.
          </p>
        </div>
      </section>
    </div>
  );
}
