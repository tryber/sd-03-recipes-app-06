import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/comidas" component={Comidas} />
          <Route path="/bebidas" component={Bebidas} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
