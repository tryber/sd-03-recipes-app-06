
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

export const getMealByLetter = (letter) => fetch(`${BASE_URL}${letter}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const ING_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';

export const getMealByIngredients = (ingredient) => fetch(`${ING_URL}${ingredient}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const NAME_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getMealByName = (name) => fetch(`${NAME_URL}${name}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const getMeal = (id) => fetch(`${ID_URL}${id}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const getMeals = () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=').then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const getMealsCategories = () => fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const getMealsByCategory = (cat) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const getMealDetailsById = (id) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

// requisição API para Page Explore por Origem e Surpreenda-me:

const URL_ALLMEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const getAllMeals = () => fetch(`${URL_ALLMEALS}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const URL_RANDOM = 'https://www.themealdb.com/api/json/v1/1/random.php';

export const getRandomMeals = () => fetch(`${URL_RANDOM}`).then((response) => response
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
