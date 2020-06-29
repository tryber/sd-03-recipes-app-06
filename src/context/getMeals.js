import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getMeals, getMealsByCategory } from '../services/MealDBApi';
import useGetCategories from './useGetCategories';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const getCategories = useGetCategories();

  const handleFetchMealError = (err) => {
    setError(err);
    setLoading(false);
  };

  const handleFetchMealSuccess = (json) => {
    const dataMeals = json.meals;
    setMeals([...dataMeals]);

    setLoading(false);
  };

  const fetchMeals = () => {
    if (loading) return;
    setLoading(true);
    getMeals()
    .then(handleFetchMealSuccess, handleFetchMealError);
  };

  const changeCategory = (cat) => {
    if (loading) return;
    if (cat === selectedCategory) {
      setSelectedCategory('');
      fetchMeals();
    }
    setLoading(true);
    getMealsByCategory(cat)
    .then(handleFetchMealSuccess);
    setSelectedCategory(cat);
  };

  const context = {
    meals,
    loading,
    error,
    fetchMeals,
    getCategories,
    selectedCategory,
    changeCategory,
  };

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
