import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
          <NoMatch />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
