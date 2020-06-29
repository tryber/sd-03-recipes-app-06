import { useState, useEffect } from 'react';
import { getMeals, getMealsByCategory } from '../services/MealDBApi';


function useFetchPlanets() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(false);

  const handleFetchMealSuccess = (json) => {
    const dataMeals = json.meals;
    setMeals([...dataMeals]);
    setLoading(false);
  };

  useEffect(() => {
    if (loading) return;
    setLoading(true);
    getMeals().then(handleFetchMealSuccess);

    return () => meals;
  }, []);

  const getByCat = (category) => {
    if (category !== 'all') {
      if (category === selectedCategory) {
        setSelectedCategory('');
        getMeals().then(handleFetchMealSuccess);
      }
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

export default useFetchPlanets;
