import React, { useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import RecipesContext from '../context/SearchContext';
import SearchBar from './SearchBar';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import './Header.css';

const titlePlacer = {
  zbebidas: 'Bebidas',
  zcomidas: 'Comidas',
  zexplorarzcomidas: 'Explorar Comidas',
  zexplorarzbebidas: 'Explorar Bebidas',
  zexplorarzcomidaszingredientes: 'Explorar Ingredientes',
  zexplorarzbebidaszingredientes: 'Explorar Ingredientes',
  zexplorarzcomidaszarea: 'Explorar Origem',
  zexplorar: 'Explorar',
  zperfil: 'Perfil',
  zreceitasxfeitas: 'Receitas Feitas',
  zreceitasxfavoritas: 'Receitas Favoritas',
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  let result = s.replace(/[/]/g, 'z').replace(/[-]/g, 'x');
  return titlePlacer[result];
}

const Header = () => {
  const history = useHistory();
  const location = useLocation();
  const { showBar, setShowBar } = useContext(RecipesContext);
  let notProfile = true;

  const telaPrincipal = (title) =>
    <div className="headerClass">
      <div className="headerBar">
        <button onClick={() => history.push('/perfil')} >
          <img data-testid="profile-top-btn" src={profileIcon} alt="Icone do Profile" />
        </button>
        <h1 data-testid="page-title">{title}</h1>
        {notProfile &&
          <button onClick={() => setShowBar(!showBar)} >
            <img data-testid="search-top-btn" src={searchIcon} alt="Search" />           
          </button>
        }
      </div>
      {showBar && <SearchBar />}
    </div>;

  if (location.pathname === '/comidas'
    || location.pathname === '/bebidas'
    || location.pathname === '/explorar/comidas/area'
  ) {
    notProfile = true;
    return telaPrincipal(capitalize(location.pathname));
  }
  if (location.pathname === '/perfil'
    || location.pathname === '/explorar'
    || location.pathname === '/explorar/comidas'
    || location.pathname === '/explorar/bebidas'
    || location.pathname === '/explorar/comidas/ingredientes'
    || location.pathname === '/explorar/bebidas/ingredientes'
    || location.pathname === '/receitas-feitas'
    || location.pathname === '/receitas-favoritas'
  ) {
    notProfile = false;
    return telaPrincipal(capitalize(location.pathname));
  }
  notProfile = false;
  return null;
};

export default Header;
