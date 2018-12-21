/*
 * Package Import
 */
import styled from 'react-emotion';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, weights } from 'src/themes';

// Assets

/*
 * Style
 */
export const Container = styled.div({
  padding: '.75em 2em',

  [minWidth(breakpoints.medium)]: {
    paddingLeft: '3em',
  },
});

export const Score = styled.strong({
  textAlign: 'center',
  fontSize: '2em',
  display: 'block',
  fontWeight: weights.bold,
});

export const Title = styled.h2({
  ...base.secondaryTitle('center', false),
  fontWeight: weights.bold,
  margin: '1em auto',
});

export const Text = styled.div({
  ...base.mainText,
  textAlign: 'center',
  padding: '.25em 0',
});

export const Bold = styled.strong({
  ...base.bold,
});

export const ButtonList = styled.div({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: breakpoints.medium,
  margin: '3em auto 0',
});

export const Button = styled(Link)({
  ...base.primaryButton,
});
