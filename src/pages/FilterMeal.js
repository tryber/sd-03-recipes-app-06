import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMealByIngredients } from '../services/MealDBApi';

function FilterMeal(props) {
  const { ing } = props.match.params;
  const [mealFiltered, setMealFiltered] = useState([]);
  useEffect(() => {
    getMealByIngredients(ing)
    .then((json) => setMealFiltered([...json.meals]));
  }, []);
  console.log(ing);
  console.log(mealFiltered);
  console.log('eap');
  return (
    <div>
      <Header />
      <div>
        <ul>
          {
            mealFiltered.map((meal, index) => {
              const {
                idMeal,
                strMealThumb,
                strMeal,
                strCategory,
              } = meal;
              return (
                <li data-testid={`${index}-recipe-card`} key={idMeal}>
                  <img
                    data-testid={`${index}-card-img`} src={strMealThumb}
                    width="120px" height="150px" alt="Meal Thumb"
                  />
                  <div data-testid={`${index}-card-name`}>{strMeal}</div>
                  -
                  {strCategory}
                </li>
              );
            })
          }
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default FilterMeal;

FilterMeal.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
