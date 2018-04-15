import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
// import { Hello } from "./components/Hello";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li style={{ display: 'inline' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: 'inline', marginLeft: '15px' }}>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Login} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
