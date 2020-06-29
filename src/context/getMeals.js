import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getMeals, getMealsCategories, getMealsByCategory } from '../services/MealDBApi';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [mealCategories, setMealCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();

  const handleFetchMealCategoriesSuccess = (json) => {
    const categories = json.meals;
    setMealCategories([...categories]);
  };

  const handleFetchMealError = (err) => {
    setError(err);
    setLoading(false);
  };

  const handleFetchMealSuccess = (json) => {
    const dataMeals = json.meals;
    setMeals([...dataMeals]);
    getMealsCategories()
    .then(handleFetchMealCategoriesSuccess, handleFetchMealError);
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
    if (selectedCategory === cat) {
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
    mealCategories,
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
