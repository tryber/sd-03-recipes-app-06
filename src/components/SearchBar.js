import React from 'react';
// comecando os trabalhos

const SearchBar = () =>
  <div data-testid="search-input">
    <input type="text" name="searchBar"/>
      <div>
        <input data-testid="ingredient-search-radio" key="Ingrediente" type="radio" name="filter" /><span>Ingrediente</span>
        <input data-testid="name-search-radio" key="Nome" type="radio" name="filter" /><span>Nome</span>
        <input data-testid="first-letter-search-radio" key="PrimeiraLetra" type="radio" name="filter" /><span>Primeira Letra</span>
      </div>
      <div>
        <button data-testid="exec-search-btn">Buscar</button>
      </div>
  </div>;

export default SearchBar;
