import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Profile.css';

function renderPage(userEmail) {
  return (
    <div className="profileContainer">
      <div className="user-mail" data-testid="profile-email">
        {userEmail.email}
      </div>
      <Link to="/receitas-feitas">
        <button data-testid="profile-done-btn" type="button" className="done-box">
          <p className="btn-done">Receitas Feitas</p>
        </button>
      </Link>
      <Link to="/receitas-favoritas">
        <button data-testid="profile-favorite-btn" type="button" className="favorite-box">
          <p className="btn-favorite">Receitas Favoritas</p>
        </button>
      </Link>
      <Link to="/">
        <button
          className="logout-box"
          data-testid="profile-logout-btn"
          onClick={() => localStorage.clear()}
          type="button"
        >
          <p className="btn-logout">Sair</p>
        </button>
      </Link>
    </div>
  );
}

const Profile = () => {
  const userEmail = JSON.parse(localStorage.getItem('user'));

  if (!userEmail) return <div>Carregando...</div>;

  return (
    <div>
      <Header showSearch={false} isDisable />
      {renderPage(userEmail)}
      <Footer />
    </div>
  );
};

export default Profile;
