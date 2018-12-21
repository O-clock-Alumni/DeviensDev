/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, minWidth, maxWidth } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  position: 'relative',
});

export const Item = styled.div(({ align, isEven }) => ({
  maxWidth: isEven ? 'inherit' : breakpoints.huge,
  margin: isEven ? 'inherit' : '0 auto',
  ...base.itemContainer(align, isEven, true),
  ':first-child': {
    padding: '0 0 4em 0',
  },

  [minWidth(breakpoints.xsmall)]: {
    // To target couronne only
    ':last-child': {
      paddingTop: '3em',
    },
    ':last-child img': {
      maxWidth: '85%',
    },
  },
  [minWidth(breakpoints.small)]: {
    // To target couronne only
    ':last-child img': {
      maxWidth: '70%',
    },
  },
  [minWidth(breakpoints.medium)]: {
    // To target couronne only
    ':last-child img': {
      maxWidth: '60%',
    },
  },
  [minWidth(breakpoints.large)]: {
    // To target couronne only
    ':last-child img': {
      maxWidth: '75%',
    },
  },
  [minWidth(breakpoints.xxlarge)]: {
    // To target tableOrdi only
    ':first-child img': {
      maxWidth: '500px',
      padding: '0',
    },
    // To target wood sticks only
    ':nth-child(2n)': {
      paddingTop: '6em',
    },
    // To target couronne only
    ':last-child img': {
      maxWidth: '500px',
      padding: '0',
    },
  },
}));

export const Content = styled.div({
  margin: 'auto',
  maxWidth: 700,
  padding: '0 1em',
  width: '100%',
  [minWidth(breakpoints.large)]: {
    // To target texts & button
    ':first-child': {
      padding: '0 4em',
    },
  },
});

export const Title = styled.h2(({ align }) => {
  const isUppercase = true;

  return {
    ...base.secondaryTitle(align, isUppercase),

    [maxWidth(breakpoints.xlarge)]: {
      textAlign: 'center',
    },
  };
});

export const Text = styled.p(
  {
    ...base.mainText,
    textAlign: 'center',
  },
  ({ align }) => ({
    [minWidth(breakpoints.xlarge)]: {
      textAlign: align,
    },
  }),
);

export const Button = styled(Link)(({ align }) => ({
  ...base.primaryButton,
  float: align,
  [maxWidth(breakpoints.xlarge)]: {
    float: 'none',
    display: 'block',
  },
}));

export const Image = styled.img({
  ...base.image,
  padding: '0 2em 1em',
  [minWidth(breakpoints.xlarge)]: {
    padding: '2em',
  },
});
