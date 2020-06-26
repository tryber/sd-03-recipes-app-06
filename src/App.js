import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginContainer';
import Meals from './components/Meals';
import './App.css';
import Cocktails from './components/Cocktails';

export default function App() {
  return (
    <div>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <div id="cocktails">
              <Route exact path="/cocktails" component={Cocktails} />
            </div>
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
