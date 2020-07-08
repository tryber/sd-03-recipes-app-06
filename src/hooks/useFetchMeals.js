import { useState, useEffect } from 'react';
import { getMeals, getMealsByCategory, receivedSearch } from '../services/MealDBApi';


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

  const receiveSearchedMeals = (obj) => {
    receivedSearch(obj, true)
    .then(handleFetchMealSuccess);
  };

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
    receiveSearchedMeals,
  };
}

export default useFetchMeals;
