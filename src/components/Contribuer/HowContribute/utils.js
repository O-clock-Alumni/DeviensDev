/*
 * Local Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Code } from './style';

/**
 * Translate
 * @param  {String} str
 * @return {Array}
 */
export const translate = str => {
  if (typeof str === 'string') {
    const parts = str.split(/[%]/);

    for (let i = 1; i < parts.length; i += 2) {
      parts[i] = <Code key={i}>{parts[i]}</Code>;
    }

    return parts;
  }

  return str;
};
