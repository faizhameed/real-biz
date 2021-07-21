import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import Button from './components/Buttons';

const Hello = () => {
  return (
    <div>
      <h1>Real Biz</h1>
      <p>Real time updates from the Tally Database</p>
      <Button>Enter here</Button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
