import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetMealsContext } from '../context/getMeals';
import MealCategories from './MealCategories';
import './Meals.css';

function Meals() {
  const {
    getMeals: {
      meals,
    },
  } = useContext(GetMealsContext);

  return (
    <div className="meals">
      <MealCategories />
      <ul>
        {
          meals.slice(0, 12).map((meal, index) => {
            const {
              idMeal,
              strMealThumb,
              strMeal,
              strCategory,
            } = meal;
            return (
              <div data-testid={`${index}-recipe-card`} className="card" key={idMeal}>
                <Link to={`comidas/${idMeal}`}>
                  <li>
                    <img
                      data-testid={`${index}-card-img`}
                      src={strMealThumb}
                      width="120px"
                      height="150px"
                      alt="Meal Thumb"
                    />
                    <p data-testid={`${index}-card-name`}>
                      {strMeal}
                      -
                      {strCategory}
                    </p>
                  </li>
                </Link>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Meals;
