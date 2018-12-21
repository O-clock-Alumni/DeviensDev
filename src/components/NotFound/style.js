/*
 * Package Import
 */
import { Link } from 'gatsby';
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
  fontSize: '5em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    fontSize: '5em',
  },
  [minWidth(breakpoints.medium)]: {
    fontSize: '5em',
  },
  [minWidth(breakpoints.xlarge)]: {
    fontSize: '5em',
  },
});

export const Container = styled.div({
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
  padding: '.25em 1em',
  textAlign: 'center',
  maxWidth: 720,
  margin: 'auto',
});

export const Bold = styled.strong({
  display: 'block',
  fontWeight: weights.bold,
});

export const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const Button = {
  ...base.primaryButton,
  margin: '3em 2em 0',
};

export const ButtonWithLink = styled(Link)({
  ...Button,
});

export const ButtonWithoutLink = styled.a({
  ...Button,
});
