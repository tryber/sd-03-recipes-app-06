import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
import FinishButton from '../components/FinishButton';
import './Detalhes.css';

const pathConverter = {
  comida: 'meals',
  bebida: 'cocktails',
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

const ComidasInProgress = () => {
  const location = useLocation();
  const { fetchMeal, meal, mealOk, copyUrl } = useContext(DetailsContext);
  useEffect(() => {
    const path = location.pathname; const recipeId = path.slice(9, path.length - 12);
    const recipeType = pathConverter[path.slice(1, 7)];
    const saveMeal = { [recipeType]: { [recipeId]: [] } };
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgress) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(saveMeal));
    } else if (inProgress[recipeType]) {
      if (!inProgress[recipeType][recipeId]) {
        inProgress[recipeType] = { ...inProgress[recipeType], [recipeId]: [] };
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      }
    }
    fetchMeal(recipeId);
  }, []);
  return (
    <div className="Principal">
      { mealOk && <div className="content">
        <div>
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
              <div key={`${Object.keys(e)}`} data-testid="ingredient-step">
                <input type="checkbox" />
                <span data-testid={`${index}-ingredient-name-and-measure`}>
                  {`- ${Object.keys(e)} - ${Object.values(e)}`}
                </span>
              </div>)}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions" className="instructions">{meal.strInstructions}</p>
        </div><div>--------------</div>
      </div> }
      { mealOk && <FinishButton activate={1}/> }
    </div>
  );
};

export default ComidasInProgress;
