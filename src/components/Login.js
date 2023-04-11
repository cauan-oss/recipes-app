import React from 'react';

export default function Login() {
  return (
    <div>
      <label htmlFor="">
        <input
          type="email"
          data-testid="email-input"
        />
      </label>

      <label htmlFor="">
        <input
          type="password"
          data-testid="password-input"
        />
      </label>

      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}
