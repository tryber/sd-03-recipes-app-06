import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import  { getMealByLetter } from '../services/MealDBApi';
import {
  getCocktailsByLetter,
  // getCokctailsByName,
  // getCocktailsList,
  // filterCocktailsByCategorie,
  // getCocktailsByIngredient,
  // getCocktailsByID,
  // getCocktailsIngredientImage,
} from '../services/CocktailsApi';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [meals, setMeals] = useState([]);
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

  const fetchCocktails = () => {
    if (loading) return;
    setLoading(true);
    getCocktailsByLetter('a').then(
      handleFetchCocktailsSuccess,
      handleFetchCocktailsError,
    );
  };

  const handleFetchMealSuccess = (json) => {
    const dataMeals = json.meals;
    setMeals([...dataMeals]);
    setLoading(false);
  };

  const handleFetchMealError = (err) => {
    setError(err);
    setLoading(false);
  };

  const fetchMeals = () => {
    if (loading) return;
    setLoading(true);
    getMealByLetter().then(
      handleFetchMealSuccess,
      handleFetchMealError,
    );
  };

  const context = {
    email,
    setEmail,
    password,
    setPassword,
    cocktails,
    meals,
    loading,
    error,
    fetchMeals,
    fetchCocktails,
  };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
