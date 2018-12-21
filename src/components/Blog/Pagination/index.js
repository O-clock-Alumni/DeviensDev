/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */

// Styles
import { Container, Button } from './style';

/*
 * Component
 */
const Pagination = ({ page, articlesNumber, handleChange }) => {
  const pages = [];
  const pagesNumber = Math.ceil(articlesNumber / 9);

  for (let i = 0; i < pagesNumber; i++) {
    pages.push(i + 1);
  }

  return (
    <Container>
      {pages.map(element => {
        const isActive = page === element;

        return (
          <Button
            id={element}
            key={element}
            isActive={isActive}
            onClick={handleChange}
          >
            {element}
          </Button>
        );
      })}
    </Container>
  );
};

/*
 * PropTypes
 */
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  articlesNumber: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

/*
 * Export
 */
export default Pagination;
