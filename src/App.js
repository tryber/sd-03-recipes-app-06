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
import './App.css';

function App() {
  return (
    <ProviderSearch>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/bebidas/:id" component={DetalhesBebida} />
        <Route path="/comidas/:id" component={DetalhesComida} />
        <Route path="/bebidas" component={Bebidas} />
        <Route path="/comidas" component={Comidas} />
        <Route path="/explorar/comidas/ingredientes" component={ExplorarComidasIngredientes} />
        <Route path="/explorar/bebidas/ingredientes" component={ExplorarBebidasIngredientes} />
        <Route path="/explorar/comidas/area" component={ExplorarComidasArea} />
        <Route path="/explorar/comidas" component={ExplorarComidas} />
        <Route path="/explorar/bebidas" component={ExplorarBebidas} />
        <Route path="/explorar" component={Explorar} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/receitas-feitas" component={ReceitasFeitas} />
        <Route path="/receitas-favoritas" component={ReceitasFavoritas} />
      </Switch>
    </ProviderSearch>
  );
}

export default App;
