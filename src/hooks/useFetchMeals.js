import { useState, useEffect } from 'react';
import { getMeals, getMealsByCategory } from '../services/MealDBApi';


function useFetchMeals() {
  const [meals, setMeals] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFetchMealSuccess = (json) => {
    const dataMeals = json.meals;
    setMeals([...dataMeals]);
  };

  useEffect(() => {
    getMeals().then(handleFetchMealSuccess);

    return () => meals;
  }, []);

  const getByCat = (category) => {
    if (category === selectedCategory || category === 'all') {
      setSelectedCategory('');
      getMeals().then(handleFetchMealSuccess);
    } else {
      getMealsByCategory(category)
      .then(handleFetchMealSuccess);
      setSelectedCategory(category);
    }
  };

  return {
    meals,
    getByCat,
  };
}

export default useFetchMeals;
