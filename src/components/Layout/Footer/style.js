/*
 * Package Import
 */
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import {
  animation,
  breakpoints,
  colors,
  maxWidth,
  minWidth,
  weights,
} from 'src/themes';

// Assets
import pixelHeart from 'src/assets/images/momentum/pixel-heart.svg';
import heart from 'src/assets/images/common/heart.svg';

/*
 * Keyframes
 */
const shakeLong = keyframes(animation.shakeLong);

/*
 * Style
 */
export const Container = styled.footer({
  alignItems: 'center',
  display: 'flex',
  fontFamily: 'Encode Sans Condensed',
  flexDirection: 'column',
  justifyContent: 'space-around',
  margin: '0 auto',
  padding: '4em 0 2em',
  position: 'relative',

  // Breakpoints
  [maxWidth(breakpoints.medium)]: {
    // Dot...
    '::before': {
      color: colors.mainColor,
      content: '"..."',
      display: 'block',
      textAlign: 'center',
      letterSpacing: '.2em',
      fontSize: '4em',
      lineHeight: 0,
      position: 'absolute',
      top: '10%',
      left: '50%',
      transform: 'translate(-50%)',
    },
  },
});

export const Nav = styled.ul({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    flexDirection: 'row',
  },
});

export const Item = styled.li({
  height: 26,
  lineHeight: '26px',
  textTransform: 'uppercase',
  position: 'relative',

  a: {
    letterSpacing: '.04em',
    borderBottom: '1px solid transparent',
  },

  // Border
  ':hover, :focus': {
    cursor: 'pointer',

    a: {
      borderColor: colors.mainColor,
    },
  },

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '0 1em',

    // Dot...
    '::before': {
      content: '""',
      background: colors.mainColor,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translate(50%, -50%)',
      height: 5,
      width: 5,
    },

    // Hide the last one
    ':last-of-type::before': {
      content: 'none',
    },
  },
});

export const Copyright = styled.a({
  display: 'flex',
  fontWeight: weights.light,
  marginTop: '1em',

  // ❤️
  '::after': {
    content: '""',
    backgroundImage: `url(${heart})`,
    backgroundSize: 'cover',
    margin: '0 .2em',
    height: 22,
    width: 25,
  },

  div: {
    borderBottom: '1px solid transparent',
    display: 'flex',
    alignItems: 'center',
  },

  ':hover, :focus': {
    div: {
      borderColor: colors.pink,
    },
  },
});

export const Strong = styled.strong({
  fontWeight: weights.medium,
  margin: '0 0.2em',
});

// Momentum
export const Momentum = styled.div`
  background: linear-gradient(to bottom, #25ddd2, #1bb64d);
  height: 12em;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: ${weights.semiBold};
  text-align: center;
  padding: 1em;
  font-size: 1.1em;
`;

// ❤️
export const Heart = styled.span`
  ::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: 0 auto -0.25em;

    /* Illutrations */
    background-image: url(${pixelHeart});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    /* Animation */
    animation: 6s 1s ${shakeLong} both infinite;
  }
`;

export const CTA = styled.a`
  /* Base */
  border-radius: 2em;
  display: inline-block;
  font-size: 1rem;
  font-weight: ${weights.bold};
  letter-spacing: .12em;
  padding: 1em 2em;
  position: relative;
  text-transform: uppercase;
  transition: .2s;

  /* Main */
  border-bottom: .3em solid;
  min-width: 10em;

  /* Override */
  background: ${colors.white};
  border-color: #007c22;
  color: #00b231;
  text-shadow: none;
  margin-top: 1em;

  /* @medias */
  ${maxWidth(breakpoints.small)} {
    padding: 1em 1.5em;
  },

  ${maxWidth(breakpoints.xsmall)} {
    letter-spacing: .06em;
    padding-left: 1em;
    padding-right: 1em;
  },
`;
