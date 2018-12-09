import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

const PaginationButtonDisplay = ({ value, current, handleClick }) => (
  <button
    className={`${styles.button} ${value === current ? styles.active : ''}`}
    onClick={handleClick}
  >
    {value}
  </button>
);

PaginationButtonDisplay.propTypes = {
  current: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PaginationButtonDisplay;
