import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { showBar, setShowBar } = useContext(RecipesContext);
  let notProfile = true;

  const telaPrincipal = (title) =>
    <div className="headerClass">
      <div className="headerBar">
        <button data-testid="profile-top-btn" onClick={() => history.push('/perfil')} >
          <img src={profileIcon} alt="Icone do Profile" />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        {notProfile &&
          <button data-testid="search-top-btn" onClick={() => setShowBar(!showBar)} >
            <img src={searchIcon} alt="Icone de Busca" />
          </button>
        }
      </div>
      {showBar && <SearchBar />}
    </div>;

/*
  const telaPerfil = () =>
    <div className="headerClass">
      <div className="headerBar">
        <button data-testid="profile-top-btn" onClick={() => history.push('/perfil')} >
          <img src={profileIcon} alt="Icone do Profile" />
        </button>
        <h1 data-testid="page-title">Título</h1>
      </div>
    </div>;
*/
  if (location.pathname === '/comidas' || location.pathname === '/bebidas') {
    notProfile = true;
    return telaPrincipal(location.pathname);
  }
  if (location.pathname === '/') {
    notProfile = false;
    return telaPrincipal(location.pathname);
  }
  notProfile = false;
  return telaPrincipal(location.pathname);
};

export default Header;
