/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import {
  base,
  colors,
  breakpoints,
  minWidth,
  maxWidth,
  weights,
} from 'src/themes';

/*
 * Style
 */
export const Header = styled.div({
  background: colors.lightGrey,
  position: 'relative',
  padding: '3.5em 1em 4.5em',
  zIndex: '5',
});

export const Text = styled.p({
  ...base.mainText,
  maxWidth: 1100,
  margin: '0 auto',
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

export const Subtitle = styled.h2({
  ...base.boxTitle,
});

export const Jungle = styled.div({
  paddingBottom: '6em',
  img: {
    display: 'block',
    margin: 'auto',
    maxWidth: 800,
    position: 'relative',
    top: '-20px',
    width: '100%',
  },
});

export const JungleTitle = styled.div({
  ...base.secondaryTitle('center', true),
  fontSize: '1.5em',
  [maxWidth(breakpoints.small)]: {
    fontSize: '1.25em',
  },
});

export const JungleText = styled.div({
  ...base.mainText,
  textAlign: 'center',
  margin: 'auto',
  maxWidth: 650,
  padding: '0.25em 2em 1.5em',
});

export const Bold = styled.strong({
  fontWeight: weights.bold,
});
