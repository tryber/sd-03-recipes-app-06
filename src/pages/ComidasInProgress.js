import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import InProgressContext from '../context/InProgressContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
import FinishButton from '../components/FinishButton';
import { saveOnLocalStorage, getSavedIng, isCheck, verifyLocalStorage } from '../helper/ControlFunctions';
import './Detalhes.css';

let ingLength = [];

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
  ingLength = Object.keys(outputArray);
  return outputArray;
};

const ComidasInProgress = () => {
  const location = useLocation(); const path = location.pathname;
  const recipeId = path.slice(9, path.length - 12);
  const { showButton, countIng } = useContext(InProgressContext);
  const { fetchMeal, meal, copyUrl } = useContext(DetailsContext);
  useEffect(() => {
    fetchMeal(recipeId);
    verifyLocalStorage(location.pathname);
  }, []);
  countIng('meals', meal.idMeal, ingLength);
  return (
    <div className="Principal">
      { meal && <div className="content">
        <div>{getSavedIng('meals', meal.idMeal)}
          <img
            data-testid="recipe-photo" src={meal.strMealThumb}
            width="360px" height="200px" alt="Recipe"
          />
          <p data-testid="recipe-title">{meal.strMeal}</p>
          <div className="SFButtons"><ShareButton /><FavButton /></div>
          {copyUrl && <span>Link copiado!</span>}
          <p data-testid="recipe-category">{meal.strCategory}</p>
          <div><span>Ingredients</span>
            { getIngredients(meal).map((e, index) =>
              <div key={`${Object.keys(e)}`} data-testid={`${index}-ingredient-step`} >
                <input type="checkbox" defaultChecked={isCheck(...Object.keys(e))} value={Object.keys(e)} onClick={(el) => saveOnLocalStorage('meals', meal.idMeal, el.target.value)} onChange={() => countIng('meals', meal.idMeal, getIngredients(meal))} />
                <span data-testid={`${index}-ingredient-name-and-measure`} key="Meal">
                  {`- ${Object.keys(e)} - ${Object.values(e)}`}
                </span>
              </div>)}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions" className="instructions">{meal.strInstructions}</p>
        </div><div>--------------</div>
      </div> }
      { meal && <FinishButton activate={showButton} /> }
    </div>
  );
};

export default ComidasInProgress;
