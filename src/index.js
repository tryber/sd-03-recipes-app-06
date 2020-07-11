import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Provider from './context/Provider';
import ProviderDetails from './context/ProviderDetails';
import ProviderDrinkCategories from './context/ProviderDrinkCategories';
import { ProviderExploreIgredientsMeal } from './context/ExploreIgredientsMeal';
import ProviderInProgress from './context/ProviderInProgress';

ReactDOM.render(
  <Router>
    <ProviderInProgress>
      <ProviderDetails>
        <Provider>
          <ProviderDrinkCategories>
            <ProviderExploreIgredientsMeal>
              <App />
            </ProviderExploreIgredientsMeal>
          </ProviderDrinkCategories>
        </Provider>
      </ProviderDetails>
    </ProviderInProgress>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
