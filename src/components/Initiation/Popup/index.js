/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Container, Close, Content, Img } from './style';

/*
 * Component
 */
const Popup = props => {
  // Attributes
  const { children, onClose, status, ...attrs } = props;

  // onClose
  if (onClose) {
    attrs.onClick = evt => {
      const { id } = evt.target;

      if (id.includes('overlay')) {
        onClose();
      }
    };
  }
  return (
    <Container id="overlay" {...attrs}>
      {/* ❌ */}
      <Close onClick={onClose} />

      {/* Content */}
      <Content status={status}>
        <Img status={status} />
        {children}
      </Content>
    </Container>
  );
};

/*
 * PropTypes
 */
Popup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Popup;
