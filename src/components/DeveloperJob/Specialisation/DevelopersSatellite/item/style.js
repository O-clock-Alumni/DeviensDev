/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  background: colors.lightGrey,

  position: 'relative',

  // Breakpoints
  [minWidth(breakpoints.xlarge)]: {
    '> div': {
      '> div:nth-child(1)': {
        width: '75%',
      },
    },
  },
});

export const Subtitle = styled.h2({
  ...base.boxTitle,
});

export const Article = styled.div(({ align }) => {
  const isEven = true;
  const style = base.itemContainer(align, isEven);

  return {
    ...style,
    padding: '0 1em',

    // Breakpoints
    [minWidth(breakpoints.xlarge)]: {
      ...style[minWidth(breakpoints.xlarge)],
      padding: '0 1em',
    },
    [minWidth(breakpoints.xxlarge)]: {
      padding: '2em 1em',
    },
    [minWidth(breakpoints.huge)]: {
      maxWidth: breakpoints.huge,
      margin: 'auto',
    },
  };
});

export const Content = styled.div({
  margin: 'auto',
  padding: '2em 1em',
  width: '100%',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '2em',
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
  },

  [minWidth(breakpoints.xxlarge)]: {
    maxHeight: '450px',
    padding: 0,
  },

  [minWidth(breakpoints.xxxlarge)]: {
    maxHeight: '500px',
  },
});

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
