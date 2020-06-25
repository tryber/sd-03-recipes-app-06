const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';

const apiCocktails = () => fetch(URL).then((response) => (
  response.json()
    .then((token) => (response.ok ? Promise.resolve(token) : Promise.reject(token)))
));

export default apiCocktails;
