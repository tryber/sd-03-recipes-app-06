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

const saveOnLocalStorage = (type, id, value) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress[type][id].find((e) => e === value)) {
    inProgress[type][id] = inProgress[type][id].filter((e) => e !== value);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    return null;
  }
  inProgress[type][id].push(value);
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  return null;
};

let savedIng;

const getSavedIng = (type, id) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress) {
    savedIng = inProgress[type][id];
    console.log('Ingredientes Salvos: ', savedIng);
  }
};

const isCheck = (value) => {
  if (savedIng) {
    if (savedIng.find((e) => e === value)) {
      return 1;
    }
    return 0;
  }
  return 0;
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
        <div>{getSavedIng('cocktails', drink.idDrink)}
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
              <div key={`${Object.keys(e)}`} data-testid={`${index}-ingredient-step`}>
                <input type="checkbox" defaultChecked={isCheck(...Object.keys(e))} value={Object.keys(e)} onClick={(el) => saveOnLocalStorage('cocktails', drink.idDrink, el.target.value)} />
                <span data-testid={`${index}-ingredient-name-and-measure`} key="Drink">
                  {`- ${Object.keys(e)} - ${Object.values(e)}`}
                </span>
              </div>)}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions" className="instructions">{drink.strInstructions}</p>
        </div><div>--------------</div>
      </div> }
      { drinkOk && <FinishButton activate={1} /> }
    </div>
  );
};

export default BebidasInProgress;

