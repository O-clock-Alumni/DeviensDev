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
const Answer = ({ answer, handleChange, index, questionId, type, values }) => (
  <S.Label htmlFor={`${questionId}${index}`} isChecked={values.includes(index)}>
    <S.Radio
      // HTML
      type={type}
      id={`${questionId}${index}`}
      name={questionId}
      // React
      checked={values.includes(index)}
      onChange={handleChange}
      value={index}
    />
    {answer}
  </S.Label>
);

/*
 * PropTypes
 */
Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  values: PropTypes.array,
};

Answer.defaultProps = {
  values: [],
};

/*
 * Export
 */
export default Answer;
