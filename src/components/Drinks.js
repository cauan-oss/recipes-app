import React from 'react';
import searchIcon from '../images/searchIcon.svg';
import Header from './Header';

export default function Drinks() {
  return (
    <div>
      <Header title="Drinks" />
      <img src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
    </div>
  );
}
