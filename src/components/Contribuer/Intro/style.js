/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  ...base.introContainer,
});

export const Title = styled.h1({
  ...base.primaryTitle,
});

export const Text = styled.p({
  ...base.mainText,
  textAlign: 'left',
  padding: '1em 1em',

  // Link
  a: {
    ...base.link,
  },

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    textAlign: 'center',
    padding: '1em 1.5em',
  },

  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },

  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

export const Strong = styled.span({
  fontWeight: weights.bold,
});
