import React, { useState } from 'react';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';

const SearchBar = () => {
  const [ selected, setSelected ] = useState('name');
  const [ search, setSearch ] = useState('');
  
  const handleChange = () => {
    if (selected === 'name') {
      const result = getMealByName(search);
      console.log(result);
    }
    if (selected === 'ingredient') {
      const result = getMealByIngredients(search);
      console.log(result);
    }
    if (selected === 'letter') {
      const result = getMealByLetter(search);
      console.log(result);
    }
  };
  
  return (
    <div data-testid="search-input">
      <input type="text" name="searchBar" onChange={(e) => setSearch(e.target.value)}/>
      <div>
        <input
          data-testid="ingredient-search-radio" key="Ingrediente" type="radio"
          name="filter" onClick={() => setSelected('ingredient')}
        /><span>Ingrediente</span>
        <input
          data-testid="name-search-radio" key="Nome" type="radio"
          name="filter" onClick={() => setSelected('name')}
        /><span>Nome</span>
        <input
          data-testid="first-letter-search-radio" key="PrimLetra" type="radio"
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
