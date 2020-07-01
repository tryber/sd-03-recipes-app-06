<<<<<<< HEAD
import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Meals() {
  const {
    meals,
    loading,
    error,
    fetchMeals,
  } = useContext(Context);
=======
import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';
import MealCategories from './MealCategories';

function Meals() {
  const {
    getMeals: {
      meals,
      loading,
    },
  } = useContext(GetMealsContext);
>>>>>>> 705c86d73e70af64c8258dd6e821fda6920a9e56

  if (loading) return <div>Loading...</div>;
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> 705c86d73e70af64c8258dd6e821fda6920a9e56
    </div>
  );
}

export default Meals;
