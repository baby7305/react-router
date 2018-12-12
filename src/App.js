import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to={{ pathname: "/account", search: "?name=netflix" }}>
                Netflix
            </Link>
            </li>
            <li>
              <Link to={{ pathname: "/basic", search: "?name=zillow-group" }}>
                Zillow Group
            </Link>
            </li>
            <li>
              <Link to={{ pathname: "/chart", search: "?name=yahoo" }}>
                Yahoo
            </Link>
            </li>
            <li>
              <Link to={{ pathname: "/delicious", search: "?name=modus-create" }}>
                Modus Create
            </Link>
            </li>
          </ul>
          <Switch>
            {/* <Route path='/:id' component={Child} /> */}
            {/* <Route path='/:id' component={Child1} /> */}
            <Route path="/child1" component={Child1} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Child = ({ match }) => console.log('match', match) || (
  <div>
    <h3>query string</h3>
    <h3>{match.params.id}</h3>
  </div>
)

const Child1 = ({ location }) => console.log('location', location) || (
  <div>
    <h3>query string</h3>
    <h3>{location.search}</h3>
  </div>
)

export default App;
