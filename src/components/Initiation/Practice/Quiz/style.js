/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import {
  base,
  breakpoints,
  colors,
  minWidth,
  maxWidth,
  weights,
} from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1em',
  fontSize: '1.1em',
  display: 'flex',
  flexDirection: 'column',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '0 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

export const Parcours = styled.h1({
  ...base.primaryTitle,
  textAlign: 'center',
});

/*
 * Header
 */
export const Header = styled.div({
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',
  padding: '2em 1em',
  textAlign: 'center',
});

export const Title = styled.h2({
  fontSize: '2em',
  fontWeight: weights.medium,
  marginBottom: '.5em',
  textTransform: 'uppercase',

  // Traits
  '::before, ::after': {
    background: colors.mainColor,
    borderRadius: 5,
    content: '""',
    display: 'inline-block',
    margin: '0 .3em',
    verticalAlign: 'middle',
    height: 3,
    maxWidth: '15%',
    minWidth: 15,
  },

  '::before': {
    marginLeft: '.25em',
  },

  '::after': {
    marginRight: '.25em',
  },

  // Breakpoints
  [minWidth(breakpoints.xsmall)]: {
    '::before, ::after': {
      margin: '0 .55em',
      minWidth: 25,
    },
  },

  [minWidth(breakpoints.small)]: {
    '::before, ::after': {
      margin: '0 .75em',
      minWidth: 50,
    },
  },

  [minWidth(breakpoints.medium)]: {
    '::before, ::after': {
      margin: '0 .75em',
      minWidth: 70,
    },
  },
});

export const Description = styled.p({
  fontWeight: weights.light,
  textTransform: 'uppercase',
});

/*
 * Form
 */
export const Form = styled.form({
  margin: '1em auto',
  maxWidth: 960,
});

export const ContainerButton = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2em',

  // Breakpoints
  [maxWidth(breakpoints.small)]: {
    alignItems: 'center',
  },

  [minWidth(breakpoints.small)]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export const Button = styled.button(({ isDisabled }) => {
  let inactiveButton;

  if (isDisabled) {
    inactiveButton = {
      opacity: '0.4',
      cursor: 'default',
      '::before': {
        content: 'none',
      },
    };
  }

  return {
    ...base.primaryButton,
    ...inactiveButton,
    margin: '1em 2em',
  };
});

/*
 * Result
 */
export const Back = styled.button({
  color: colors.greyLink,
  display: 'block',
  margin: '2.5em auto',
  cursor: 'pointer',
  fontWeight: weights.medium,
  fontSize: '1.5em',

  // Breakpoints
  [minWidth(breakpoints.xlarge)]: {
    fontSize: '1em',
    padding: '.5em 1em',
  },
});
