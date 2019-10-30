/*
 * Package Import
 */
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import { animation, breakpoints, colors, maxWidth, weights } from 'src/themes';

// Assets
import pixelHeart from 'src/assets/images/momentum/pixel-heart.svg';
import parchment from 'src/assets/images/momentum/parchemin.svg';
import logoLong from 'src/assets/images/momentum/logo-long.svg';

/*
 * Keyframes
 */
const shakeLong = keyframes(animation.shakeLong);
const fadeScaleIn = keyframes(animation.fadeScaleIn);

/*
 * Style
 */
export const Tab = styled.div`
  /* Design */
  background: ${colors.mainColor};
  border-bottom: 0.15em solid #b18b21;
  border-radius: 2em 0 0 2em;
  height: 2.15em;
  width: 2.7em;
  font-size: 1.75em;

  /* Position */
  position: fixed;
  right: -0.4em;
  top: 45%;
  z-index: 30;

  /* Illu */
  &::before {
    content: '';
    display: block;
    margin: 0.35em auto;
    background: url(${pixelHeart}) no-repeat;
    background-size: 100%;
    width: 1.3em;
    height: 1.3em;
  }

  /* Hover */
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    right: 0;
    animation: none;
  }

  /* Animation */
  animation: 6s 1s ${shakeLong} infinite;

  /* @medias */
  @media (max-width: ${breakpoints.large - 1}px),
    (max-height: ${breakpoints.small - 1}px) {
    display: none;
  }
`;

export const Container = styled.div`
  /* Base Overlay */
  margin: auto;
  animation: 0.2s 0.2s ${fadeScaleIn} both;

  /* Container */
  background: linear-gradient(180deg, #00e4e9, #00b231);
  max-width: ${breakpoints.xlarge - 1}px;
  padding: 2.5em;
  font-size: 1.25em;

  /* @medias */
  ${maxWidth(breakpoints.xlarge)} {
    padding: 4em 5em 3em;
    max-width: ${breakpoints.large - 1}px;
  }

  ${maxWidth(breakpoints.m)} {
    padding: 4em 2em 2.5em;
  }

  @media (max-width: ${breakpoints.small - 1}px),
    (max-height: ${breakpoints.small - 1}px) {
    height: 100vh;
    font-size: 0.9em;
  }
`;

export const Title = styled.div`
  font-weight: ${weights.black};
  letter-spacing: 0.08em;
  line-height: 1.1;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.8em;
  color: ${colors.white};
  margin: 0 -0.75em 0.5em;
  line-height: 3em;

  /* Parchemin 📜 */
  &::before {
    content: '';
    display: block;
    width: 25em;
    height: 3em;

    /* Illustration */
    background: url(${parchment}) no-repeat;
    background-position: center;
    background-size: 50%;

    /* Position */
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }

  /* @medias */
  ${maxWidth(breakpoints.large)} {
    margin-bottom: 0.25em;
  }

  @media (max-width: ${breakpoints.small - 1}px),
    (max-height: ${breakpoints.small - 1}px) {
    font-size: 1.6em;
  }
`;

export const Description = styled.div`
  text-align: center;

  p {
    color: ${colors.white};
    font-size: 0.9em;
    margin-bottom: 2em;
    line-height: 30px;
  }

  /* @medias */
  ${maxWidth(breakpoints.large)} {
    br {
      display: none;
    }
  }
`;

export const Heart = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    margin: 0 auto -0.25em;

    /* Illutrations */
    background: url(${pixelHeart}) no-repeat center;
    background-size: 100%;

    /* Animation */
    animation: 6s 1s ${shakeLong} both infinite;
  }
`;

export const Logo = styled.span`
  &::before {
    content: '';
    display: inline-block;
    width: 8em;
    height: 1.25em;
    margin: 0 auto -0.5em;

    /* Illutrations */
    background: url(${logoLong}) no-repeat center;
    background-size: 100%;
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
  margin-bottom: 2em;

  /* @medias */
  ${maxWidth(breakpoints.small)} {
    padding: 1em 1.5em;
  },

  ${maxWidth(breakpoints.xsmall)} {
    letter-spacing: .06em;
    padding-left: 1em;
    padding-right: 1em;
  },

  @media (max-width: ${breakpoints.small - 1}px),
    (max-height: ${breakpoints.small - 1}px) {
    font-size: .75em
  }
`;
