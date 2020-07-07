import { useState } from 'react';
import { getMealDetailsById } from '../services/MealDBApi';


function useGetMealById() {
  const [meal, setMeal] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFetchMealSuccess = (json) => {
    if (loading) return;
    setMeal([...json.meals]);
    setLoading(false);
  };

  const handleSetId = (id) => {
    setLoading(true);
    getMealDetailsById(id).then(handleFetchMealSuccess);
  };

  return {
    meal,
    loading,
    handleSetId,
  };
}

export default useGetMealById;
