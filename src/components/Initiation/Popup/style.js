/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import { animation, breakpoints, colors, maxWidth, weights } from 'src/themes';

// Assets
import check from 'src/assets/images/initiation/Check.svg';
import cross from 'src/assets/images/initiation/Cross.svg';

/*
 * Code
 */
const data = {
  success: {
    image: check,
    color: '#53d9a9',
  },
  fail: {
    image: cross,
    color: '#eb6564',
  },
};

/*
 * Style
 */
export const Container = styled.div({
  background: 'rgba(0, 0, 0, .75)',
  color: colors.white,

  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  zIndex: 20,
});

export const Close = styled.div({
  animation: `${keyframes(animation.popIn)} .2s .8s both`,
  color: 'rgba(255, 255, 255, .5)',
  cursor: 'pointer',
  position: 'absolute',
  top: '2em',
  right: '2em',
  transition: '.2s',

  // States
  ':hover, :focus': {
    color: '#FFFFFF',
  },

  // Pseudo-elements
  '::before': {
    content: '"✕"',
  },
});

export const Content = styled.div(
  {
    animation: `.2s .2s ${keyframes(animation.fadeScaleIn)} both`,
    background: colors.lightGrey,
    borderRadius: 3,
    position: 'absolute',
    left: '30%',
    right: '30%',
    top: '30%',
    bottom: '30%',
    margin: '0 auto',
  },
  ({ status }) =>
    status && {
      '> p': {
        background: data[status].color,
        fontSize: '1.7em',
        marginTop: '1.5em',
        textAlign: 'center',
      },
    },
);

export const Img = styled.div(({ status }) => ({
  backgroundImage: `url(${data[status].image})`,
  backgroundSize: 'cover',
  display: 'block',
  margin: '2em auto 1em',
  width: 60,
  height: 60,

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    width: 40,
    height: 40,
  },
}));

// export const Text = styled.span(
//   {
//     textAlign: 'center',
//     margin: '8% auto',
//     fontSize: '1.7em',
//
//     color: 'white',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//
//     // Breakpoints
//     [maxWidth(breakpoints.xlarge)]: {
//       fontSize: '1em',
//     },
//   },
//   ({ status }) => status && { background: data[status].color },
// );

export const Buttons = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

// export const Text = styled.span({
//   // @TODO : Factoriser avant de supprimer
//   textAlign: 'center',
//   fontSize: '1.7em',
//   textTransform: 'uppercase',
//   letterSpacing: '1px',

//   margin: '8% auto',
//   color: 'white',

//   // Breakpoints
//   [maxWidth(breakpoints.xlarge)]: {
//     fontSize: '1em',
//   },

//   // Pseudo-elements
//   '::before': {
//     content: '✕',
//   },
// });

export const ButtonGiveUp = styled.button({
  width: 'fit-content',
  padding: '0.2em 0.4em',
  color: colors.explanation,
  fontWeight: weights.medium,
  fontSize: '1.2em',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    width: 'fit-content',
    fontSize: '1em',
  },
});

export const PathTo = styled(Link)({
  width: 'fit-content',
  padding: '0.2em 0.4em',
  color: colors.mainColor,
  fontWeight: 'semi-bold',
  fontSize: '1.2em',
  display: 'inline-block',
  textAlign: 'center',
});

/*
 * Shared style • Initiation components
 */

// Popup buttons
export const PopupButton = {
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: weights.medium,
  fontSize: '1.5em',
  // fontFamily: 'Nunito',
  margin: '2.5em 1em',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    fontSize: '1em',
    padding: '.5em 1em',
  },
};
