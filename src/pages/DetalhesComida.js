import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import ShareButton from '../components/ShareButton';
import FavButton from '../components/FavButton';
import './Detalhes.css';

const videoName = (url) => {
  const eqtPosition = url.indexOf('=');
  return (url.slice(eqtPosition + 1, url.length));
};

const showVideo = (obj) =>
  <div>
    <iframe
      data-testid="video" width="330" height="auto" title="Video"
      src={`https://www.youtube.com/embed/${videoName(obj.strYoutube || 'x')}`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
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

const recomendations = (obj) => {
  if (obj.length) {
    return (
      <div className="carousel">
        {
          obj.slice(0, 6).map((drinks, index) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
            } = drinks;
            return (
              <div data-testid={`${index}-recomendation-card`} key={idDrink}>
                <img className="element" src={strDrinkThumb} alt="Cocktails Thumb" />
                <div data-testid={`${index}-recomendation-title`}>{strDrink}</div>
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
  const { fetchMeal, meal, mealOk, location } = useContext(DetailsContext);
  const { fetchDrinks, drinks, drinksOk, copyUrl } = useContext(DetailsContext);
  const address = location.pathname;
  const id = address.slice(9, address.length);

  useEffect(() => {
    fetchMeal(id);
    fetchDrinks();
  }, []);

  return (
    <div className="Principal">
      { mealOk && drinksOk &&
      <div>
        <img data-testid="recipe-photo" src={meal.strMealThumb} width="360px" alt="Recipe" />
        <p data-testid="recipe-title">{meal.strMeal}</p>
        <div className="SFButtons"><ShareButton /><FavButton /></div>
        {copyUrl && <span>Link copiado!</span>}
        <p data-testid="recipe-category">{meal.strCategory}</p>
        <div><span>Ingredients</span>
          {
          getIngredients(meal).map((e, index) =>
            <p data-testid={`${index}-ingredient-name-and-measure`} key={`${Object.keys(e)}`}>
              {`- ${Object.keys(e)} - ${Object.values(e)}`}
            </p>)
          }
        </div>
        <p>Instructions</p>
        <p data-testid="instructions" className="instructions">{meal.strInstructions}</p>
        <p>Video</p>
        {showVideo(meal)}
        <p>Recommendation</p>
        {recomendations(drinks)}
        <Link to={`${location.pathname}/in-progress`}>
          <button
            name="comida-btn" data-testid="start-recipe-btn" className="footer-btn"
          >Iniciar Receita</button>
        </Link>
      </div>
      }
    </div>
  );
};

export default Detalhes;
