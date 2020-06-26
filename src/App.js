import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from './context/getMeals';
import Meals from './components/Meals';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/comidas" component={Meals} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
