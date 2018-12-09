import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

class ModalBody extends Component {
  constructor(props) {
    super(props);
    this.contentRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  handleClickOutside(event) {
    if (!this.props.shouldCloseOnClickOutside) { return; }
    if (this.contentRef && this.contentRef.current.contains(event.target)) { return; }
    this.props.onClose();
  }
  handleKeyDown(event) {
    if (!this.props.shouldCloseOnPressEscape) { return; }
    if (event.keyCode === 27) {
      this.props.onClose();
    }
  }
  render() {
    const { Element, onClose, onRefCloseButton } = this.props;
    return (
      <aside
        className={styles.backdrop}
        role={Element.props.role} tabIndex="-1"
        onClick={this.handleClickOutside}
        onKeyDown={this.handleKeyDown}
      >
        <div className={styles.content} ref={this.contentRef}>
          <button
            className={styles.close}
            onClick={onClose} ref={onRefCloseButton}
            aria-label="Close Modal"
          >
            <svg className={styles.icon} viewBox="0 0 40 40"><path d="M 10,10 L 30,30 M 30,10 L 10,30"></path></svg>
          </button>
          <div className={styles.body}>
            {Element.props.children}
          </div>
        </div>
      </aside>
    )
  }
}

ModalBody.propTypes = {
  Element: PropTypes.object.isRequired,
  shouldCloseOnClickOutside: PropTypes.bool.isRequired,
  shouldCloseOnPressEscape: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRefCloseButton: PropTypes.func.isRequired,
};

export default ModalBody;
