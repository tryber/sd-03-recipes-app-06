import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsContext from './DetailsContext';
import { getMeal, getMeals } from '../services/MealDBApi';
import { getDrink, getDrinks } from '../services/DrinkDBApi';

function Provider({ children }) {
  const location = useLocation();
  const [meal, setMeal] = useState({});
  const [mealOk, setMealOk] = useState(false);
  const [meals, setMeals] = useState({});
  const [mealsOk, setMealsOk] = useState(false);
  const [drink, setDrink] = useState({});
  const [drinkOk, setDrinkOk] = useState(false);
  const [drinks, setDrinks] = useState({});
  const [drinksOk, setDrinksOk] = useState(false);
  const [copyUrl, setCopyUrl] = useState(false);
  const [heart, setHeart] = useState('white');
  const [recipe, setRecipe] = useState({
    id: 0,
    type: '',
    area: '',
    category: '',
    alcoholicOrNot: '',
    name: '',
    image: '',
  });

  const saveDrinkRecipe = (obj) =>
  setRecipe({
    id: obj.idDrink,
    type: 'bebida',
    area: '',
    category: obj.strCategory,
    alcoholicOrNot: obj.strAlcoholic,
    name: obj.strDrink,
    image: obj.strDrinkThumb,
  });

  const verifyHeart = () => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const path = location.pathname;
    let i = '';
    if (favoriteRecipes) {
      favoriteRecipes.forEach((e, index) => {
        if (e.id === path.slice(9, path.length) && e.type === path.slice(1, 7)) {
          setHeart('black');
          i = index;
        }
      });
      return i;
    }
    return false;
  };

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
        (data) => { setMealsOk(true); return data.meals; },
        (error) => { setMealsOk(false); return error; },
      );
    console.log('Resultado', result);
    setMeals(result);
  };

  const fetchDrink = async (id) => {
    const result = await getDrink(id)
      .then(
        (data) => { setDrinkOk(true); return data.drinks[0]; },
        (error) => { setDrinkOk(false); return error; },
      );
    console.log('Resultado', result);
    setDrink(result);
    saveDrinkRecipe(result);
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

  const shareUrl = (address) => {
    window.navigator.clipboard.writeText(`http://localhost:3000${address}`);
    setCopyUrl(true);
  };

  const toFavorite = () => {
    let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    const actualRecipe = recipe;
    const boolVerify = verifyHeart();
    if (typeof (boolVerify) === 'number') {
      favoriteRecipes.splice([boolVerify], 1);
      setHeart('white');
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      return null;
    } else if (boolVerify === '') {
      favoriteRecipes.push(actualRecipe);
      setHeart('black');
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      return null;
    }
    favoriteRecipes = [actualRecipe];
    setHeart('black');
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    return null;
  };

  const context = {
    fetchMeal,
    meal,
    mealOk,
    fetchMeals,
    meals,
    mealsOk,
    fetchDrink,
    drink,
    drinkOk,
    fetchDrinks,
    drinks,
    drinksOk,
    copyUrl,
    setCopyUrl,
    shareUrl,
    location,
    heart,
    setHeart,
    verifyHeart,
    toFavorite,
    recipe,
    setRecipe,
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
