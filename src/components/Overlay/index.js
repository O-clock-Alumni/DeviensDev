/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import * as S from './style';

/*
 * Component
 */
const Overlay = props => {
  // Attributes (props except children)
  const attrs = { ...props };
  delete attrs.children;

  // onClose
  if (props.onClose) {
    attrs.onClick = evt => {
      if (evt.target.id.slice(0, 7) === 'overlay') {
        props.onClose();
      }
    };
    delete attrs.onClose;
  }

  // Return
  return (
    <S.Container id="overlay" {...attrs}>
      <S.Close id="overlay-close" />
      {props.children}
    </S.Container>
  );
};

/*
 * PropTypes
 */
Overlay.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

/*
 * Export
 */
export default Overlay;
