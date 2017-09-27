import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import UserPage from "./components/userpage/UserPage";
import CoachPage from "./components/coachpage/CoachPage";
import NoMatch from "./components/nomatch/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/coach" component={CoachPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
