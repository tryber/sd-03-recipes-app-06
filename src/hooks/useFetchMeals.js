import { useState, useEffect } from 'react';
import { getMeals, getMealsByCategory, receivedSearch } from '../services/MealDBApi';


function useFetchMeals() {
  const [meals, setMeals] = useState([]);
  const [mealsReady, setMealsReady] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleFetchMealSuccess = (json) => {
    console.log('estou aqui');
    const dataMeals = json.meals;
    console.log('dataMeals', dataMeals);
    setMeals([...dataMeals]);
    setMealsReady(true);
    console.log('Passei aqui');
    console.log('meals', meals);
    console.log('mealsReady', mealsReady);
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
