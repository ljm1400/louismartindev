import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Nav.js';
import About from './Pages/About.js';
import Experience from './Pages/Experience.js';
import Projects from './Pages/Projects.js';
import Home from './Pages/Home.js';
import Contact from './Pages/Contact.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
