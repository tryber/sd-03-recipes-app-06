import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import fetchIgredientsMeal from '../services/ExploreMeals';

const ExploreIgredientsMealContext = createContext();

const ProviderExploreIgredientsMeal = ({ children }) => {
  const [igredientsMeal, setIgredientsMeal] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchIgredMeal = () => {
    console.log('function called');
    fetchIgredientsMeal()
    .then((json) => {
      setIgredientsMeal([...json.meals]);
      setLoading(false);
    })
  };


  const contextValue = {
    fetchIgredMeal,
    igredientsMeal,
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
