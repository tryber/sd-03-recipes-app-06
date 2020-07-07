import { useState, useEffect } from 'react';
import { getMealsCategories } from '../services/MealDBApi';

function useGetCategories() {
  const [mealCategories, setMealCategories] = useState([]);

  useEffect(() => {
    getMealsCategories()
    .then((json) => {
      setMealCategories([...json.meals]);
    });

    return () => mealCategories;
  }, []);

  return mealCategories;
}

export default useGetCategories;
