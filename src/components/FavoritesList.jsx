import React from 'react';
import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

const mealsJSX = (idMeal, strArea, strCategory, strMeal, strMealThumb, index) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strArea} - ${strCategory}`}</span>
    </div>
    <p className="faveRecipe">{strMeal}</p>
    <div className="buttons-bottom">
      <div data-testid={`${index}-horizontal-favorite-btn`}>
        <FavoriteButton
          recipe={{
            id: idMeal,
            category: strCategory,
            image: strMealThumb,
            area: strArea,
            name: strMeal,
            isMeal: !!idMeal,
          }}
        />
      </div>
      <ShareButton url={`/receitas/comidas/${idMeal}`} />
    </div>
  </div>
);

const drinksJSX = (idDrink, strAlcoholic, strDrink, strDrinkThumb, strArea, index) => (
  <div className="faveText">
    <div className="faveFlexySides">
      <span className="faveCategory">{`${strAlcoholic} Drink`}</span>
    </div>
    <p className="faveRecipe">{strDrink}</p>
    <div className="buttons-bottom">
      <div data-testid={`${index}-horizontal-favorite-btn`}>
        <FavoriteButton
          recipe={{
            id: idDrink,
            category: strAlcoholic,
            image: strDrinkThumb,
            area: strArea,
            name: strDrink,
            isMeal: !idDrink,
          }}
        />
      </div>
      <ShareButton url={`/receitas/bebidas/${idDrink}`} />
    </div>
  </div>
);

const FavoritesList = () => {
  return null;
};

export default FavoritesList;
