import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useGetCategories from '../hooks/useGetCategories';
import useFetchMeals from '../hooks/useFetchMeals';
import useGetMealById from '../hooks/useGetMealById';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const getCategories = useGetCategories();
  const getMeals = useFetchMeals();
  const getMealById = useGetMealById();

  const context = {
    getMeals,
    getCategories,
    getMealById,
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
