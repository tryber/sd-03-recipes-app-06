import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailsContext from './DetailsContext';
import { getMealDetail } from '../services/MealDBApi';
import { getDrinks } from '../services/DrinkDBApi';

function Provider({ children }) {
  const [meals, setMeals] = useState({});
  const [mealsOk, setMealsOk] = useState(false);
  const [drinks, setDrinks] = useState({});
  const [drinksOk, setDrinksOk] = useState(false);

  const fetchMeal = async (id) => {
    let result = await getMealDetail(id)
      .then(
        (data) => { setMealsOk(true); return data.meals[0]; },
        (error) => { setMealsOk(false); return error}, 
      );
    console.log('Resultado', result);
    setMeals(result);
  };

  const fetchDrink = async () => {
    let result = await getDrinks()
      .then(
        (data) => { setDrinksOk(true); return data.drinks;},
        (error) => { setDrinksOk(false); return error; }, 
      );
    console.log('Resultado', result);
    setDrinks(result);
  };

  const context = {
    fetchMeal,
    meals,
    setMeals,
    mealsOk,
    setMealsOk,
    fetchDrink,
    drinks,
    setDrinks,
    drinksOk,
    setDrinksOk,
  };

  return (
    <DetailsContext.Provider value={context}>
      {children}
    </DetailsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
