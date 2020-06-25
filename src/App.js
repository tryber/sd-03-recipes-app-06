import React from 'react';
import { Provider } from './context/getMeals';
import Meals from './components/Meals';
import './App.css';

function App() {
  return (
    <Provider>
      <div id="meals">
        <Meals />
      </div>
    </Provider>
  );
}

export default App;
