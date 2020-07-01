import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Meals() {
  const {
    meals,
    loading,
    error,
    fetchMeals,
  } = useContext(Context);
  import React, { useContext } from 'react';
  import { GetMealsContext } from '../context/getMeals';
  import MealCategories from './MealCategories';



  if (loading) return <div>Loading...</div>;
  return (
    <div id="meals">
      {
        meals.map((meal) => {
          const {
            idMeal,
            strMealThumb,
            strMeal,
            strCategory,
          } = meal;
          return (
            <li key={idMeal}>
              <img src={strMealThumb} width="120px" height="150px" alt="Meal Thumb" />
              {strMeal} - {strCategory}
            </li>
          );
        })
      }
    </div>
    <div>
      <MealCategories />
      <ul>
        {
          meals.slice(0, 12).map((meal) => {
            const { idMeal, strMealThumb, strMeal, strCategory } = meal;
            return (
              <div className="card" key={idMeal}>
                <li>
                  <img src={strMealThumb} width="120px" height="150px" alt="Meal Thumb" />
                  {strMeal} - {strCategory}
                </li>
              </div>
            );
          })
        }
      </ul>
    </div>
}

export default Meals;
