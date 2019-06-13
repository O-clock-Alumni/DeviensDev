/*
 * Local Import
 */
import utils from './utils';
import { colors } from './colors';
import { weights } from './fonts';
import { breakpoints, minWidth } from './medias';

/*
 * Code
 */
const getDirection = {
  left: 'row',
  center: 'column',
  right: 'row-reverse',
};

/*
 * Base • Titles
 */
const primaryTitle = {
  fontSize: '2em',
  fontWeight: weights.black,
  fontFamily: 'Encode Sans Condensed',
  color: colors.mainColor,
  padding: '1em 0 .5em',
  textAlign: 'center',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    fontSize: '2.2em',
  },

  [minWidth(breakpoints.medium)]: {
    fontSize: '2.4em',
  },

  [minWidth(breakpoints.xlarge)]: {
    fontSize: '2.8em',
    padding: '1.5em 0 .75em',
  },
};

const secondaryTitle = (align = 'left', isUppercase = false) => ({
  fontSize: '2em',
  fontFamily: 'Encode Sans Condensed',
  fontWeight: weights.bold,
  letterSpacing: '.06em',
  textAlign: align,
  textTransform: isUppercase ? 'uppercase' : null,
});

const boxTitle = {
  background: colors.mainColor,
  color: colors.white,
  fontSize: '.9em',
  fontWeight: weights.semiBold,
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.06em',
  lineHeight: '2em',
  minHeight: '2em',
  padding: '.25em .5em',
  textTransform: 'uppercase',
  textAlign: 'center',
  width: '25em',
  zIndex: 2,

  // Position « à cheval » entre deux containers
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)',

  // Breakpoints
  [minWidth(breakpoints.xsmall)]: {
    fontSize: '.95em',
  },

  [minWidth(breakpoints.small)]: {
    fontSize: '1em',
    width: '27.5em',
  },

  [minWidth(breakpoints.medium)]: {
    fontSize: '1.05em',
    width: '30em',
  },

  [minWidth(breakpoints.large)]: {
    fontSize: '1.1em',
    width: '32.5em',
  },
};

/*
 * Base • Boxes
 */
const introContainer = {
  margin: '0 auto 3em',
  maxWidth: 1000,
  textAlign: 'center',
  [minWidth(breakpoints.small)]: {
    marginBottom: '4em',
  },
  [minWidth(breakpoints.medium)]: {
    marginBottom: '5em',
  },
  [minWidth(breakpoints.large)]: {
    marginBottom: '6em',
  },
};

const itemContainer = (align, isEven, wantLosange = false) => {
  // Props
  let losange;

  // We want a losange ?
  if (wantLosange) {
    losange = {
      '::after': {
        content: '""',
        background: isEven ? colors.lightGrey : colors.white,
        bottom: 0,
        left: '50%',
        height: '3em',
        position: 'absolute',
        transform: 'translate(-50%, 50%) rotateZ(45deg)',
        width: '3em',
        zIndex: 1,
      },
    };
  }

  let alignment;
  if (align) {
    alignment = {
      textAlign: align,
      [minWidth(breakpoints.xlarge)]: {
        flexDirection: getDirection[align],
      },
    };
  }

  return {
    background: isEven ? colors.lightGrey : colors.white,
    display: 'flex',
    padding: '4em 1em',
    [minWidth(breakpoints.xlarge)]: {
      // ...alignment[minWidth(breakpoints.xlarge)],
      background: 'red',
      // padding: wantLosange ? '5em 2em 4em' : '4em 2em',
    },
    position: 'relative',
    flexDirection: 'column-reverse',

    // Align
    ...alignment,

    // Losange
    ...losange,
  };
};

/*
 * Base • Buttons
 */
const greenEffect = (parent = '&', child = '::before') => ({
  [parent]: {
    overflow: 'hidden',
    position: 'relative',
    zIndex: 1,
  },
  [child]: {
    background: colors.greenWater,
    content: '""',
    position: 'absolute',
    width: '300%',
    height: '300%',
    top: '100%',
    left: 0,
    transition: '.2s',
    transformOrigin: '0 0',
    transform: 'rotate(15deg) translateZ(0)',
    zIndex: -1,
  },
  ':hover, :focus': {
    [child]: {
      top: '-200%',
      transition: '.5s',
    },
  },
});

const primaryButton = {
  background: colors.mainColor,
  borderRadius: 5,
  color: colors.white,
  display: 'inline-block',
  fontSize: '.9em',
  fontWeight: weights.bold,
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.12em',
  padding: '1em 2em',
  margin: '1em auto',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: 230,

  // #49 — Disable greenEffect, on mobile
  [minWidth(breakpoints.medium)]: {
    ...greenEffect(),
  },
};

/*
 * Base • Pictures
 */
const image = {
  display: 'block',
  maxWidth: '100%',
  margin: '0 auto',
};

/*
 * Base • Text
 */
const mainText = {
  fontSize: '1.1em',
  fontWeight: weights.light,
  lineHeight: '1.6',
  letterSpacing: '.01em',
  padding: '.65em 0',
};

const bold = {
  fontWeight: weights.bold,
};

/*
 * Base — Link
 */
const link = {
  background: utils.underline(colors.black),
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'none',
  ':hover, :focus': {
    color: colors.greenWater,
    background: utils.underline(colors.greenWater),
  },
};

/*
 * Base · Outro
 */
const outroContainer = {
  textAlign: 'center',
  padding: '4em 1em 1em',
  maxWidth: 500,
  margin: 'auto',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    paddingBottom: 0,
  },

  [minWidth(breakpoints.xlarge)]: {
    paddingTop: '6em',
  },
};

const wantMore = {
  fontSize: '1.25em',
  fontFamily: 'Encode Sans Condensed',
  fontWeight: weights.bold,
  lineHeight: 1.5,
};

/*
 * Export
 */
export default {
  // Titles
  primaryTitle,
  secondaryTitle,
  boxTitle,

  // Boxes
  introContainer,
  itemContainer,

  // Buttons
  primaryButton,

  // Picture
  image,

  // Text
  bold,
  mainText,
  link,

  // Outro
  outroContainer,
  wantMore,

  // Helper
  greenEffect,
};
