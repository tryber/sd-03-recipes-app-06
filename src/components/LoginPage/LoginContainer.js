import React, { useContext } from 'react';
//Importar de Context API


const LoginContainer = () => {
  const {
    email,
    password,
    setEmail,
    setPassword
  }
  // } = useContext(Importar de Context API);

  return (
    <div className="login-campo">
      <h2>Login</h2>
      <input
        id="email"
        name="setEmail"
        type="email"
        data-testid=" "
        placeholder=" E-mail"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        id="password"
        name="setPassword"
        type="password"
        data-testid=" "
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
    </div>
  );
};

export default LoginContainer;