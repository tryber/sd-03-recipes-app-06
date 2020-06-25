import React, { useEffect, useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';

function Meals() {
  const { meals, loading, error, fetchMeals } = useContext(GetMealsContext);

  useEffect(() => {
    fetchMeals();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="meals">
      {
        meals.map((meal) => {
          const { idMeal, strMealThumb, strMeal, strCategory } = meal;
          return (
            <li key={idMeal}>
              <img src={strMealThumb} width="120px" height="150px" alt="Meal Thumb" />
              {strMeal} - {strCategory}
            </li>
          );
        })
      }
    </div>
  );
}

export default Meals;
