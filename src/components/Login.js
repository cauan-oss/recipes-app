import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ContextLogin } from '../context/ContextLogin ';

export default function Login() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const { emailLogin, setEmailLogin } = useContext(ContextLogin);

  function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function btnDisabled() {
    let validation = true;
    const maxPass = 6;
    if (password.length > maxPass
      && validateEmail(emailLogin)) validation = false;
    return validation;
  }

  function saveEmailLS(email) {
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        saveEmailLS(emailLogin);
        history.push('/meals');
      } }
    >
      <div>
        <label htmlFor="email">
          <input
            type="email"
            data-testid="email-input"
            placeholder="Email"
            name="email"
            value={ emailLogin }
            onChange={ (e) => setEmailLogin(e.target.value) }
          />
        </label>
        <label htmlFor="">
          <input
            type="password"
            data-testid="password-input"
            placeholder="Password"
            name="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="submit"
          disabled={ btnDisabled() }
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </div>
    </form>
  );
}
