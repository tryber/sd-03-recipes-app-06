import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import InProgressContext from '../context/InProgressContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
import FinishButton from '../components/FinishButton';
import { saveOnLocalStorage, getSavedIng, isCheck, verifyLocalStorage, getIngredients } from '../helper/ControlFunctions';
import './Detalhes.css';

const BebidasInProgress = () => {
  const location = useLocation(); const path = location.pathname;
  const recipeId = path.slice(9, path.length - 12);
  const { showButton, countIng } = useContext(InProgressContext);
  const { fetchDrink, drink, copyUrl } = useContext(DetailsContext);
  useEffect(() => {
    fetchDrink(recipeId);
    verifyLocalStorage(location.pathname);
  }, []);
  countIng('cocktails', drink.idDrink, getIngredients(drink));
  return (
    <div className="Principal">
      { drink && <div className="content">
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
                <input type="checkbox" defaultChecked={isCheck(...Object.keys(e))} value={Object.keys(e)} onClick={(el) => saveOnLocalStorage('cocktails', drink.idDrink, el.target.value)} onChange={() => countIng('cocktails', drink.idDrink, getIngredients(drink))} />
                <span data-testid={`${index}-ingredient-name-and-measure`} key="Drink">
                  {`- ${Object.keys(e)} - ${Object.values(e)}`}
                </span>
              </div>)}
          </div>
          <p>Instructions</p>
          <p data-testid="instructions" className="instructions">{drink.strInstructions}</p>
        </div><div>--------------</div>
      </div> }
      { drink && <FinishButton activate={showButton} done={drink} tipo="bebida" /> }
    </div>
  );
};

export default BebidasInProgress;

