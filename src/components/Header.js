import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header({ title, searchInput }) {
  const history = useHistory();
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <div>
      <h1 data-testid="page-title">
        {title }
      </h1>
      <button
        onClick={ () => history.push('/profile') }
      >
        <img src={ profileIcon } alt="profile icon" data-testid="profile-top-btn" />
      </button>

      { searchInput
      && (
        <div>
          { showSearchInput
          && <input
            data-testid="search-input"
            type="text"
          />}
          <button
            onClick={ () => setShowSearchInput(!showSearchInput) }
          >
            <img src={ searchIcon } alt="search icon" data-testid="search-top-btn" />
          </button>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
};
