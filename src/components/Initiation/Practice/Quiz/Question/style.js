/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, minWidth, maxWidth, weights } from 'src/themes';

// Assets
import check from 'src/assets/images/initiation/Check.svg';
import cross from 'src/assets/images/initiation/Cross.svg';

/*
 * Style
 */
export const Container = styled.div({
  margin: '4em auto',
  maxWidth: '32em',

  // Breakpoints
  [maxWidth(breakpoints.l)]: {
    margin: '3em auto',
  },

  [maxWidth(breakpoints.s)]: {
    margin: '2em auto',
  },
});

export const Header = styled.div({
  alignItems: 'center',
  display: 'flex',
  position: 'relative',
  paddingBottom: '.5em',
});

export const Question = styled.p({
  fontSize: '1.1em',
  fontWeight: weights.bold,
});

export const Icon = styled.i(
  {
    display: 'none',
  },
  ({ hasGood }) => ({
    backgroundImage: `url(${hasGood ? check : cross})`,
    display: 'block',
    backgroundSize: 'cover',
    marginRight: '.75em',
    height: 20,
    minWidth: 20,
    position: 'absolute',
    left: '-1.75em',

    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      left: '-2.5em',
      height: 25,
      minWidth: 25,
    },

    [minWidth(breakpoints.xlarge)]: {
      left: '-3em',
      height: 30,
      minWidth: 30,
    },
  }),
);

export const Explanation = styled.p(({ hasGood }) => ({
  color: hasGood ? colors.correct : colors.wrong,
  fontStyle: 'italic',
}));

export const Answers = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
