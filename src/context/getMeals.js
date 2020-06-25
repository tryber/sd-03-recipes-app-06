import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getMealByLetter } from '../services/MealDBApi';

const GetMealsContext = createContext();

const Provider = ({children}) => {

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleFetchMealSuccess = (json) => {
    const meals = json.meals;
    setMeals([...meals]);
    setLoading(false);
  };

  const handleFetchMealError = (error) => {
    setError(error);
    setLoading(false);
  };

  const fetchMeals = () => {
    if (loading) return;
    setLoading(true);
    getMealByLetter()
    .then(handleFetchMealSuccess, handleFetchMealError);
  };

  const context = { meals, loading, error, fetchMeals };

  return (
     <GetMealsContext.Provider value={context}>
       {children}
     </GetMealsContext.Provider>
   );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, GetMealsContext };
