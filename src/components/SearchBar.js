import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';

const mealtSearch = async (filter, arg) => {
  if (filter === 'name') {
    const result = await getMealByName(arg).then((response) => response.meals);
    return result;
  }
  if (filter === 'ingredient') {
    const result = await getMealByIngredients(arg).then((response) => response.meals);
    return result;
  }
  if (filter === 'letter' && arg.length === 1) {
    const result = await getMealByLetter(arg).then((response) => response.meals);
    return result;
  }
  if (filter === 'letter') {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
  return null;
};

const drinkSearch = async (filter, arg) => {
  if (filter === 'name') {
    const result = await getDrinkByName(arg).then((response) => response.drinks);
    return result;
  } else if (filter === 'ingredient') {
    const result = await getDrinkByIngredients(arg).then((response) => response.drinks);
    return result;
  } else if (filter === 'letter' && arg.length === 1) {
    const result = await getDrinkByLetter(arg).then((response) => response.drinks);
    return result;
  } else if (filter === 'letter') {
    alert('Sua busca deve conter somente 1 (um) caracter');
  }
  return null;
};

const SearchBar = () => {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');

  const verifyReceived = (obj) => {
    if (obj.length === 1) {
      if (location.pathname.match(/comidas/g))
        history.push(`${location.pathname}/${obj[0].idMeal}`);
      else history.push(`${location.pathname}/${obj[0].idMeal}`);
    }
  };

  const handleChange = async () => {
    let received;
    if (location.pathname.match(/comidas/g)) {
      received = await mealtSearch(selected, search);
    } else {
      received = await drinkSearch(selected, search);
    }
    verifyReceived(received);
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
