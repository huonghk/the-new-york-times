import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';

class AppContainer extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }

  render() {
    const { loadArticles, ...props } = this.props;
    return (
      <Display {...props} />
    );
  }
}

AppContainer.propTypes = {
  loadArticles: PropTypes.func.isRequired,
};

export default AppContainer;
