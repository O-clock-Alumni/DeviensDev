/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Intro Style
 */
export const IntroContainer = styled.div({
  ...base.introContainer,
});

export const Title = styled.h1({
  ...base.primaryTitle,
});

/*
 * Construction Style • @TEMP
 */
export const ConstructionContainer = styled.div({
  background: colors.lightGrey,
  padding: '3em 1em',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '2em 0',
  },

  [minWidth(breakpoints.xlarge)]: {
    padding: '4em 0',
  },
});

export const Text = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

export const Bold = styled.strong({
  display: 'block',
  fontWeight: weights.bold,
});

export const Button = styled.a({
  ...base.primaryButton,
  display: 'block',
  margin: '3em auto 0',
});
