import React, { useEffect, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
// import StartContinueButton from '../components/StartContinueButton';
import './Detalhes.css';

const pathConverter = {
  comida: 'meals',
  bebida: 'cocktails',
};

const finishButton = () =>
  <div className="buttonDiv">
    {
      <Link to="/receitas-feitas">
        <button
          name="bebida-btn" data-testid="finish-recipe-btn"
          className="footer-btn"
        ><h2 className="buttonTitle">Finalizar Receita</h2></button>
      </Link>
    }
  </div>;

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

const BebidasInProgress = () => {
  const location = useLocation();
  const { fetchDrink, drink, drinkOk, copyUrl } = useContext(DetailsContext);
  useEffect(() => {
    const path = location.pathname; const recipeId = path.slice(9, path.length - 12);
    const recipeType = pathConverter[path.slice(1, 7)];
    const saveDrink = { [recipeType]: { [recipeId]: [] } };
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgress) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(saveDrink));
    } else if (inProgress[recipeType]) {
      if (!inProgress[recipeType][recipeId]) {
        inProgress[recipeType] = { ...inProgress[recipeType], [recipeId]: [] };
        localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
      }
    }
    fetchDrink(recipeId);
  }, []);
  return (
    <div className="Principal">
      { drinkOk && <div className="content">
        <div>
          <img
            data-testid="recipe-photo" src={drink.strDrinkThumb}
            width="360px" height="200px" alt="Recipe"
          />
          <p data-testid="recipe-title">{drink.strDrink}</p>
          <div className="SFButtons"><ShareButton /><FavButton /></div>
          {copyUrl && <span>Link copiado!</span>}
          <p data-testid="recipe-category">{drink.strCategory}</p>
          <div><span>Ingredients</span>
            { getIngredients(drink).map((e, index) =>
              <div key={`${Object.keys(e)}`} data-testid="ingredient-step">
                <input type="checkbox" />
                <span data-testid={`${index}-ingredient-name-and-measure`}>
                  {`- ${Object.keys(e)} - ${Object.values(e)}`}
                </span>
              </div>)}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions" className="instructions">{drink.strInstructions}</p>
        </div><div>--------------</div>
      </div> }
      { drinkOk && finishButton() }
    </div>
  );
};

export default BebidasInProgress;

