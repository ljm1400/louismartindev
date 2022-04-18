import "./App.css";
import Nav from "./Components/Nav.js";
import About from "./Pages/About.js";
import Projects from "./Pages/Projects.js";
import Home from "./Pages/home/Home.js";
import Contact from "./Pages/contact/Contact.js";
import Footer from "./Components/Footer.js";
import React from "react";
import Divider from "./Components/Divider";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home />
      <Projects />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
