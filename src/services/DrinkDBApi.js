const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';

export const getDrinkByLetter = (letter) => fetch(`${BASE_URL}${letter}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const ING_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

export const getDrinkByIngredients = (ingredient) => fetch(`${ING_URL}${ingredient}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

const NAME_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const getDrinkByName = (name) => fetch(`${NAME_URL}${name}`).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export const getDrink = (id) => fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((resp) => resp.json());

export const getDrinks = () => fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
  .then((resp) => resp.json());
