import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import ProviderLogin from '../context/ContextLogin ';
import renderWithRouter from '../renderWithRouter';

describe('app de receitas', () => {
  test('Login', () => {
    renderWithRouter(
      <ProviderLogin>
        <App />
      </ProviderLogin>,
    );

    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(btnSubmit).toBeDisabled();

    userEvent.type(inputEmail, 'teste@teste.com');
    userEvent.type(inputPassword, '000000');
    expect(btnSubmit).not.toBeDisabled();
  });
});
