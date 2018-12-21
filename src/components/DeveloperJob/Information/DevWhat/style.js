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
  margin: '6em auto',
  textAlign: 'center',
});

export const Header = styled.div({
  background: colors.lightGrey,
  position: 'relative',
  padding: '3.5em 1em 4em',
});

export const Content = styled.div({
  padding: '2em 0',
});

export const Subtitle = styled.h2({
  ...base.boxTitle,
});

export const Text = styled.p({
  ...base.mainText,
  textAlign: 'left',
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

export const Picture = styled.picture({
  textAlign: 'center',
  margin: '3em 0',

  img: {
    maxHeight: 260,
    maxWidth: '100%',
  },
});
