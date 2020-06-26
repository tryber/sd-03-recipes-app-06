import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  getCokctailsByName,
  // getCocktailsList,
  // filterCocktailsByCategorie,
} from '../services/CocktailsApi';

const GetCocktailsContext = createContext();

const Provider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleFetchCocktailsSuccess = (json) => {
    const dataCocktails = json.cocktails;
    setCocktails([...dataCocktails]);
    setLoading(false);
  };

  const handleFetchCocktailsError = (err) => {
    setError(err);
    setLoading(false);
  };

  const fetchCocktails = () => {
    if (loading) return;
    setLoading(true);
    getCokctailsByName().then(
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
