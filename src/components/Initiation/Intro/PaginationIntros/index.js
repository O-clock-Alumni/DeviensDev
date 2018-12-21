/*
 * Package Import
 */
import React from 'react';
/*
 * Local Import
 */

import { colors } from 'src/themes';
import { Nav, NavButton, NavButtonInactive } from './style';

/**
 * Var
 */
const items = [
  {
    name: 'html',
    active: true,
  },
  {
    name: 'css',
    active: true,
  },
  {
    name: 'js',
    active: false,
  },
  {
    name: 'php',
    active: false,
  },
];

/*
 * Component
 */
const PaginationIntro = () => (
  <Nav>
    {items &&
      items.map(({ name, active }) => {
        if (active) {
          return (
            <NavButton
              key={name}
              to={`/initiation/${name}`}
              activeStyle={{
                color: colors.mainColor,
              }}
            >
              {name}
            </NavButton>
          );
        }
        return <NavButtonInactive key={name}>{name}</NavButtonInactive>;
      })}
  </Nav>
);

/*
 * Export
 */

export default PaginationIntro;
