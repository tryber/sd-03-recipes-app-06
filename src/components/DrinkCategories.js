import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

function DrinkCategories() {
  const {
    fetchDrinkCategories,
    drinkCategories,
    getDrinksByCat,
  } = useContext(Context);

  useEffect(() => {
    fetchDrinkCategories();  
  },[]);

  return (
    <div id="mealsCategories">
      <ul>
        <li>
          <button
            value=""
            data-testid="All-category-filter"
            onClick={() => getDrinksByCat('all')}
          >
            All
          </button>
        </li>
        {
          drinkCategories.slice(0, 5).map(({ strCategory }) => {
            const testId = `${strCategory}-category-filter`;
            return (
              <div className="category" key={strCategory}>
                <li>
                  <button
                    value={strCategory}
                    data-testid={testId}
                    onClick={() => getDrinksByCat(`${strCategory}`)}
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

export default DrinkCategories;
