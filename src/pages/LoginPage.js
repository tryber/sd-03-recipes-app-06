import React from 'react';
import LoginContainer from '../components/LoginContainer';
import ButtonLogin from '../components/ButtonLogin';
import './LoginPage.css';

const loginApp = () => (
  <div className="Principal">
    <header>
      <div className="login-form">
        <form>
          <div className="form-group has-error">
            <LoginContainer />
            <ButtonLogin />
          </div>
        </form>
      </div>
    </header>
  </div>
);

export default loginApp;
