/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  background: colors.lightGrey,
  fontFamily: 'Encode Sans Condensed',
  position: 'relative',
  padding: '3em 1.5em',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '4em 1.5em',
  },

  [minWidth(breakpoints.large)]: {
    padding: '6em 1.5em',
  },
});

export const Subtitle = styled.h2({
  ...base.boxTitle,
});

export const Party = styled.div({
  margin: '0 auto',
  maxWidth: 720,
  padding: '1em 0',

  [minWidth(breakpoints.large)]: {
    maxWidth: 960,
  },
});

export const ThirdTitle = styled.h3({
  fontSize: '1.5em',
  fontWeight: weights.bold,
});

export const Text = styled.span({
  ...base.mainText,
});
