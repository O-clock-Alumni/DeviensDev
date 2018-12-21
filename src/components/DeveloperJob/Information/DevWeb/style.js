/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  background: colors.lightGrey,
  position: 'relative',
  padding: '3.5em 1em 3em',
});

export const Bold = styled.strong({
  ...base.bold,
});

export const Title = styled.h2({
  ...base.boxTitle,
});

export const Text = styled.p({
  ...base.mainText,
  textAlign: 'left',
  maxWidth: 1100,
  margin: '0 auto 1em',
  padding: '0 1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '0 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
    textAlign: 'center',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});
