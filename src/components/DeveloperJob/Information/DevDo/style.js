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
  textAlign: 'center',

  // Horizontal Line
  '::after': {
    content: '""',
    display: 'block',
    width: 110,
    height: 3,
    margin: 'auto',
    borderRadius: 3,
    background: colors.mainColor,
  },
});

export const Header = styled.div({
  background: colors.lightGrey,
  position: 'relative',
  padding: '3.5em 1em 4em',
});

export const Title = styled.h2({
  ...base.boxTitle,
});

export const Text = styled.p({
  ...base.mainText,
  textAlign: 'left',
  maxWidth: 1100,
  margin: '0 auto',
  padding: '1em 1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '1em 1.5em',
  },

  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
    textAlign: 'center',
  },

  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

export const Timeline = styled.div({
  maxWidth: '1600px',
  margin: 'auto',
  position: 'relative',
  padding: '4em 0',
});

export const Line = styled.div({
  display: 'none',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: '50%',
  background: '#e9e9e9',
  margin: '100px 0',
  width: 2,
  zIndex: 1,

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    display: 'block',
  },
});
