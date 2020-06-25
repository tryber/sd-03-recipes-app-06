import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

const telaPerfil = () =>
  <div className="headerClass">
    <div className="headerBar">
      <Link to="/perfil">
        <img src={profileIcon} alt="Icone do Profile" />
      </Link>
      <h1>Título</h1>
    </div>
  </div>;

const Header = () => {
  const location = useLocation();
  const { showBar, setShowBar } = useContext(RecipesContext);

  const telaPrincipal = () =>
    <div className="headerClass">
      <div className="headerBar">
        <Link to="/perfil">
          <img src={profileIcon} alt="Icone do Profile" />
        </Link>
        <h1>Comidas</h1>
        <button onClick={() => setShowBar(!showBar)}><img src={searchIcon} alt="Icone de Busca"/></button>
      </div>
      {showBar && <div><p>SearchBar</p></div>}
    </div>;

  if (location.pathname === '/comidas') {
    return telaPrincipal();
  }
  if (location.pathname === '/') {
    return telaPrincipal();
  }

  return telaPerfil();
};

export default Header;
