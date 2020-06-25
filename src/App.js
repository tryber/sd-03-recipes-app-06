import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Comidas from './pages/Comidas';
import Bebidas from './pages/Bebidas';
import Perfil from './pages/Perfil';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" />
          <Route path="/bebidas" component={Bebidas} />
          <Route path="/comidas" component={Comidas} />
          <Route path="/perfil" component={Perfil} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
