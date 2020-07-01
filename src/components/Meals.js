import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import Header from './Header';

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
  if (loading) return <div><Header /><div>Loading...</div></div>;
  // if (error) return <div><Header /><div>{error}</div></div>;
  return (
    <div id="meals">
      <Header />
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
              {strMeal}
              -
              {strCategory}
            </li>
          );
        })
      }
    </div>
  );
}

export default Meals;
