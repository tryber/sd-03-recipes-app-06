import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import useGetCategories from '../hooks/useGetCategories';
import useFetchPlanets from '../hooks/useFetchPlanets';

const GetMealsContext = createContext();

const Provider = ({ children }) => {
  const getCategories = useGetCategories();
  const getMeals = useFetchPlanets();

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
