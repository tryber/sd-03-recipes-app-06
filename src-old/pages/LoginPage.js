import React from 'react';
import LoginContainer from '../components/LoginContainer';
import ButtonLogin from '../components/ButtonLogin';

const loginApp = () => (
  <div className="App">
    <header>
      <div>
        <LoginContainer />
        <ButtonLogin />
      </div>
    </header>
  </div>
);

export default loginApp;
