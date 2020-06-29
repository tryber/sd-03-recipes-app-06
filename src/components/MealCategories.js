import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';

function MealCategories() {
  const {
    loading,
    error,
    getCategories,
    getMeals: { getByCat },
  } = useContext(GetMealsContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="mealsCategories">
      {
        getCategories.slice(0, 5).map(({ strCategory }) => {
          const testId = `${strCategory}-category-filter`;
          return (
            <div className="category" key={strCategory}>
              <li>
                <button
                  value={strCategory}
                  data-testid={testId}
                  onClick={(e) => getByCat(e.target.value)}
                >
                  {strCategory}
                </button>
              </li>
            </div>
          );
        })
      }
    </div>
  );
}

export default MealCategories;
