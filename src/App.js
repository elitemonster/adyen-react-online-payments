import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Checkout } from "./features/checkout/Checkout";
import { Preview } from "./features/preview/Preview";
import { Status } from "./features/status/Status";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/preview/:type">
          <Preview />
        </Route>
        <Route path="/checkout/:type">
          <Checkout />
        </Route>
        <Route path="/status/:type">
          <Status />
        </Route>
        <Route path="/">
          <div className="main-container">
            <div className="info">
              <h1>Select a demo</h1>
              <p>Click to view an interactive example of a PCI-compliant UI integration for online payments.</p>
              <p>
                To learn more about client-side integration solutions, check out{" "}
                <a href="https://docs.adyen.com/checkout">Online payments.</a>
              </p>
            </div>
            <ul className="integration-list">
              <li className="integration-list-item">
                <Link to="/preview/dropin" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Drop-in</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/card" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">Card</p>
                  </div>
                </Link>
              </li>
              <li className="integration-list-item">
                <Link to="/preview/ideal" className="integration-list-item-link">
                  <div className="title-container">
                    <p className="integration-list-item-title">iDEAL</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
