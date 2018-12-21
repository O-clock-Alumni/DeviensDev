/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import * as S from './style';
import { HTML, CSS } from './data';

/*
 * Code
 */
const items = { HTML, CSS };

/*
 * Component
 */
const Pagination = ({ id, language }) => (
  <S.Nav>
    {items[language].map(({ to, name }, index) => (
      <S.Item key={to} isActive={id >= index + 1}>
        <S.Button to={to}>{name}</S.Button>
      </S.Item>
    ))}
  </S.Nav>
);

/*
 * PropTypes
 */
Pagination.propTypes = {
  id: PropTypes.number,
  language: PropTypes.string.isRequired,
};

Pagination.defaultProps = {
  id: null,
};

/*
 * Export
 */
export default Pagination;
