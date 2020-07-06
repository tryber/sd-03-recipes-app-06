import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Perfil.css';


function renderPage(userEmail) {
  return (
    <div className="profileContainer">
      <div className="user-mail" data-testid="profile-email">
        {userEmail.email}
      </div>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn" type="button" className="done-box">
          Receitas Feitas
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn" type="button" className="favorite-box">
          Receitas Favoritas
        </button>
      </Link>
      <Link to="/">
        <button
          className="logout-box"
          data-testid="profile-logout-btn"
          onClick={() => localStorage.clear()}
          type="button"
        >
          Sair
        </button>
      </Link>
    </div>
  );
}

const Perfil = () => {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  if (!userEmail) {
    return (
      <div>
        <Header showSearch={false} isDisable />
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <Header showSearch={false} isDisable />
        {renderPage(userEmail)}
        <Footer />
      </div>
    );
  };
}

export default Perfil;
