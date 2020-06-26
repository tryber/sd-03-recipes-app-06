import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginContainer';
import Meals from './components/Meals';
import Cocktails from './components/Cocktails';
import './App.css';

export default function App() {
  return (
    <div>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <div id="meals">
              <Route exact path="/Meals" component={Meals} />
            </div>
            <div id="cocktails">
              <Route exact path="/Cocktails" component={Cocktails} />
            </div>
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
