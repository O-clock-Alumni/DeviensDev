/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-syntax-highlighter';
import { atelierCaveLight as style } from 'react-syntax-highlighter/styles/hljs';

/*
 * Local Import
 */
import { colors } from 'src/themes';

/*
 * Component
 */
const Highlight = ({ code, language, startLine }) => {
  const options = {
    language,
    style: {
      ...style,
      hljs: {
        ...style.hljs,
        background: colors.lightGrey,
      },
    },
  };
  const lines = code.trim().split(/\r\n|\r|\n/).length;

  if (lines > 0) {
    options.showLineNumbers = true;
    options.lineNumberContainerStyle = {
      textAlign: 'right',
      float: 'left',
      paddingRight: '10px',
      minWidth: '30px',
    };
    options.lineNumberStyle = {
      color: colors.grey,
    };
  }
  if (startLine) {
    options.startingLineNumber = startLine;
  }

  options.customStyle = {
    padding: 0,
    paddingLeft: '.5em',
  };

  // View
  return <Highlighter {...options}>{code}</Highlighter>;
};

/*
 * PropTypes
 */
Highlight.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  startLine: PropTypes.number,
};

Highlight.defaultProps = {
  startLine: null,
};

/*
 * Export
 */
export default Highlight;
