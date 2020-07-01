import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GetMealsContext } from '../context/getMeals';

function MealDetails(props) {
  const { id } = props.match.params;
  const {
    getMealById: { meal, loading, handleSetId },
  } = useContext(GetMealsContext);

  useEffect(() => {
    handleSetId(id);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {
        meal.map((el) => {
          const { idMeal, strMealThumb, strMeal, strCategory, strInstructions, strYoutube } = el;
          return (
            <div className="card" key={idMeal}>
              <img src={strMealThumb} width="120px" height="150px" alt="Meal Thumb" />
              <h1>{strMeal}</h1> - <h3>{strCategory}</h3>
              <div>
                <h2>Lista de Igredientes</h2>

              </div>
              <div>
                <h2>Instruções</h2>
                <p>{strInstructions}</p>
              </div>
              <div>
                <h2>Vídeo do Youtube</h2>
                <iframe
                  id="ytplayer"
                  type="text/html"
                  width="640"
                  height="360"
                  src={strYoutube.replace('watch?v=', 'embed/')}
                  frameBorder="0"
                />
              </div>
            </div>
          );
        })
      }
    </div>
  );
}

export default MealDetails;

MealDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
