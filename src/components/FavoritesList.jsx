import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import DetailsContext from '../context/DetailsContext';
import FavButton from './FavButton';
import ShareButton from './ShareButton';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';


const updateAPI = (title) => {
  if (title === 'bebidas') return 'thecocktaildb';
  return 'themealdb';
};

const getDetailsPage = async (id, type, setFetchResult) => {
  const url = `https://www.${updateAPI(type)}.com/api/json/v1/1/lookup.php?i=${id}`;
  const response = await axios.get(url);
  const value = response.data.meals || response.data.drinks;
  setFetchResult(value);
};


const handleClick = (id, type, fetchResult, setFetchResult, history) => {
  getDetailsPage(id, type, setFetchResult);
  history.push(`/receitas/${type}/${id}`);
};

const thumbX = (
  id, type, fetchResult, setFetchResult, strMealThumb, strDrinkThumb,
  strMeal, strDrink, history,
) => (
  <button
    className="favoriteButtonImg"
    type="button"
    onClick={() => handleClick(id, type, fetchResult, setFetchResult, history)}
  >
    <img
      className="favoriteImg"
      src={strMealThumb || strDrinkThumb}
      alt={strMeal || strDrink}
    />
  </button>
);

const mealsX = (idMeal, strArea, strCategory, strMeal, strMealThumb, index) => (
  <div className="favoriteText">
    <div className="favoriteFlexySides">
      <span className="favoriteCategory">{`${strArea} - ${strCategory}`}</span>
    </div>
    <div className="favoriteRecipe" data-testid={`${index}-horizontal-name`}>
      <p>{strMeal}</p>
    </div>
  </div>
);

const drinksX = (idDrink, strDrink, strDrinkThumb, strArea, index) => (
  <div className="favoriteText">
    <div className="favoriteFlexySides">
      <span className="favoriteCategory">{`${strDrink}`}</span>
    </div>
    <div className="favoriteRecipe" data-testid={`${index}-horizontal-name`}>
      <p>{strDrink}</p>
    </div>
  </div>
);

// function Foo() {
//   const { location, copyUrl } = useContext(DetailsContext);
//   // caso precise reatribuir o location.pathname você deve fazer da seguinte forma:
//   // location.pathname = '/comidas/{id da comida}'; ou
//   // location.pathname = '/bebidas/{id da bebida}';
//   return (
//     <div>
//       <div className="SFButtons"><ShareButton /><FavButton /></div>
//       {copyUrl && <span>Link copiado!</span>}
//     </div>
//   );
// }

const FavoritesList = () => {
  const { fetchResult, setFetchResult, copyUrl } = useContext(DetailsContext);
  const history = useHistory();
  if (fetchResult !== null) {
    return (fetchResult.map(({
      id, isMeal, category, image, area, name, strDrink,
    }, index) => {
      let type = 'bebidas';
      if (!isMeal) { 
        type = 'comidas' 
      }
      return (
        <div 
          key={`${name}`} className="favoriteContainerRecipe"
          data-testid={`${index}-horizontal-image`}
          src={image}
          alt={name}
        >
          <div data-testid={`${index}-horizontal-top-text`}>
            {thumbX(id, type, fetchResult, setFetchResult,
              image, image, name, name, history)}
            <div data-testid={`${index}-horizontal-name`} />
            {!isMeal
              ? mealsX(id, area, category, name, image, index)
              : drinksX(id, category, name, image, strDrink, index)
            }
          </div>
          <div data-testid={`${index}-horizontal-share-btn`} src={shareIcon} >
            <ShareButton />
          </div>
          {copyUrl && <span>Link copiado!</span>}
          <div data-testid={`${index}-horizontal-favorite-btn`} src={blackHeartIcon}>
            <FavButton />
          </div>
        </div>
      );
    }));
  }
  return null;
};

export default FavoritesList;
