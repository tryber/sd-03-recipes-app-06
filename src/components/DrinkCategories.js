import React, { useContext, useEffect } from 'react';
import DrinkCategoriesContext from '../context/DrinkCategoriesContext';

function DrinkCategories() {
  const {
    fetchDrinkCategories,
    drinkCategories,
    getDrinksByCat,
  } = useContext(DrinkCategoriesContext);

  useEffect(() => {
    fetchDrinkCategories();
  }, []);

  return (
    <div>
      <div id="mealsCategories">
        <div>
          <button
            value=""
            data-testid="All-category-filter"
            onClick={() => getDrinksByCat('all')}
          >
            All
          </button>
        </div>
        {
          drinkCategories.slice(0, 5).map(({ strCategory }) => {
            const testId = `${strCategory}-category-filter`;
            return (
              <div className="category" key={strCategory}>
                <div>
                  <button
                    value={strCategory}
                    data-testid={testId}
                    onClick={() => getDrinksByCat(`${strCategory}`)}
                  >
                    {strCategory}
                  </button>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default DrinkCategories;
