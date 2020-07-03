import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';

function MealCategories() {
  const {
    getCategories,
    getMeals: { getByCat },
  } = useContext(GetMealsContext);

  return (
    <div id="mealsCategories">
      <ul>
        <li>
          <button
            value=""
            data-testid="All-category-filter"
            onClick={() => getByCat('all')}
          >
            All
          </button>
        </li>
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
      </ul>
    </div>
  );
}

export default MealCategories;
