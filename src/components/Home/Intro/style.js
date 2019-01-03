/* eslint-disable max-len */

/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import boom from 'src/assets/images/Home/boom.svg';
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  fontFamily: 'Encode Sans Condensed',
  textAlign: 'center',
  marginBottom: '8em',

  position: 'relative',
  '::before, ::after': {
    content: '""',
    backgroundImage: `url(${boom})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0 15%',
    backgroundSize: '60%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
    zIndex: -1,
  },
  '::before': {
    left: 0,
  },
  '::after': {
    right: 0,
    transform: 'scaleX(-1)',
  },

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    '::before, ::after': {
      width: '40%',
      backgroundPosition: '60% 5%',
    },
  },
  [minWidth(breakpoints.medium)]: {
    paddingTop: '2em',
    '::before, ::after': {
      width: '30%',
      backgroundPosition: '0 50%',
    },
  },
  [minWidth(breakpoints.large)]: {
    paddingTop: '3em',
    '::before, ::after': {
      backgroundPosition: '0 40%',
    },
  },
  [minWidth(breakpoints.xlarge)]: {
    '::before, ::after': {
      backgroundPosition: '50% 25%',
    },
  },
  [minWidth(breakpoints.xxlarge)]: {
    '::before, ::after': {
      backgroundPosition: '75% 25%',
    },
  },
});

/*
 * Texte Punchline
 */
export const Title = styled.h1({
  // Text
  letterSpacing: '.05em',
  textTransform: 'uppercase',
  margin: 'auto',
  maxWidth: 300,
  padding: '2em 0',
  textShadow:
    '-4px -2px #fff, -4px 0 #fff, -4px 2px #fff, -2px -2px #fff, -2px 0 #fff, -2px 2px #fff, 0 -2px #fff, 0 2px #fff, 2px -2px #fff, 2px 0 #fff, 2px 2px #fff, 4px -2px #fff, 4px 0 #fff, 4px 2px #fff',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    fontSize: '1.1em',
  },
  [minWidth(breakpoints.medium)]: {
    fontSize: '1.5em',
    maxWidth: 'none',
  },
  [minWidth(breakpoints.large)]: {
    fontSize: '1.75em',
  },
  [minWidth(breakpoints.xlarge)]: {
    fontSize: '2em',
  },
  [minWidth(breakpoints.xxlarge)]: {
    paddingBottom: '1em',
  },
});

export const Text = styled.div({
  margin: 'auto',
  maxWidth: '65%',
  letterSpacing: 0,
  lineHeight: 1.5,
});

export const Punchline = styled.div({
  color: colors.mainColor,
  fontSize: '2em',
  fontWeight: weights.black,
  letterSpacing: '.08em',
});

/*
 * Title
 */
export const Introduction = styled.p({
  ...base.mainText,
  maxWidth: '36.5em',
  margin: 'auto',
  textAlign: 'center',
  padding: '0 1em',
  backgroundColor: colors.white,

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '0',
    fontSize: '1.15em',
  },
  [minWidth(breakpoints.large)]: {
    fontSize: '1.4em',
  },
});

export const Site = styled.span({
  color: colors.mainColor,
  fontWeight: weights.bold,
});
