import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import {
  fetchIgredientsMeal,
  fetchIgredientsDrink,
} from '../services/ExploreMeals';

const ExploreIgredientsMealContext = createContext();

const ProviderExploreIgredientsMeal = ({ children }) => {
  const [igredientsMeal, setIgredientsMeal] = useState([]);
  const [igredientsDrink, setIgredientsDrink] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIgredMeal = () => {
    fetchIgredientsMeal().then((json) => {
      setIgredientsMeal([...json.meals]);
      setLoading(false);
    });
  };
  const fetchIgredDrink = () => {
    fetchIgredientsDrink().then((json) => {
      setIgredientsDrink([...json.drinks]);
      setLoading(false);
    });
  };

  const contextValue = {
    fetchIgredMeal,
    fetchIgredDrink,
    igredientsMeal,
    igredientsDrink,
    loading,
  };

  return (
    <ExploreIgredientsMealContext.Provider value={contextValue}>
      {children}
    </ExploreIgredientsMealContext.Provider>
  );
};

ProviderExploreIgredientsMeal.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProviderExploreIgredientsMeal, ExploreIgredientsMealContext };
