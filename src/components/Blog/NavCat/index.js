/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import categories from './categories';
import { Container, Items, Cat } from './style';

/*
 * Component
 */
const NavCat = ({ category, switchCategory }) => (
  <Container>
    <Items>
      {categories.map(({ name, active, inactive, tag }, index) => {
        const isActive = category === tag;

        return (
          <Cat
            key={name}
            first={index === 0}
            icon={isActive ? active : inactive}
            isActive={isActive}
            id={name}
            onClick={() => switchCategory(tag)}
          >
            {name}
          </Cat>
        );
      })}
    </Items>
  </Container>
);

/*
 * PropTypes
 */
NavCat.propTypes = {
  category: PropTypes.string.isRequired,
  switchCategory: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default NavCat;
