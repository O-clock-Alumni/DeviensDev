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
  betweenWidth,
  colors,
  minWidth,
  weights,
} from 'src/themes';

/*
 * Intro Style
 */
export const Title = styled.h1({
  ...base.primaryTitle,
});

export const IntroContainer = styled.div({
  ...base.introContainer,
});

export const Bold = styled.strong({
  display: 'block',
  fontWeight: weights.bold,
});

/*
 * Courses Style
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

export const Courses = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  margin: '0 auto',
  maxWidth: 1600,
});

/*
 * Cards Style
 */
export const Card = styled.li({
  padding: '0 1em',
  margin: '1em 0',
  maxWidth: 360,
  width: '100%',

  // Breakpoints

  [minWidth(breakpoints.medium)]: {
    width: '50%',
  },

  [minWidth(breakpoints.xlarge)]: {
    width: '25%',
  },
});

export const Box = styled(Link)(
  {
    background: colors.white,
    boxShadow: '0 2px 0 rgba(0, 0, 0, .06)',
    borderRadius: '4px 4px 0 0',
    cursor: 'pointer',
    display: 'block',
    minHeight: 200,
    padding: '4em 2em 1em',
    position: 'relative',
    textAlign: 'center',

    // Breakpoints
    [minWidth(breakpoints.medium)]: {
      maxWidth: 265,
    },
    [minWidth(breakpoints.xlarge)]: {
      minHeight: 230,
      margin: 'auto',
    },
  },
  ({ isEven }) =>
    isEven && {
      // Breakpoints
      [betweenWidth(breakpoints.medium, breakpoints.xlarge)]: {
        marginLeft: 'auto',
      },
    },
  ({ empty }) =>
    !empty && {
      ...base.greenEffect('h2', 'h2::before'),
    },
  ({ hover, empty }) =>
    !empty && {
      ':hover, :focus': {
        'p::before': {
          content: '""',
          display: 'block',
          width: '3em',
          height: '3.1em',
          background: `url(${hover})`,
          backgroundRepeat: 'no-repeat',
          margin: '1em auto',
          backgroundSize: '100%',
        },
      },
    },
);

export const Header = styled.h2(
  {
    background: colors.mainColor,
    borderRadius: '4px 4px 0 0',
    color: colors.white,
    fontSize: '1.2em',
    fontWeight: weights.bold,
    fontFamily: 'EncodeSansCondensed',
    height: 50,
    letterSpacing: '.035em',
    lineHeight: '50px',
    position: 'absolute !important',
    top: 0,
    left: 0,
    right: 0,
  },
  ({ empty }) =>
    empty && {
      background: colors.grey,
    },
);

export const Stage = styled.h2({
  borderRadius: '4px 4px 0 0',
  color: colors.white,
  fontSize: '1.5em',
  fontFamily: 'EncodeSansCondensed',
  fontWeight: weights.bold,
  letterSpacing: '0.06em',
  textAlign: 'center',
});

export const Description = styled.p(
  {
    textAlign: 'center',
    paddingTop: 0,
  },
  ({ icon }) =>
    icon && {
      '&::before': {
        content: '""',
        display: 'block',
        width: '3em',
        height: '3.1em',
        background: `url(${icon})`,
        backgroundRepeat: 'no-repeat',
        margin: '1em auto',
        backgroundSize: '100%',
        zIndex: '1',
      },
    },
);

/*
 * Outro Style
 */
export const OutroContainer = styled.div({
  ...base.outroContainer,
});

export const WantMore = styled.h2({
  ...base.wantMore,
});

export const TextIntro = styled.p({
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

export const Text = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

export const Button = styled(Link)({
  ...base.primaryButton,
  display: 'block',
  margin: '1.5em auto 5em',
});
