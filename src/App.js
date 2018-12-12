import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Index extends Component {
  render() {
    return (
      <h2>Home</h2>
    );
  }
}

const About = () => (
  <div>
    <h2> About </h2>
  </div>
);
const Users = () => (
  <div>
    <h2> Users </h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    );
  }
}

export default App;