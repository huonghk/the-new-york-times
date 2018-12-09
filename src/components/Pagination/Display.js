import React from 'react';
import Button from './Button';
import styles from './styles.module.css';

const pages = [1, 2, 3];

const Pagination = (props) => (
  <ul className={styles.main}>
    {pages.map(num => (
      <li key={num}>
        <Button value={num} {...props} />
      </li>
    ))}
  </ul>
);

export default Pagination;
