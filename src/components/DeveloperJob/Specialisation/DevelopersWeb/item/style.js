/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, weights, colors } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div(
  ({ isEven }) => ({
    background: isEven ? colors.lightGrey : colors.white,
  }),
  {
    position: 'relative',

    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      padding: '0 2em',
    },
    [minWidth(breakpoints.xlarge)]: {
      padding: '0 4em',
    },
  },
);

/*
 * Content
 */
export const Article = styled.div(({ align, isEven, hasLosange }) => ({
  ...base.itemContainer(align, isEven, hasLosange),
  maxWidth: 1400,
  margin: 'auto',
}));

export const Content = styled.div({
  margin: 'auto',
  padding: '0 1em',
  width: '100%',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '2em',
  },

  [minWidth(breakpoints.xlarge)]: {
    ':first-child': {
      width: '200%',
    },
  },
});

export const Text = styled.p({
  ...base.mainText,
});

export const Image = styled.img({
  ...base.image,
  margin: '1em auto',
  maxHeight: '300px',
  padding: '2em',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    alignSelf: 'center',
  },

  [minWidth(breakpoints.large)]: {
    maxHeight: '400px',
    padding: 0,
  },

  [minWidth(breakpoints.xxlarge)]: {
    maxHeight: '450px',
  },

  [minWidth(breakpoints.xxxlarge)]: {
    maxHeight: '500px',
  },
});

/*
 * Title
 */
export const ThirdTitle = styled.h3(({ align }) => ({
  ...base.secondaryTitle(align),
  letterSpacing: 0,
}));

export const Description = styled.span(
  {
    display: 'block',
    fontSize: '1.1em',
    fontWeight: weights.bold,
    paddingBottom: '1em',
  },
  ({ align }) => ({
    textAlign: align,
  }),
);
