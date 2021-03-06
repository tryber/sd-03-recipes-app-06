import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import { getMealByLetter } from '../services/MealDBApi';
import { getDrinks } from '../services/DrinkDBApi';

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
    getDrinks().then(
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
    getMealByLetter('a').then(
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
    setCocktails,
    meals,
    setMeals,
    loading,
    setLoading,
    error,
    setError,
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
