import React from 'react';
import LoginContainer from './LoginContainer';
import ButtonLogin from './ButtonLogin';

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
