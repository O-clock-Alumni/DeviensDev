/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, maxWidth, minWidth, weights } from 'src/themes';
import heart from 'src/assets/images/common/heart.svg';

/*
 * Style
 */
export const Container = styled.footer({
  alignItems: 'center',
  display: 'flex',
  fontFamily: 'EncodeSansCondensed',
  flexDirection: 'column',
  justifyContent: 'space-around',
  margin: '0 auto',
  padding: '4em 0 2em',
  position: 'relative',

  // Breakpoints
  [maxWidth(breakpoints.medium)]: {
    // Dot...
    '::before': {
      color: colors.mainColor,
      content: '"..."',
      display: 'block',
      textAlign: 'center',
      letterSpacing: '.2em',
      fontSize: '4em',
      lineHeight: 0,
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translate(-50%)',
    },
  },
});

export const Nav = styled.ul({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    flexDirection: 'row',
  },
});

export const Item = styled.li({
  height: 26,
  lineHeight: '26px',
  textTransform: 'uppercase',
  position: 'relative',

  a: {
    letterSpacing: '.04em',
    borderBottom: '1px solid transparent',
  },

  // Border
  ':hover, :focus': {
    cursor: 'pointer',

    a: {
      borderColor: colors.mainColor,
    },
  },

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '0 1em',

    // Dot...
    '::before': {
      content: '""',
      background: colors.mainColor,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translate(50%, -50%)',
      height: 5,
      width: 5,
    },

    // Hide the last one
    ':last-of-type::before': {
      content: 'none',
    },
  },
});

export const Copyright = styled.a({
  display: 'flex',
  fontWeight: weights.light,
  marginTop: '1em',

  // ❤️
  '::after': {
    content: '""',
    backgroundImage: `url(${heart})`,
    backgroundSize: 'cover',
    margin: '0 .2em',
    height: 22,
    width: 25,
  },

  div: {
    borderBottom: '1px solid transparent',
    display: 'flex',
    alignItems: 'center',
  },

  ':hover, :focus': {
    div: {
      borderColor: colors.pink,
    },
  },
});

export const Strong = styled.strong({
  fontWeight: weights.medium,
  margin: '0 0.2em',
});
