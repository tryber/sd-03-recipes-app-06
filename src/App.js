import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProviderSearch from './context/ProviderSearch';
import Bebidas from './pages/Bebidas';
import Comidas from './pages/Comidas';
import DetalhesBebida from './pages/DetalhesBebida';
import DetalhesComida from './pages/DetalhesComida';
import Explorar from './pages/Explorar';
import ExplorarBebidas from './pages/ExplorarBebidas';
import ExplorarComidas from './pages/ExplorarComidas';
import ExplorarBebidasIngredientes from './pages/ExplorarBebidasIngredientes';
import ExplorarComidasIngredientes from './pages/ExplorarComidasIngredientes';
import ExplorarComidasArea from './pages/ExplorarComidasArea';
import LoginPage from './pages/LoginPage';
import Perfil from './pages/Perfil';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import FilterDrinks from './pages/FilterDrinks';
import FilterMeal from './pages/FilterMeal';
import './App.css';

function App() {
  return (
    <ProviderSearch>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/bebidas/:id" component={DetalhesBebida} />
        <Route
          exact
          path="/bebidas/filter/:ing"
          render={({ match }) => <FilterDrinks match={match} />}
        />
        <Route exact path="/comidas/:id" component={DetalhesComida} />
        <Route
          exact
          path="/comidas/filter/:ing"
          render={({ match }) => <FilterMeal match={match} />}
        />
        <Route exact path="/bebidas" component={Bebidas} />
        <Route exact path="/comidas" component={Comidas} />
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ExplorarComidasIngredientes}
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ExplorarBebidasIngredientes}
        />
        <Route exact path="/explorar/comidas/area" component={ExplorarComidasArea} />
        <Route exact path="/explorar/comidas" component={ExplorarComidas} />
        <Route exact path="/explorar/bebidas" component={ExplorarBebidas} />
        <Route exact path="/explorar" component={Explorar} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/receitas-feitas" component={ReceitasFeitas} />
        <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
      </Switch>
    </ProviderSearch>
  );
}

export default App;
