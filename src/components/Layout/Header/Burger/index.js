/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import { Circle, Bar } from './style';

/*
 * Component
 */
const Burger = ({ open, hideMenu, showMenu }) => (
  <Circle onClick={open ? hideMenu : showMenu}>
    <Bar open={open} />
  </Circle>
);

Burger.propTypes = {
  open: PropTypes.bool.isRequired,
  hideMenu: PropTypes.func.isRequired,
  showMenu: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Burger;
