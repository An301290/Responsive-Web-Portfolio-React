import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About.js";
import Portfolio from "./components/Pages/Portfolio";
import Resume from "./components/Pages/Resume";
import Contact from "./components/Pages/Contact";
import Portfolio_compressed from "./sample.pdf";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
