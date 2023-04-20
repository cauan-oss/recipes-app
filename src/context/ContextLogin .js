import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const ContextLogin = createContext();

export default function ProviderLogin({ children }) {
  const [emailLogin, setEmailLogin] = useState('');

  const valueMemo = useMemo(() => ({
    emailLogin, setEmailLogin,
  }), [emailLogin]);

  return (
    <ContextLogin.Provider value={ valueMemo }>
      { children }
    </ContextLogin.Provider>
  );
}

ProviderLogin.propTypes = {
  children: PropTypes.node,
}.isRequired;
