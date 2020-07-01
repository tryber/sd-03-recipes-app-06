import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GetMealsContext } from '../context/getMeals';
import MealCategories from './MealCategories';

function Meals() {
  const {
    getMeals: {
      meals,
    },
  } = useContext(GetMealsContext);

  return (
    <div>
      <MealCategories />
      <ul>
        {
          meals.slice(0, 12).map((meal) => {
            const { idMeal, strMealThumb, strMeal, strCategory } = meal;
            return (
              <div className="card" key={idMeal}>
                <Link to={`comidas/${idMeal}`}>
                  <li>
                    <img src={strMealThumb} width="120px" height="150px" alt="Meal Thumb" />
                    {strMeal} - {strCategory}
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
