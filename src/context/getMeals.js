import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useGetCategories from '../hooks/useGetCategories';
import useFetchMeals from '../hooks/useFetchMeals';
import useSelectCategory from '../hooks/useSelectCategory';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const getCategories = useGetCategories();
  const getMeals = useFetchMeals();
  const getSelectCategory = useSelectCategory();

  const context = {
    getMeals,
    getCategories,
    getSelectCategory,
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
