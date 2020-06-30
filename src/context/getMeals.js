import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useGetCategories from '../hooks/useGetCategories';
import useFetchMeals from '../hooks/useFetchMeals';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const getCategories = useGetCategories();
  const getMeals = useFetchMeals();

  const context = {
    getMeals,
    getCategories,
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
