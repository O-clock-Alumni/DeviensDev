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
  padding: '1em 1em',
  textAlign: 'left',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '1em 1.5em',
    textAlign: 'center',
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

export const Link = styled.a({
  ...base.link,
});
