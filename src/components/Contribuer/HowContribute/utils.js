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
  const parts = str.split(/[%]/);

  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = <Code key={i}>{parts[i]}</Code>;
  }

  return parts;
};
