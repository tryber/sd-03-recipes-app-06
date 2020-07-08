import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import DrinkCategoriesContext from './DrinkCategoriesContext';
import { getDrinks, getDrinksCategories, getDrinksByCategory } from '../services/DrinkDBApi';

function Provider({ children }) {
  const { setCocktails, setLoading, setError } = useContext(Context);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [drinkCategory, setDrinkCategory] = useState('');

  const handleFetchCocktailsSuccess = (json) => {
    const dataCocktails = json.drinks;
    setCocktails([...dataCocktails]);
    setLoading(false);
  };

  const handleFetchCocktailsError = (err) => {
    setError(err);
    setLoading(false);
  };

  const fetchDrinkCategories = () => {
    getDrinksCategories()
    .then((json) => {
      setDrinkCategories([...json.drinks]);
    });
  };

  const getDrinksByCat = (category) => {
    if (category === drinkCategory || category === 'all') {
      setDrinkCategory('');
      getDrinks().then(
        handleFetchCocktailsSuccess,
        handleFetchCocktailsError,
      );
    } else {
      getDrinksByCategory(category).then(
        handleFetchCocktailsSuccess,
        handleFetchCocktailsError,
      );
      setDrinkCategory(category);
    }
  };

  const context = {
    fetchDrinkCategories,
    drinkCategories,
    getDrinksByCat,
  };

  return (
    <DrinkCategoriesContext.Provider value={context}>
      {children}
    </DrinkCategoriesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
