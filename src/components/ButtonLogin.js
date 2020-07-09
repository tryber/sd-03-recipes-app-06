import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import './LoginContainer.css';

const handleSubmit = (email) => {
  localStorage.setItem('mealsToken', '1');
  localStorage.setItem('cocktailsToken', '1');
  localStorage.setItem('user', JSON.stringify({ email }));
  return true;
};

const ButtonLogin = () => {
  const { password, email } = useContext(Context);
  const regex = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9]+(-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  return (
    <div className="form-group">
      <Link to="/comidas">
        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          data-testid="login-submit-btn"
          disabled={!(password.length > 6 && regex.test(email))}
          onClick={() => handleSubmit(email)}
        >
          Entrar
        </button>
      </Link>
    </div>
  );
};

export default ButtonLogin;
