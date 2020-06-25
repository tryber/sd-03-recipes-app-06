import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginContainer';

import './App.css';

export default function App() {
  return (
    <div>
      <section>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}
