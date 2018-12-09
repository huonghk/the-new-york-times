import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Display from './Display';

class PaginationButton extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onLoad(this.props.value);
    const position = this.props.articlesRef.current.offsetTop;
    window.scrollTo(0, position);
  }
  render() {
    const { onLoad, articlesRef, ...props } = this.props;
    return (
      <Display {...props} handleClick={this.onClick} />
    );
  }
}

PaginationButton.propTypes = {
  value: PropTypes.number.isRequired,
  onLoad: PropTypes.func.isRequired,
  articlesRef: PropTypes.object.isRequired,
};

export default PaginationButton;
