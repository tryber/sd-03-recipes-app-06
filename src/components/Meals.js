import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Meals() {
  const {
    meals,
    loading,
    error,
    fetchMeals,
  } = useContext(Context);

  useEffect(() => {
    fetchMeals();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="meals">
      {
        meals.slice(0, 12).map((meal) => {
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
  );
}

export default Meals;
