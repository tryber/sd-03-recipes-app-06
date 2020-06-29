import { useState, useEffect } from 'react';
import { getMeals, getMealsByCategory } from '../services/MealDBApi';


function useSelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState(false);

  const changeSelectedCategory = (category = '') => {
    setSelectedCategory(category);
  };

  return selectedCategory;
}

export default useSelectCategory;
