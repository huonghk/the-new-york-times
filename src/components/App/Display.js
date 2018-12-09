import React from 'react';
import PropTypes from 'prop-types';
import Article from 'components/Article';
import Pagination from 'components/Pagination';
import styles from './styles.module.css';

const AppDisplay = ({ articles }) => {
  let articlesRef = React.createRef();
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div className="container">
          <h2>The New York Times</h2>
        </div>
      </header>
      <main className={styles.body} ref={articlesRef}>
        <div className="container">
          <div>
            {articles.map(item => (
              <div className={styles.item} key={item.id}>
                <Article {...item} />
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <Pagination articlesRef={articlesRef} />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className="container">
          © 2018 The New York Times Company
        </div>
      </footer>
    </React.Fragment>
  );
};

AppDisplay.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default AppDisplay;
