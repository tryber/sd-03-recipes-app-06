
const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

const getMealByLetter = () => fetch(BASE_URL).then((response) => response
  .json()
  .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json))));

export default getMealByLetter ;
