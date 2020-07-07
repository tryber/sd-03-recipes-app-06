import React, { useEffect, useContext } from 'react';
import DetailsContext from '../context/DetailsContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
import StartContinueButton from '../components/StartContinueButton';
import './Detalhes.css';

const getIngredients = (obj) => {
  let ingredientsArray = []; let measureArray = [];
  const keysArray = []; const valuesArray = []; const outputArray = [];
  ingredientsArray = [...Object.keys(obj).filter((e) => e.match(/strIngredient/g))];
  measureArray = [...Object.keys(obj).filter((e) => e.match(/strMeasure/g))];

  ingredientsArray.forEach((e) => {
    if (typeof (obj[e]) === 'string' && obj[e] !== '') {
      keysArray.push(obj[e]);
    }
  });

  measureArray.forEach((e) => {
    if (typeof (obj[e]) === 'string' && obj[e] !== '') {
      valuesArray.push(obj[e]);
    }
  });

  for (let i = 0; i < keysArray.length; i += 1) {
    outputArray.push({ [keysArray[i]]: valuesArray[i] });
  }

  return outputArray;
};

const recomendations = (obj) => {
  if (obj.length) {
    return (
      <div className="carousel">
        {
          obj.slice(0, 6).map((meals, index) => {
            const {
              idMeal,
              strMeal,
              strMealThumb,
            } = meals;
            return (
              <div data-testid={`${index}-recomendation-card`} key={idMeal}>
                <img className="element" src={strMealThumb} alt="Cocktails Thumb" />
                <div data-testid={`${index}-recomendation-title`}>{strMeal}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
  return null;
};

const Detalhes = () => {
  const { fetchMeals, meals, mealsOk, location } = useContext(DetailsContext);
  const { fetchDrink, drink, drinkOk, copyUrl } = useContext(DetailsContext);
  const address = location.pathname;
  const id = address.slice(9, address.length);

  useEffect(() => {
    fetchMeals();
    fetchDrink(id);
  }, []);

  return (
    <div className="Principal">
      { mealsOk && drinkOk &&
      <div>
        <img data-testid="recipe-photo" src={drink.strDrinkThumb} width="360px" alt="Recipe" />
        <p data-testid="recipe-title">{drink.strDrink}</p>
        <p data-testid="recipe-category">{drink.strAlcoholic}</p>
        <div className="SFButtons"><ShareButton /><FavButton /></div>
        {copyUrl && <span>Link copiado!</span>}
        <p>{drink.strCategory}</p>
        <div><span>Ingredients</span>
          {
          getIngredients(drink).map((e, index) =>
            <p data-testid={`${index}-ingredient-name-and-measure`} key={`${Object.keys(e)}`}>
              {`- ${Object.keys(e)} - ${Object.values(e)}`}
            </p>)
          }
        </div>
        <p>Instructions</p>
        <p data-testid="instructions" className="instructions">{drink.strInstructions}</p>
        <p>Recommendation</p>
        {recomendations(meals)}
        <StartContinueButton />
      </div>
      }
    </div>
  );
};

export default Detalhes;
