import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getCocktailsByLetter,
  // getCokctailsByName,
  // getCocktailsList,
  // filterCocktailsByCategorie,
  // getCocktailsByIngredient,
  // getCocktailsByID,
  // getCocktailsIngredientImage,
} from '../services/CocktailsApi';

const GetCocktailsContext = createContext();

const Provider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleFetchCocktailsSuccess = (json) => {
    const dataCocktails = json.drinks;
    setCocktails([...dataCocktails]);
    setLoading(false);
  };

  const handleFetchCocktailsError = (err) => {
    setError(err);
    setLoading(false);
  };

  const fetchCocktails = (a) => {
    if (loading) return;
    setLoading(true);
    getCocktailsByLetter(a).then(
      handleFetchCocktailsSuccess,
      handleFetchCocktailsError,
    );
  };

  const context = {
    cocktails,
    loading,
    error,
    fetchCocktails,
  };

  return (
    <GetCocktailsContext.Provider value={context}>
      {children}
    </GetCocktailsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, GetCocktailsContext };
