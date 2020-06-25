import React, { useEffect, useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';

function Meals() {
  const { meals, loading, error, fetchMeals } = useContext(GetMealsContext);

  useEffect(() => {
    fetchMeals();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <div id="meals">
      {
        meals.map((meal) => {
          return (
            <li key={meal.idMeal}>
              <img src={meal.strMealThumb} width="120px" height="150px" />
              {meal.strMeal} - {meal.strCategory}
            </li>
          );
        })
      }
    </div>
  );
};

export default Meals;
