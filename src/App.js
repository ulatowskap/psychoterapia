import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Calendar from "./Calendar";
import Media from "./Media";
import Offer from "./Offer";
import Logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/calendar">Kalendarz</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li></li>
            <li>
              <Link to="/about">O mnie</Link>
            </li>
            <li>
              <Link to="/offer">Oferta</Link>
            </li>
          </ul>
        </nav>

        <div className="logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/media" component={Media} />
        <Route path="/offer" component={Offer} />
      </Router>
    );
  }
}

export default App;
