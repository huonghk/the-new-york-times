import React from 'react';
import PropTypes from 'prop-types';
import formatDate from 'utils/formatDate';
import styles from './styles.module.css';

const ArticleDetail = ({ snippet, multimedia, pubDate, source }) => (
  <div className={styles.main}>
    {multimedia.large && <img className={styles.image} alt={snippet} src={multimedia.large} />}
    <div className={styles.info}>
      <div className={styles.source}>{source}</div>
      <div className={styles.date}>{formatDate(pubDate)}</div>
      <h3 className={styles.snippet}>{snippet}</h3>
    </div>
  </div>
);

ArticleDetail.propTypes = {
  snippet: PropTypes.string,
  multimedia: PropTypes.object,
  pubDate: PropTypes.string,
  source: PropTypes.string,
};

export default ArticleDetail;
