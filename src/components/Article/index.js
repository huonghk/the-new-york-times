import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalTrigger, ModalContent } from 'components/Modal';
import Detail from 'components/Article/Detail';
import formatDate from 'utils/formatDate';
import styles from './styles.module.css';

const Article = ({ loading, snippet, multimedia, pubDate, source }) => {
  if (loading) {
    return (
      <div className={`${styles.main} ${styles.loading}`}>
        <div className={styles.left} />
        <div className={styles.right}>
          <div className={styles.source} />
          <div className={styles.date} />
          <div className={styles.snippet}>
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <img className={styles.image} alt={snippet} src={multimedia.small} />
      </div>
      <div className={styles.right}>
        <div className={styles.source}>{source}</div>
        <div className={styles.date}>{formatDate(pubDate)}</div>
        <h3 className={styles.snippet}>{snippet}</h3>
        <Modal>
          <ModalTrigger>
            <div className={styles.detail}>
              Continue reading →
            </div>
          </ModalTrigger>
          <ModalContent>
            <Detail {...{ snippet, multimedia, pubDate, source }} />
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

Article.propTypes = {
  loading: PropTypes.bool,
  snippet: PropTypes.string,
  multimedia: PropTypes.object,
  pubDate: PropTypes.string,
  source: PropTypes.string,
};

export default Article;
