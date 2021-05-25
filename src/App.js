import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//minute 59:29 Link https://www.youtube.com/watch?v=I2UBjN5ER4s&t=1880s
