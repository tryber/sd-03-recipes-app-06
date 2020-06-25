import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Comidas from './pages/Comidas';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Comidas} />
          <Route path="/comidas" component={Comidas} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
