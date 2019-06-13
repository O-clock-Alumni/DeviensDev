/*
 * Package Import
 */
import { Link } from 'gatsby';
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
export const IntroContainer = styled.div({
  ...base.introContainer,
});

export const SubContainer = styled.div({
  ...base.introContainer,

  // Line
  '::after': {
    background: colors.mainColor,
    borderRadius: 5,
    content: '""',
    display: 'block',
    height: '2px',
    margin: '2em auto 4em',
    width: '6em',
  },
});

export const Title = styled.h1({
  ...base.primaryTitle,
});

export const Baseline = styled.p({
  ...base.mainText,
  textAlign: 'left',
  fontStyle: 'italic',
  margin: '0 auto 1em',
  padding: '0 1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '0 2em',
  },

  [minWidth(breakpoints.medium)]: {
    padding: '0 4em',
    textAlign: 'center',
  },
});

export const Text = styled.p({
  ...base.mainText,
  padding: '1em 1em',
  textAlign: 'left',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '1em 1.5em',
    textAlign: 'center',
  },

  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },

  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

/*
 * Cards
 */
export const CardsContainer = styled.div({
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

export const Items = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: 1600,
});

export const Card = styled.li({
  padding: '0 .75em',
  margin: '1em 0',
  maxWidth: 400,

  // Breakpoints
  [maxWidth(breakpoints.medium)]: {
    marginBottom: '1em',
    padding: '0 1.5em',
  },

  [minWidth(breakpoints.medium)]: {
    marginBottom: '1.5em',
    padding: '0 3em',
    width: '50%',
  },

  [minWidth(breakpoints.large)]: {
    width: '40%',
  },

  [minWidth(breakpoints.xlarge)]: {
    width: '35%',
  },
});

export const Box = styled(Link, {
  shouldForwardProp: prop => !['iconHover'].includes(prop),
})(
  {
    background: colors.white,
    borderRadius: '4px 4px 0 0',
    boxShadow: '0 2px 0 rgba(0, 0, 0, .06)',
    cursor: 'pointer',
    display: 'block',

    padding: '5em 1em 1em',
    position: 'relative',
    textAlign: 'center',
    height: '100%',

    // Animation
    ...base.greenEffect('h2', 'h2::before'),
  },
  ({ iconHover }) => ({
    [minWidth(breakpoints.medium)]: {
      ':hover, :focus': {
        'p::before': {
          content: '""',
          display: 'block',
          width: '3em',
          height: '3.1em',
          background: `url(${iconHover})`,
          backgroundRepeat: 'no-repeat',
          margin: '0 auto 1em',
          backgroundSize: '100%',
        },
      },
    },
  }),
);

export const Header = styled.h2({
  background: colors.mainColor,
  borderRadius: '4px 4px 0 0',
  color: colors.white,
  fontSize: '1.2em',
  fontWeight: weights.bold,
  fontFamily: 'Encode Sans Condensed',
  height: 50,
  letterSpacing: '.035em',
  lineHeight: '50px',
  position: 'absolute !important',
  top: 0,
  left: 0,
  right: 0,
});

export const Description = styled.p(
  {
    color: colors.darkGrey,
    marginBottom: '1em',
  },
  ({ icon }) =>
    icon && {
      '&::before': {
        content: '""',
        display: 'block',
        width: '3em',
        height: '3.1em',
        fill: 'red',
        background: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        margin: '0 auto 1em',
        backgroundSize: '100%',
      },
    },
);
