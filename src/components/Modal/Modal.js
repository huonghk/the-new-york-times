import ReactDOM from 'react-dom';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import { extractChildren, toggleScrollLock } from './utils';
import styles from './styles.module.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.ModalTrigger = extractChildren(props.children, 'ModalTrigger');
    this.ModalContent = extractChildren(props.children, 'ModalContent');

    this.state = {
      isOpen: false,
    };
    this.onOpen = this.onOpen.bind(this, true);
    this.onClose = this.onClose.bind(this, false);

    this.refTriggerButton = null;
    this.refCloseButton = null;
    this.onRefTriggerButton = (ref) => this.refTriggerButton = ref;
    this.onRefCloseButton = (ref) => this.refCloseButton = ref;
  }
  onOpen() {
    this.setState({
      isOpen: true,
    }, () => {
      this.refCloseButton.focus();
      toggleScrollLock();
    });
  }
  onClose() {
    this.setState({
      isOpen: false,
    }, () => {
      this.refTriggerButton.focus();
      toggleScrollLock();
    });
  }
  render() {
    return (
      <Fragment>
        <button
          className={styles.trigger}
          onClick={this.onOpen} ref={this.onRefTriggerButton}
        >
          {this.ModalTrigger.props.children}
        </button>
        {this.state.isOpen && (
          ReactDOM.createPortal(
            <Body
              Element={this.ModalContent}
              shouldCloseOnClickOutside={this.props.shouldCloseOnClickOutside}
              shouldCloseOnPressEscape={this.props.shouldCloseOnPressEscape}
              onClose={this.onClose} onRefCloseButton={this.onRefCloseButton}
            />,
            document.body
          )
        )}
      </Fragment>
    )
  }
}

Modal.propTypes = {
  /** Clicking outside the Modal will close it. */
  shouldCloseOnClickOutside: PropTypes.bool.isRequired,
  /** Pressing the escape key will close the Modal. */
  shouldCloseOnPressEscape: PropTypes.bool.isRequired,
  // TODO
  // Improve proptypes validation for children
  /** Array of two instances: one is ModalTrigger, one is ModalContent. */
  children: PropTypes.array.isRequired,
};

Modal.defaultProps = {
  shouldCloseOnClickOutside: true,
  shouldCloseOnPressEscape: true,
};

export default Modal;
