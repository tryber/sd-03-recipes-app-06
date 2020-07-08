// requisição API para Page Explore por Origem, Ingredientes e Surpreenda-me:

// Por Ingredientes:
const URL_INGREDIENTSMEAL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

export const fetchIgredientsMeal = () => fetch(`${URL_INGREDIENTSMEAL}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const URL_INGREDIENTSDRINK = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

export const fetchIgredientsDrink = () => fetch(URL_INGREDIENTSDRINK).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

// Por Origem:

const URL_ALLMEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getAllMeals = () => fetch(`${URL_ALLMEALS}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const URL_COUNTRYLIST = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

export const getCountryList = () => fetch(`${URL_COUNTRYLIST}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const URL_COUNTRYFILTER = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=';

export const getCountryFilter = (country) => fetch(`${URL_COUNTRYFILTER}${country}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

// Surpreenda-me:

const URL_RANDOMMEALS = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getRandomMeals = () => fetch(`${URL_RANDOMMEALS}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const URL_RANDOMDRINKS = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

export const getRandomDrinks = () => fetch(`${URL_RANDOMDRINKS}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));
