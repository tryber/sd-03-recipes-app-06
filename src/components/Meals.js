import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';
import MealCategories from './MealCategories';

function Meals() {
  const {
    getMeals: { meals },
    loading,
    error,
  } = useContext(GetMealsContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
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
  );
}

export default Meals;
