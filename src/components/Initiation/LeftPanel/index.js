/*
 * Package Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Textarea from 'src/components/Initiation/Field/Textarea';
import Highlight from 'src/components/Initiation/Field/Highlight';
import { Container } from './style';

/*
 * Component
 */
const LeftPanel = ({
  code,
  context,
  example,
  expected,
  hasGiveUp,
  handleChange,
  language,
  value,
  large,
}) => {
  const isExercise = context === 'exercise';

  let beforeLine = null;
  let line = null;

  if (isExercise) {
    beforeLine = code.before.trim().split(/\r\n|\r|\n/).length;
    line = value.trim().split(/\r\n|\r|\n/).length;
  }

  return (
    <Container large={large}>
      {!isExercise && <Highlight language={language} code={example} />}
      {isExercise && (
        <Fragment>
          <Highlight code={code.before} language={language} />

          {hasGiveUp ? (
            <Highlight code={expected} language={language} />
          ) : (
            <Textarea
              handleChange={handleChange}
              value={value}
              startLine={beforeLine}
            />
          )}
          <Highlight
            code={code.after}
            language={language}
            startLine={beforeLine + line + 1}
          />
        </Fragment>
      )}
    </Container>
  );
};

/*
 * PropTypes
 */
LeftPanel.propTypes = {
  code: PropTypes.object,
  context: PropTypes.string,
  example: PropTypes.string,
  expected: PropTypes.string,
  hasGiveUp: PropTypes.bool,
  handleChange: PropTypes.func,
  language: PropTypes.string.isRequired,
  value: PropTypes.string,
  large: PropTypes.bool.isRequired,
};

LeftPanel.defaultProps = {
  code: {},
  example: '',
  expected: '',
  handleChange: () => {},
  hasGiveUp: false,
  value: '',
  context: '',
};

/*
 * Export
 */
export default LeftPanel;
