import { useState, useEffect } from 'react';
import { getMealsCategories } from '../services/MealDBApi';

function categoriesContext() {
  const [mealCategories, setMealCategories] = useState([]);

  useEffect(() => {

    const handleFetchMealCategoriesSuccess = (json) => {
      setMealCategories([...json.meals]);
    };

    getMealsCategories()
      .then(handleFetchMealCategoriesSuccess);

    return () => {
      
    };
  });

  return mealCategories;
}

export default categoriesContext;
