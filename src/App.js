import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Meals from './components/Meals';
import cocktails from './components/Cocktails';
import LoginPage from './components/LoginPage/LoginPage';

import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/meals" component={Meals} />
      <Route path="/cocktails" component={cocktails} />
    </Switch>
  );
}

export default App;
