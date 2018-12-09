import React from 'react';
import PropTypes from 'prop-types';

const ModalContent = () => (
  <div>Fake Content</div>
);

ModalContent.propTypes = {
  /** Any node element */
  children: PropTypes.node.isRequired,
  /** WAI-ARIA Attributes */
  role: PropTypes.oneOf(['dialog', 'alertdialog']),
};

ModalContent.defaultProps = {
  role: 'dialog',
};

export default ModalContent;
