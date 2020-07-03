import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import './Detalhes.css';

const videoName = (url) => {
  const eqtPosition = url.indexOf('=');
  return (url.slice(eqtPosition + 1, url.length));
};

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
      <div>
        {
          obj.slice(0, 6).map((drinks, index) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
            } = drinks;
            return (
              <li data-testid={`${index}-recomendation-card`} key={idDrink}>
                <img
                  src={strDrinkThumb}
                  width="120px" height="150px" alt="Cocktails Thumb"
                />
                <div data-testid={`${index}-recomendation-title`}>{strDrink}</div>
              </li>
            );
          })
        }
      </div>
    );
  }
  return null;
};

const Detalhes = () => {
  const location = useLocation();
  const address = location.pathname;
  const id = address.slice(9, address.length);
  const { fetchMeal, meals, mealsOk } = useContext(DetailsContext);
  const { fetchDrink, drinks, drinksOk } = useContext(DetailsContext);

  useEffect(() => {
    fetchMeal(id);
    fetchDrink();
  }, []);

  return (
    <div className="Principal">
      { mealsOk && drinksOk &&
      <div>
        <img data-testid="recipe-photo" src={meals.strMealThumb} width="360px" alt="Recipe" />
        <p data-testid="recipe-title">{meals.strMeal}</p>
        <div>
          <button data-testid="share-btn">Share</button>
          <button data-testid="favorite-btn">Favorite</button>
        </div>
        <p data-testid="recipe-category">{meals.strCategory}</p>
        <div><span>Ingredients</span>
          {
          getIngredients(meals).map((e, index) =>
            <p data-testid={`${index}-ingredient-name-and-measure`} key={`${Object.keys(e)}`}>
              {`- ${Object.keys(e)} - ${Object.values(e)}`}
            </p>)
          }
        </div>
        <p>Instructions</p>
        <p data-testid="instructions">{meals.strInstructions}</p>
        <p>Video</p>
        <iframe
          data-testid="video" width="360px" height="300" title="Video"
          src={`https://www.youtube.com/embed/${videoName(meals.strYoutube || 'x')}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        {recomendations(drinks)}
        <button data-testid="start-recipe-btn">Iniciar Receita</button>
      </div>
      }
    </div>
  );
};

export default Detalhes;
