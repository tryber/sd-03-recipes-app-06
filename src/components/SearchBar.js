import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';

const fetchesMeals = {
  name: getMealByName,
  ingredient: getMealByIngredients,
  letter: getMealByLetter,
};

const fetchesDrinks = {
  name: getDrinkByName,
  ingredient: getDrinkByIngredients,
  letter: getDrinkByLetter,
};

const mealtSearch = async (filter, arg) => {
  const getMeal = fetchesMeals[filter];
  if (filter === 'letter' && arg.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const result = await getMeal(arg).then((response) => response.meals);
    return result;
  }
  return [];
};

const drinkSearch = async (filter, arg) => {
  const getDrink = fetchesDrinks[filter];
  if (filter === 'letter' && arg.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else {
    const result = await getDrink(arg).then((response) => response.drinks);
    return result;
  }
  return [];
};

const SearchBar = () => {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');
  const verifyReceived = (obj, type) => {
    history.push(`${location.pathname}/${obj[0][type]}`);
  };
  const handleChange = async () => {
    let received; let type = 'idMeal';
    if (location.pathname.match(/comidas/g)) {
      received = await mealtSearch(selected, search);
    } else {
      received = await drinkSearch(selected, search);
      type = 'idDrink';
    }
    if (!received) {
      return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } 
    if (received.length === 1) {
      verifyReceived(received, type);
    }
  };
  return (
    <div>
      <input
        type="text" data-testid="search-input"
        name="searchBar" onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <input
          type="radio" data-testid="ingredient-search-radio" key="Ingrediente"
          name="filter" onClick={() => setSelected('ingredient')}
        /><span>Ingrediente</span>
        <input
          type="radio" data-testid="name-search-radio" key="Nome"
          name="filter" onClick={() => setSelected('name')}
        /><span>Nome</span>
        <input
          type="radio" data-testid="first-letter-search-radio" key="PrimLetra"
          name="filter" onClick={() => setSelected('letter')}
        /><span>Primeira Letra</span>
      </div>
      <div>
        <button data-testid="exec-search-btn" onClick={() => handleChange()}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
