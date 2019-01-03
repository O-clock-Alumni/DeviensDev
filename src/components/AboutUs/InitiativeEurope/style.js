/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, weights } from 'src/themes';

/*
 * Styled
 */
export const Baseline = styled.div({
  textAlign: 'center',
  padding: '4em 1em 1em',
  maxWidth: 500,
  margin: 'auto',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    paddingBottom: '4em',
  },

  [minWidth(breakpoints.xlarge)]: {
    paddingTop: '6em',
  },

  [minWidth(breakpoints.xxlarge)]: {
    maxWidth: 540,
  },
});

export const Title = styled.h2({
  fontSize: '1.25em',
  fontFamily: 'Encode Sans Condensed',
  fontWeight: weights.bold,
  lineHeight: 1.5,
});

export const Text = styled.span({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

/*
 * Logos
 */
export const Logos = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto',
  maxWidth: 1200,
});

export const Logo = styled.picture({
  margin: 'auto',
});

export const Image = styled.img({
  maxWidth: 200,
  padding: '1em',
  width: '100%',
});
