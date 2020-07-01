const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getMeals = () => fetch(BASE_URL).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getMealsCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const getMealsByCategory = (cat) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export { getMeals, getMealsCategories, getMealsByCategory };
export const getMealByLetter = (letter) => fetch(`${BASE_URL}${letter}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const ING_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

export const getMealByIngredients = (ingredient) =>
  fetch(`${ING_URL}${ingredient}`).then((response) => response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const NAME_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMealByName = (name) =>
  fetch(`${NAME_URL}${name}`).then((response) => response
    .json()
    .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
