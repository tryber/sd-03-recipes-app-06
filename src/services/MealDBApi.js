const getMeals = () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getMealsCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getMealsByCategory = (cat) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getMealDetailsById = (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export { getMeals, getMealsCategories, getMealsByCategory, getMealDetailsById };
