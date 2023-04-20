import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../components/Login';
import ProviderLogin from '../context/ContextLogin ';
import renderWithRouter from '../renderWithRouter';

describe('Testando tela de login', () => {
  it('Login', () => {
    const { history } = renderWithRouter(
      <ProviderLogin>
        <Login />
      </ProviderLogin>,
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const buttonLogin = screen.getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(buttonLogin).toBeInTheDocument();
    userEvent.type(emailInput, 'testeEmail');
    userEvent.type(passwordInput, '222');
    expect(buttonLogin).toBeDisabled();

    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '12345678');
    expect(buttonLogin).toBeEnabled();
    userEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/meals');
  });
});
