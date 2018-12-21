/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, weights, colors } from 'src/themes';

/*
 * Code
 */
export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 1100,
  margin: '4em auto 5em',
});

export const Subtitle = styled.h3({
  fontSize: '1.25em',
  fontWeight: weights.semiBold,
  marginBottom: '.5em',
  textAlign: 'center',
  padding: '0 2em',

  // Breakpoints
  [minWidth(breakpoints.large)]: {
    fontSize: '1.5em',
  },
});

export const List = styled.ul({
  padding: '0 .5em 0 1.5em',
  fontSize: '1.1em',
  width: '100%',
  maxWidth: 670,
  margin: 'auto',
});

export const Item = styled.li({
  margin: '.7em 0',

  // Link
  a: base.link,

  // Circle
  '::before': {
    content: '""',
    display: 'inline-block',
    width: 10,
    height: 10,
    borderRadius: '100%',
    border: `2px solid ${colors.mainColor}`,
    marginRight: '.75em',
  },
});

export const BoxContainer = styled.div({
  alignItems: 'center',
  background: colors.lightGrey,
  display: 'flex',
  flexDirection: 'column',
  padding: '4em 0',
  position: 'relative',
});

export const BoxTitle = styled.h2(base.boxTitle);
