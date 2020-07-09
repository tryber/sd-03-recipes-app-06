import React, { useContext } from 'react';
import Context from '../context/Context';
import './LoginContainer.css';

const LoginContainer = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
  } = useContext(Context);

  return (
    <div className="form-group">
      <h2>Login</h2>
      <input
        id="email"
        className="form-control"
        name="setEmail"
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        id="password"
        className="form-control"
        name="setPassword"
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </div>
  );
};

export default LoginContainer;
