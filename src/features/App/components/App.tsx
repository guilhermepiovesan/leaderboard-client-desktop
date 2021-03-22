import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Leaderboard from '../../Leaderboard';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Leaderboard} />
      </Switch>
    </Router>
  );
}
