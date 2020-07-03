import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailsContext from './DetailsContext';
import { getMeal, getMeals } from '../services/MealDBApi';
import { getDrink, getDrinks } from '../services/DrinkDBApi';

function Provider({ children }) {
  const [meal, setMeal] = useState({});
  const [mealOk, setMealOk] = useState(false);
  const [meals, setMeals] = useState({});
  const [mealsOk, setMealsOk] = useState(false);
  const [drink, setDrink] = useState({});
  const [drinkOk, setDrinkOk] = useState(false);
  const [drinks, setDrinks] = useState({});
  const [drinksOk, setDrinksOk] = useState(false);

  const fetchMeal = async (id) => {
    const result = await getMeal(id)
      .then(
        (data) => { setMealOk(true); return data.meals[0]; },
        (error) => { setMealOk(false); return error; },
      );
    console.log('Resultado', result);
    setMeal(result);
  };

  const fetchMeals = async () => {
    const result = await getMeals()
      .then(
        (data) => { setMealsOk(true); return data.meals[0]; },
        (error) => { setMealsOk(false); return error; },
      );
    console.log('Resultado', result);
    setMeals(result);
  };

  const fetchDrink = async (id) => {
    const result = await getDrink(id)
      .then(
        (data) => { setDrinkOk(true); return data.drinks; },
        (error) => { setDrinkOk(false); return error; },
      );
    console.log('Resultado', result);
    setDrink(result);
  };

  const fetchDrinks = async () => {
    const result = await getDrinks()
      .then(
        (data) => { setDrinksOk(true); return data.drinks; },
        (error) => { setDrinksOk(false); return error; },
      );
    console.log('Resultado', result);
    setDrinks(result);
  };

  const context = {
    fetchMeal, meal, setMeal, mealOk, setMealOk,
    fetchMeals, meals, setMeals, mealsOk, setMealsOk,
    fetchDrink, drink, setDrink, drinkOk, setDrinkOk,
    fetchDrinks, drinks, setDrinks, drinksOk, setDrinksOk,
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
