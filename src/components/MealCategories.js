import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';

function MealCategories() {
  const { loading, error, mealCategories } = useContext(GetMealsContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="mealsCategories">
      {
        mealCategories.slice(0, 5).map(({ strCategory }) => {
          const testId = `${strCategory}-category-filter`;
          return (
            <div className="category">
              <li key={strCategory}>
                <button value={strCategory} data-testid={testId}>{strCategory}</button>
              </li>
            </div>
          );
        })
      }
    </div>
  );
}

export default MealCategories;
