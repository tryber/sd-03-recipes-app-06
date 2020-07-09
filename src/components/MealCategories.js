import React, { useContext } from 'react';
import { GetMealsContext } from '../context/getMeals';
import './MealCategories.css';

function MealCategories() {
  const {
    getCategories,
    getMeals: { getByCat },
  } = useContext(GetMealsContext);

  return (
    <div id="mealsCategories">
      <ul className="teste-ul">
        <li>
          <button
            type="button"
            className="testeButtoncat"
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
                    type="button"
                    className="testeButtoncat"
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
