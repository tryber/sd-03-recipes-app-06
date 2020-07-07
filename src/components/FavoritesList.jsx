import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import DetailsContext from '../context/DetailsContext';
import FavButton from './FavButton';
import ShareButton from './ShareButton';

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

const thumb1 = (
  id, type, fetchResult, setFetchResult, strMealThumb, strDrinkThumb,
  strMeal, strDrink, history, index = 0,
) => (
  <button
      data-testid={`${index}-horizontal-top-text`}

      className="favoriteButtonImg"
      type="button"
      onClick={() => handleClick(id, type, fetchResult, setFetchResult, history)}
    >
      <img
        data-testid={`${index}-horizontal-image`}
        className="favoriteImg"
        src={strMealThumb || strDrinkThumb}
        alt={strMeal || strDrink}
      />
  </button>
);

const meals1 = (idMeal, strArea, strCategory, strMeal, strMealThumb, index = 0) => (
  <div className="favoriteText">
    <p className="favoriteRecipe" data-testid={`${index}-horizontal-top-text`}>{strMeal}</p>
    <div className="buttons-bottom">
      <div data-testid={`${index}-horizontal-favorite-btn`}>
        <FavButton
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
      <div data-testid={`${index}-horizontal-share-btn`}>
        <ShareButton url={`/receitas/comidas/${idMeal}`} />
      </div>
    </div>
  </div>
);

const drinks1 = (idDrink, strAlcoholic, strDrink, strDrinkThumb, strArea, index = 1) => (
  <div className="favoriteText">
    <p className="favoriteRecipe" data-testid={`${index}-horizontal-top-text`}>{strDrink}</p>
    <div className="buttons-bottom">
      <div data-testid={`${index}-horizontal-favorite-btn`}>
        <FavButton
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
      <div data-testid={`${index}-horizontal-share-btn`}>
        <ShareButton url={`/receitas/bebidas/${idDrink}`} />
      </div>
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
  const { fetchResult, setFetchResult } = useContext(DetailsContext);
  const history = useHistory();
  if (fetchResult !== null) {
    return (fetchResult.map(({
      id, isMeal, category, image, area, name,
    }, index) => {
      let type = 'comidas';
      if (!isMeal) type = 'bebidas';
      return (
        <div className="favoriteContainerRecipe">
          {thumb1(id, type, fetchResult, setFetchResult,
            image, image, name, name, history)}
          {isMeal
            ? meals1(id, area, category, name, image, index)
            : drinks1(id, category, name, image, index)}
        </div>
      );
    }));
  };
  return null
};

export default FavoritesList;
